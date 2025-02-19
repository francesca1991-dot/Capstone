import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

function CheckoutForm({ clientSecret }) {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) return;

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (error) {
            //setMessage(error.message);
            navigate('/cancel')
        } else if (paymentIntent.status === "succeeded") {
            navigate('/success')
            //setMessage("Pagamento completato!");
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Inserisci i dati della carta</h3>
            <CardElement/>
            <button type="submit" disabled={!stripe || loading}>
                {loading ? "Elaborazione..." : "Paga"}
            </button>
            {message && <p>{message}</p>}
        </form>
    );
}

export default CheckoutForm;  
