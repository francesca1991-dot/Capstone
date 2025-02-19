import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jwtDecode} from "jwt-decode";

function PuppyDetails() {
  const { id } = useParams(); 
  const [puppy, setPuppy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [autenticato, setAutenticato] = useState (false);
  const navigate = useNavigate();  

  useEffect(() => {
    fetch(`http://localhost:3001/api/puppies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPuppy(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
      if (localStorage.getItem("token")) {
        const payload = jwtDecode(localStorage.getItem("token"))
       if (new Date (payload.exp * 1000) >= new Date()) {
        setAutenticato(true)
       }
      }
  }, [id]);


  const handleBuy = () => {
    
    const token= localStorage.getItem("token");
  
    if (!autenticato) {
      alert("Devi essere loggato per acquistare.");
      navigate("/login");
      return;
    }
  
    
    if (!puppy.available) {
      alert("Questo cucciolo non è più disponibile.");
      return;
    }
    
      navigate ('/payment/' + id)
  };


  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
    <div className="card shadow-lg" style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <div className="row g-0">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img
            src={puppy.img}
            className="img-fluid rounded-circle m-5"
            alt={puppy.name}
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body text-center">
            <h2 className="card-title">{puppy.name}</h2>
            <p><strong>Sex:</strong> {puppy.sex}</p>
            <p><strong>Age:</strong> {puppy.months} months</p>
  
            {puppy.available ? (
              <>
                <p className="card-text">Cucciolo ancora disponibile, procedi con la registrazione o login</p>
                {(!autenticato) ? (
                    <button className="btn btn-primary btn-lg" onClick={() => navigate('/login')}>
                      Effettua il Login per acquistare
                    </button>
                  ) : (
                    <button className="btn btn-success btn-lg" onClick={handleBuy}>
                      Acquista
                    </button>
                  )}
                </>
              ) : (
                <p className="card-text">Cucciolo non più disponibile</p>
              )}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default PuppyDetails;
