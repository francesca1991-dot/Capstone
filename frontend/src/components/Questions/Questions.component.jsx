import React from 'react'
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';

//style import
import './Questions.style.css';

const Questions = () => {


  return (

    <Container>
      <Row className="Questions">
        <h1 className="text-center title">Domande frequenti</h1>
        <Dropdown  >
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="larger-dropdown" >
            Quanto è impegnativo il golden retriever?
          </Dropdown.Toggle>
          <Dropdown.Menu className="answer">
            <p>Il Golden Retriever è una razza canina molto apprezzata per la sua natura affettuosa e il suo temperamento equilibrato. Tuttavia, possedere un Golden Retriever comporta un certo impegno. Questi cani sono noti per la loro energia e vivacità, il che significa che richiedono una quantità significativa di tempo e attenzione da parte dei loro proprietari. Non si tratta solo di portare il cane a fare una passeggiata; è fondamentale dedicare tempo a giochi interattivi e attività stimolanti per mantenere il cane mentalmente e fisicamente attivo. Inoltre, i Golden Retriever sono animali sociali che prosperano nella compagnia delle persone e di altri cani. Questo implica che non possono essere lasciati soli per lunghi periodi, poiché potrebbero sviluppare ansia da separazione o comportamenti distruttivi.</p>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="larger-dropdown" >
            Perchè scegliere un Golden Retriever?
          </Dropdown.Toggle>
          <Dropdown.Menu className="answer" >
            <p>Scegliere un Golden Retriever come compagno di vita è una decisione che porta con sé numerosi vantaggi. Questa razza è conosciuta per le sue caratteristiche uniche che la rendono particolarmente adatta a famiglie, single e persone di tutte le età. La loro natura affettuosa e dolce, unita a una spiccata intelligenza, fa sì che i Golden Retriever siano tra i cani più amati al mondo. Non solo sono animali da compagnia, ma anche partner attivi nelle attività quotidiane, rendendo ogni momento trascorso insieme speciale e memorabile. Inoltre, i Golden Retriever sono noti per la loro versatilità. Possono adattarsi a diversi stili di vita, che si tratti di una vita in appartamento o di una casa con giardino. La loro energia e il loro desiderio di interagire con gli esseri umani li rendono ideali per famiglie con bambini, ma anche per persone anziane che cercano un amico fedele. La loro capacità di adattarsi a vari ambienti e situazioni li rende una scelta eccellente per chiunque desideri un cane che possa integrarsi facilmente nella propria vita. </p>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="larger-dropdown"  >
            Per chi è adatto il Golden Retriever?
          </Dropdown.Toggle>
          <Dropdown.Menu className="answer" >
            <p>Il Golden Retriever è una delle razze canine più adatte per le famiglie con bambini. La loro natura gentile e affettuosa li rende compagni ideali per i più piccoli. Questi cani sono noti per la loro pazienza e tolleranza, qualità fondamentali quando si interagisce con i bambini, che possono essere a volte un po’ irruenti. Un Golden Retriever è in grado di sopportare le marachelle dei bambini senza mai mostrare segni di aggressività, rendendolo un ottimo amico per giochi e avventure. Inoltre, i Golden Retriever sono cani molto socievoli e amano stare in compagnia. Questo aspetto li rende perfetti per le famiglie che desiderano un animale domestico che possa partecipare attivamente alla vita quotidiana. Che si tratti di una passeggiata nel parco o di una giornata in spiaggia, un Golden Retriever sarà sempre pronto a unirsi al divertimento, contribuendo a creare ricordi indimenticabili per tutta la famiglia.</p>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="larger-dropdown" >
            Quanto può stare da solo un Golden Retriever?
          </Dropdown.Toggle>
          <Dropdown.Menu className="answer">
            <p>Il Golden Retriever è una razza canina nota per il suo carattere affettuoso e socievole. Questi cani sono stati selezionati per lavorare a stretto contatto con gli esseri umani, il che li rende particolarmente sensibili alla solitudine. La loro natura amichevole e la predisposizione a formare legami forti con le persone possono influenzare la loro capacità di stare da soli. È importante considerare che ogni cane è un individuo e le sue esigenze possono variare in base alla personalità, all’età e alle esperienze passate. In generale, un Golden Retriever può tollerare brevi periodi di solitudine, ma non è consigliabile lasciarlo da solo per più di quattro o cinque ore al giorno. I cuccioli e i cani più giovani potrebbero avere bisogno di un’attenzione maggiore, mentre i cani adulti potrebbero adattarsi meglio a periodi di assenza più lunghi. Tuttavia, è fondamentale tenere presente che la solitudine prolungata può portare a problemi comportamentali e di salute.</p>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="larger-dropdown" >
            Quanto costa mantenere un Golden Retriever?
          </Dropdown.Toggle>
          <Dropdown.Menu className="answer">
            <p>Mantenere un golden retriever comporta una serie di spese che vanno ben oltre il semplice acquisto del cane. Questi cani, noti per la loro natura affettuosa e il loro temperamento equilibrato, richiedono un impegno finanziario significativo. È fondamentale considerare non solo i costi iniziali, ma anche le spese ricorrenti che si presenteranno nel corso della vita dell’animale. In questo articolo, esploreremo in dettaglio i vari aspetti economici legati al mantenimento di un golden retriever.  </p>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="larger-dropdown" >
            Come tenere un Golden Retriever in casa?
          </Dropdown.Toggle>
          <Dropdown.Menu className="answer">
            <p>Accogliere un Golden Retriever in casa richiede una preparazione adeguata per garantire un ambiente sicuro e confortevole. Prima di tutto, è fondamentale rimuovere oggetti pericolosi o fragili che potrebbero essere danneggiati dal cane o che potrebbero rappresentare un rischio per la sua salute. Ciò include cavi elettrici, piante tossiche e piccoli oggetti che potrebbero essere ingeriti. Creare uno spazio dedicato al cane, come un angolo con una cuccia comoda e giocattoli, aiuta a farlo sentire a casa e a stabilire un senso di appartenenza. Inoltre, è importante considerare la sicurezza degli spazi esterni. Se si dispone di un giardino, è consigliabile installare recinzioni alte e sicure per evitare che il cane scappi o si metta in situazioni pericolose. Assicurarsi che non ci siano aperture o fessure attraverso cui il Golden Retriever possa fuggire. Infine, è utile avere a disposizione una zona dove il cane possa riposare tranquillamente, lontano da rumori eccessivi o distrazioni, per favorire il suo benessere psicologico.  </p>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="larger-dropdown" >
            Qual è il costo di un Golden Retriever?
          </Dropdown.Toggle>
          <Dropdown.Menu className="answer">
            <p>Il costo iniziale per l'acquisto di un cucciolo di Golden Retriever può variare notevolmente a seconda di diversi fattori, tra cui la reputazione dell’allevatore, la qualità della linea di sangue e la località. In generale, il prezzo di un cucciolo di Golden Retriever si aggira tra i 1.000 e i 3.000 euro. Gli allevatori di alta qualità, che si dedicano alla selezione e alla salute dei loro cani, possono chiedere anche cifre superiori.
              È importante considerare che un prezzo più elevato non garantisce sempre un cucciolo sano, ma spesso riflette l’impegno dell’allevatore nella cura e nella selezione dei genitori. Inoltre, è fondamentale fare attenzione a dove si acquista il cucciolo. Gli allevatori responsabili forniscono documentazione riguardante la salute dei genitori e dei cuccioli, come certificati di esami per malattie genetiche comuni nei Golden Retriever.
              Acquistare da un allevatore non etico o da un negozio di animali può comportare costi aggiuntivi in futuro, a causa di problemi di salute non previsti. Pertanto, è consigliabile investire tempo nella ricerca e nella scelta di un allevatore affidabile.  </p>
          </Dropdown.Menu>
        </Dropdown>
      </Row>
    </Container>

  )
}

export default Questions;


