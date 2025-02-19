import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


//style import
import './PuppyList.style.css'

function PuppyList() {
  const [puppies, setPuppies] = useState([]);
  const navigate = useNavigate();  

  useEffect(() => {
    fetch("http://localhost:3001/api/puppies")
      .then((response) => response.json())
      .then((data) => setPuppies(data))
      .catch((error) => console.log(error));
  }, []);

  const handleMoreInfo = (id) => {
    navigate(`/puppy/${id}`); 
  };

  return (
    <div className="container mt-4">
      <p className="text-center information"> <span className="fw-bold">Nota bene:</span> I cuccioli potranno essere presi qui in allevamento o potranno essere consegnati in tutta Italia senza nessun costo aggiuntivo. Basterà lasciare un acconto effettuando il login per prenotare il cucciolo, il restante potrete darlo alla consegna o direttamente qui in allevamento! La modalità puoi sceglierla tu contattandoci!
    </p>
    <div className="row ">
      {puppies.map((puppy) => (
        <div key={puppy._id} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4 ">
          <div className="card text-center p-3 border-0 shadow-lg puppy-card">
            <img src={puppy.img} alt={puppy.name} className="card-img-top puppy-img rounded-circle" />
            <h3 className="card-title mt-3 property-text">{puppy.sex} {puppy.name}</h3>
            <button
              onClick={() => handleMoreInfo(puppy._id)}
              className="btn btn-primary mt-3 puppy-button"
            >
              Maggiori informazioni
            </button>
          </div>
        </div>
      ))}
    </div>
    
  </div>
  
  );
}

export default PuppyList;

