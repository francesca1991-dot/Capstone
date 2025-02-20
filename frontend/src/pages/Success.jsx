import React from 'react';
import { useSearchParams } from "react-router-dom";

function Success() {
  let [searchParams] = useSearchParams();

  return (
    <div className="container mt-5 text-center">
      <h2>Pagamento effettuato con successo!</h2>
      <p>Grazie per l'acquisto.</p>
    </div>
  );
}

export default Success;
