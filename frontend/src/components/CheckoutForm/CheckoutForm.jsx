import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function CheckoutForm({ clientSecret }) {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 

    const [amount, setAmount] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const { id : puppyId } = useParams();


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
            navigate('/cancel')
        } else if (paymentIntent.status === "succeeded") {
            await fetch(`http://localhost:3001/api/puppies/updateAvailability`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ puppyId }),
            });
    
            navigate('/success');
        }

        setLoading(false);
    };
    return (
        <form 
            onSubmit={handleSubmit} 
            style={{
                display: "flex", 
                flexDirection: "column", 
                gap: "10px", 
                maxWidth: "400px", 
                margin: "auto", 
                padding: "20px", 
                border: "1px solid #ccc", 
                borderRadius: "8px", 
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
            }}
        >
            <h3 style={{ textAlign: "center" }}>Inserisci i dettagli del pagamento</h3>
            
            <input 
                type="text" 
                placeholder="Nome" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                style={{
                    padding: "10px", 
                    border: "1px solid #ccc", 
                    borderRadius: "5px", 
                    fontSize: "16px"
                }}
            />
            
            <input 
                type="text" 
                placeholder="Cognome" 
                value={surname} 
                onChange={(e) => setSurname(e.target.value)} 
                required 
                style={{
                    padding: "10px", 
                    border: "1px solid #ccc", 
                    borderRadius: "5px", 
                    fontSize: "16px"
                }}
            />
            
            <input 
                type="number" 
                placeholder="Importo (€)" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                required 
                style={{
                    padding: "10px", 
                    border: "1px solid #ccc", 
                    borderRadius: "5px", 
                    fontSize: "16px"
                }}
            />
            
            <div 
                style={{ 
                    padding: "10px", 
                    border: "1px solid #ccc", 
                    borderRadius: "5px",
                    backgroundColor: "#f9f9f9"
                }}
            >
                <CardElement />
            </div>
            
            <button 
                type="submit" 
                disabled={!stripe || loading} 
                style={{
                    backgroundColor: "#28a745", 
                    color: "white", 
                    padding: "10px", 
                    border: "none", 
                    borderRadius: "5px", 
                    cursor: "pointer", 
                    fontSize: "16px",
                    marginTop: "10px"
                }}
            >
                {loading ? "Elaborazione..." : "Paga"}
            </button>
        </form>
    );
}


export default CheckoutForm;  
