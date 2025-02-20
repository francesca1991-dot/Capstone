import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



const createPaymentIntent = async (req, res) => {
    const { price } = req.body; 

    if (!price || price <= 0) {
        return res.status(400).json({ error: "Il prezzo deve essere un valore positivo" });
    }


    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount : price * 100,
            currency: "eur",
            payment_method_types: ["card"],
        });
        
res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
 



export { createPaymentIntent };
