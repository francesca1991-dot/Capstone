import React, { useState } from "react";

//bootstrap import
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

//style import
import "./Footer.style.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    messaggio: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/form", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(formData), 
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message); 
        setFormData({ nome: "", email: "", messaggio: "" }); 
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Errore durante l'invio del messaggio");
      }
    } catch (error) {
      console.error(error);
      alert("Si è verificato un errore, riprova più tardi.");
    }
  };

  return (
    <Row className="Footer mt-5 d-flex align-items-center">
      <Col className="m-5 col-12">
        <img
          src="https://img.freepik.com/vettori-gratuito/cuore-della-stampa-della-zampa-connesso_78370-3265.jpg?t=st=1737650416~exp=1737654016~hmac=ad2760e7b7beb31b9ed809e1c0d595d7b8369b2326a67dd99dc1808b099304ce&w=740"
          alt="Dog Paw Logo"
          style={{ width: "100px", height: "100px" }}
        />
        <p className="mt-3">Allevamento casa di Dolly</p>
        <p>Telefono: +39 324 685 5285</p>
        <p>Il nostro allevamento di Golden è aperto per visite ed informazioni</p>
        <p>Contattaci per maggiori info</p>
        <p>© 2025 / Casa di dolly. Tutti i diritti riservati.</p>
      </Col>
      <Col className="mt-1 ms-5 col-md-6">
        <p>Vuoi maggiori informazioni? Contattaci</p>
        <Form className="mb-5" onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formNomeCognome">
                <Form.Label>Nome e Cognome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci nome e cognome"
                  className="form-color"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="inserisci la tua email"
                  className="form-color"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formRichiesta">
            <Form.Label>Richiesta</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="form-color"
              name="messaggio"
              value={formData.messaggio}
              onChange={handleChange}
            />
          </Form.Group>
          <button type="submit" className="btn btn-secondary">
            Invia
          </button>
        </Form>
      </Col>
    </Row>
  );
};

export default Footer;





