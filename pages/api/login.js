import connectDb from "../../utils/connectDb";
import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

connectDb();

export default async (req, res) => {
    const {email, password} = req.body;
    try {
        // 1) check to see if a user already exists
        const user = await User.findOne({email}).select('+password');
        // 2) if nor, return an error
        if (!user) {
            return res.status(404).send('No user exists with that email address');
        }
        // 3) check if users' password is correct
        const passwordMatch = await bcrypt.compare(password, user.password);
        // 4) if so, generate a token
        if (passwordMatch) {
            const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, { expiresIn: '7d'});
             // 5) send the token to the user
            res.status(200).json(token)
        } else {
            res.status(401).send('Password does not match');
        }
    } catch (error) {
        console.error(err);
        res.status(500).send('Error login attempt');
    }
}