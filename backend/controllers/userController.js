import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();



export const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ message: "Email e password sono obbligatori" });
        }
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "Utente già registrato" });
        }


        const user = await User.create({
            email,
            password: password,
            role: 'user'
        });

        res.status(201).json({ message: "Utente registrato con successo" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Errore nella registrazione", error });
    }
};



export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Utente non trovato" });
        }
        console.log(password);
        console.log(user.password);
        console.log(await bcrypt.hash(await bcrypt.hash(password, 10), 10));
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Credenziali non valide" });
        }
        const payload = {
            userId: user._id,
            email: user.email,
            role: user.role
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5m' });

        res.status(200).json({ message: "Login effettuato con successo", token });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Errore nel login", error });
    }
};






