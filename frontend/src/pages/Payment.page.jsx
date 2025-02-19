import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import { useParams } from "react-router-dom";


//inizializzo stripe con la public key 
const stripePromise = loadStripe("pk_test_51QmH87Prq92fXSIbPDAPrS2w0269D7CibcXS5Htzh0AtFrIOJzEftnoPjRSfFoi4bBRl3rHzLnJdBYq67CjnJXl600Mh5YseNk");

function PaymentPage() {
    const [clientSecret, setClientSecret] = useState("");
    const { id } = useParams();
    const [puppy, setPuppy] = useState(null);

    useEffect(() => {
        if (puppy) {
            fetch("http://localhost:3001/api/payment/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: 1000 })
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        }
    }, [puppy]);



    useEffect(() => {
        fetch(`http://localhost:3001/api/puppies/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPuppy(data);
            })
            .catch((error) => console.log(error));
    }, [id]);


    return (
        <div>
            <h2>Completa il pagamento</h2>
            {clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm clientSecret={clientSecret} />
                </Elements>
            )}
        </div>
    );
}

export default PaymentPage; 
