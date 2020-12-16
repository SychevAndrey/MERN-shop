import Stripe from 'stripe';
import uuidv4 from 'uuid/v4';
import jwt from 'jsonwebtoken';
import Cart from '../../models/Cart';
import Order from '../../models/Order';
import calculateCartTotal from '../../utils/calculateCartTotal';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const { paymentData } = req.body;
    try {
        // 1) Verify and get user id from token
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        // 2) Find cart based on used id, populate it
        const cart = await Cart.findOne({user: userId}).populate({
            path: 'products.product',
            model: 'Product'
        });
        // 3) Calculate cart totals again from cart products(for secure purposes)
        const { cartTotal, stripeTotal } = calculateCartTotal(cart.products);
        // 4) Get email for payment data, see if emai linked with existing Stripe customer
        const prevCustomer = await stripe.customers.list({
            email: paymentData.email, 
            limit: 1
        });
        // 5) If not existing customer, create them based on ther email address
        const isExistinCustomer = prevCustomer.data.length > 0 ? prevCustomer.data[0].id : false;
        let newCustomer;
        if (!isExistinCustomer) {
            newCustomer = await stripe.customers.create({
                email: paymentData.email,
                source: paymentData.id
            });
        }
        const customer = isExistinCustomer || newCustomer;
        // 6) Create charge with total, send receip email
        const charge = await stripe.charges.create({
            currency: "USD",
            amount: stripeTotal,
            receipt_email: paymentData.email,
            customer,
            description: `Checkout | ${paymentData.email} | ${paymentData.id}`
        }, {
            idempotency_key: uuidv4()
        })
        // 7) Add order data to database
        await new Order({
            user: userId,
            email: paymentData.email,
            total: cartTotal,
            products: cart.products
        }).save();
        // 8) Clear products in cart and
        await Cart.findOneAndUpdate(
            { _id: cart._id }, 
            { $set: { products: [] } }
        )
        // 9) Send back success (200) response
        res.status(200).send('Checkout successful');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing order');
    }
}