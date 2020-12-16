import { Button, Segment, Divider } from "semantic-ui-react";
import { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import calculateCartTotal from '../../utils/calculateCartTotal';

function CartSummary({ products, handleChechout, success }) {
  const [isCartEmpty, setCartEmpty] = useState(false);
  const [cartAmount, setCartAmount] = useState(0);
  const [stripeAmount, setStripeAmount] = useState(0);

  useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    setCartAmount(cartTotal);
    setStripeAmount(stripeTotal);
    setCartEmpty(products.length === 0);
  }, [products]);

  return (
    <>
      <Divider />
      <Segment clearing size="large">
        <strong>Sub total:</strong> ${cartAmount}
        <StripeCheckout
          name='React Reserve'
          amount={stripeAmount}
          image={products.length > 0 ? products[0].product.mediaUrl : ''}
          currency='USD'
          shippingAddress={true}
          billingAddress={true}
          zipCode={true}
          token={handleChechout}
          triggerEvent='onClick'
          stripeKey='pk_test_xAk7vEydYlRWso0K6RtBg3kc'
        >
          <Button disabled={isCartEmpty || success} icon="cart" color="purple" floated="right" content="Checkout" />
        </StripeCheckout>
      </Segment>
    </>
  );
}

export default CartSummary;
