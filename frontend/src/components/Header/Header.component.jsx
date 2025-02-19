import React from "react";

//bootstrap import
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

//style import
import "./Header.style.css";

function Header() {
  return (
    <>
      <Navbar
        expand="lg"
        style={{
          backgroundImage: `
          linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)),
          url("https://www.sannicolo-labrador.com/wp-content/uploads/2022/09/cuccioli-golden-retriever-gialli-1.jpg")
        `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          backgroundRepeat: "no-repeat",
        }}
        className="d-flex align-items-start p-0"
      >
        <Image
          src="https://i.etsystatic.com/25241936/r/il/aed0aa/6000812060/il_fullxfull.6000812060_mqji.jpg"
          rounded
          style={{ height: "200px", width: "200px" }}
          className="logo"
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              L'allevamento
            </Nav.Link>
            <Nav.Link as={Link} to="/puppies">
              Cucciolate
            </Nav.Link>
            <Nav.Link as={Link} to="/questions">
              Domande frequenti
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contatti
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;