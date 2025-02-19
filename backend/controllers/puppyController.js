import Puppy from '../models/puppyModel.js';
import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);




//ottengo tutti i cuccioli
const getAllPuppies = async (req, res) => {
    try {
        const allPuppies = await Puppy.find({});
        res.status(200).json(allPuppies); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Errore nel recupero dei cuccioli" });  
    }
};

//verifico se ottengo il mio db sulla backend
const testFetchPuppies = async () => {
    try {
        const allPuppies = await Puppy.find({});
        console.log("Cuccioli nel database:", allPuppies);
    } catch (error) {
        console.error("Errore nel recupero dei cuccioli:", error);
    }
};
testFetchPuppies();


//ottengo il singolo cucciolo
const getPuppyId = async (req, res) => {
    try {
        const puppy = await Puppy.findById(req.params.id);
        if (!puppy) {
            return res.status(404).json({ message: "Cucciolo non trovato" });
        }
        res.json(puppy);
    } catch (error) {
        res.status(500).json({ message: "Errore nel recupero del cucciolo" });
    }
};


//creo la sessione in uscita se il cucciolo non è disponibile, altrimenti aggiungo un sistema di pagamento 
const createCheckoutSession = async (req, res) => {
    const { puppyId } = req.body;
    const puppy = await Puppy.findById(puppyId);
    if (!puppy || !puppy.available) {
      return res.status(400).json({ message: 'Cucciolo non disponibile' });
    }
  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: puppy.name,
            },
            unit_amount: 1000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success?puppyId=${puppyId}`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });
    res.json({ id: session.id });
  };
  
  const updateAvailability = async (req, res) => {
    const { puppyId } = req.body;
    try {
      await Puppy.findByIdAndUpdate(puppyId, { available: false });
      res.status(200).json({ message: 'Disponibilità aggiornata' });
    } catch (error) {
      res.status(500).json({ message: "Errore nell'aggiornamento della disponibilità", error });
    }
  };


  export { getAllPuppies, getPuppyId, createCheckoutSession,updateAvailability };