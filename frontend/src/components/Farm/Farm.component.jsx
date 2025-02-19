import React from "react";
import { Link } from "react-router-dom";

//bootstrap import
import { Container } from "react-bootstrap";

//style import
import './Farm.style.css';

const Farm = () => {
  return (
    <Container>
      <h1 className="text-center">La struttura dell'allevamento</h1>
      <p>
        Allevamento casa di Dolly è un'impresa agricola, a conduzione familiare,
        autorizzata dall'associazione danitaria locale (ASL) e riconosciuta
        dall'ente nazionale cinofilia italiana (ENCI) e dalla federazione
        cinologica internazionale (FCI), e dunque perfetta per la crescita di un
        cucciolo di Golden Retriever.
      </p>
      <p>
        La nostra struttura è completamente immersa nel verde , nei pressi della
        cittadinadi Arezzo e si estende su una superficie di 6.000 mq circa di
        terreno; qui i nostri cani godono gli ampi spazi a disposizione in cui
        possono giocare , rilassarsi e lavorare in addestramento.
      </p>
      <p>
        Tutti i nostri cani sono mantenuti nelle migliori condizioni di
        benessere e di salute; vivono sia in casa con noi, sia nelle zone a loro
        dedicate. Se durante il giorno hanno la possibilità di sfruttare gli
        spazi esterni della nostra tenuta, per la notte, abbiamo dei box
        coibentati, freschi in estate e caldi in inverno, con zona notte
        riscaldata o refrigerata a seconda della stagione e acqua sempre fresca,
        collegata automaticamente alla sorgente di "Casa di Dolly".
      </p>
      <p>
        <Link to="/puppies" className="Puppy">Un cucciolo di Golden Retriever</Link> vivrà i suoi
        primi mesi circondato dal nostro amore e dalle attenzioni di allevatori
        esperti. Questo prima di conoscere voi, la sua nuova famiglia per la
        vita.
      </p>
      <div className="d-flex justify-content-center m-5">
  <img 
    src="https://casadiolle.it/wp-content/uploads/2024/11/ENCI-3-1024x778.png" 
    className="img-fluid custom-img me-5"
    alt="ENCI logo"
  />
  <img 
    src="https://casadiolle.it/wp-content/uploads/2024/11/FCI_logo.svg-1024x1024.png" 
    className="img-fluid custom-img"
    alt="FCI logo"
  />
</div>
<h1 className="text-center m-5">Le foto della nostra impresa</h1>
<div className="row justify-content-center">
  <div className="col-12 col-md-4 mb-3">
    <img 
      src="https://casadiolle.it/wp-content/uploads/2024/12/unnamed-3-1024x600.jpg"
      className="img-fluid" 
      alt="Immagine 2"
    />
  </div>
  <div className="col-12 col-md-4 mb-3">
    <img 
      src="https://casadiolle.it/wp-content/uploads/2024/12/unnamed-1024x767.jpg"
      className="img-fluid" 
      alt="Immagine 3"
    />
  </div>
  <div className="col-12 col-md-4 mb-3">
    <img 
      src="https://casadiolle.it/wp-content/uploads/2024/12/unnamed-4-1024x949.jpg"
      className="img-fluid" 
      alt="Immagine 3"
    />
  </div>
  <div className="col-12 col-md-4 mb-3">
    <img 
      src="https://www.horsepoint.it/assets/images/a/oleggio-1-899ea8aa.jpg"
      className="img-fluid" 
      alt="Immagine 3"
    />
  </div>
</div>

    </Container>
  );
};

export default Farm;
