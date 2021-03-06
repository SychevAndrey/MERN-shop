import connectDb from "../../utils/connectDb";
import User from '../../models/User';
import Cart from '../../models/Cart';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

connectDb();

export default async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // 0) Validate the values
        if (!isLength(name, {min: 3, max: 13})) {
            return res.status(422).send('Name must be between 3 and 13 characters long');
        } else if (!isLength(password, {min: 8})) {
            return res.status(422).send('Password must be at least 8 characters');
        } else if (!isEmail(email)) {
            return res.status(422).send('Email must be valid');
        }
        // 1) Check to see if the user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(422).send(`User already exists with email ${email}`);
        }
        // 2) If not, hash their password
        const hash = await bcrypt.hash(password, 10);
        // 3) create a new user
        const newUser = await new User({ name, email, password: hash}).save();
        console.log(newUser);
        // 4) create token for the user
        const token = jwt.sign({ userId: newUser._id}, process.env.JWT_SECRET, { expiresIn: '7d'});
        // 5) create a cart for the user
        await new Cart({ user: newUser._id}).save();
        // 6) send the token to the user
        res.status(201).json(token);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sing up, try again later');
    }
}