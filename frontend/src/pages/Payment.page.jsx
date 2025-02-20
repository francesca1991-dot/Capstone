import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import { useParams } from "react-router-dom";



const stripePromise = loadStripe("pk_test_51QmH87Prq92fXSIbPDAPrS2w0269D7CibcXS5Htzh0AtFrIOJzEftnoPjRSfFoi4bBRl3rHzLnJdBYq67CjnJXl600Mh5YseNk");

function PaymentPage() {
    const [clientSecret, setClientSecret] = useState("");
    const { id } = useParams();
    const [puppy, setPuppy] = useState(null);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if (puppy && amount > 0 && clientSecret === "") {
            fetch(`http://localhost:3001/api/payment/create-payment-intent/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ price: amount })
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        }
    }, [puppy, amount, clientSecret]);



    useEffect(() => {
        fetch(`http://localhost:3001/api/puppies/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPuppy(data);
                setAmount(data.price);
            })
            .catch((error) => console.log(error));
    }, [id]);


    return (
        <div>
            <h2 className = "text-center mb-5 fw-bold">Completa il pagamento</h2>
            {clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm clientSecret={clientSecret} />
                </Elements>
            )}
        </div>
    );
}

export default PaymentPage; 
