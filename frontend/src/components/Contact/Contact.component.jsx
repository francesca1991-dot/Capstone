import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

//bootstrap import
import { Row, Col, Button } from 'react-bootstrap';

//style import
import "./Contact.style.css"

const Contact = () => {
  return (
    <div className="contact-container">
      <Row className="justify-content-center align-items-center text-center">
        <Col md={6}>
          <div className="contact-box">
            <h2>Contattaci</h2>
            <img
              src="https://img.freepik.com/vettori-gratuito/cuore-della-stampa-della-zampa-connesso_78370-3265.jpg?t=st=1737650416~exp=1737654016~hmac=ad2760e7b7beb31b9ed809e1c0d595d7b8369b2326a67dd99dc1808b099304ce&w=740"
              alt="Dog Paw Logo"
              className="contact-logo"
            />
            <p className="mt-3">Allevamento Casa di Dolly</p>
            <p>Telefono: +39 324 685 5285</p>
            <p>Per maggiori informazioni, non esitare a contattarci!</p>
            <Button variant="secondary" className="mt-3">
              <Link to="/api/form" style={{ color: 'inherit', textDecoration: 'none' }}>
                Contattaci ora
              </Link>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Contact

