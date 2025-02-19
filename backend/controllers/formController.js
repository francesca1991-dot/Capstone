import FormModel from "../models/formModel.js";

export const sendMessage = async (req, res) => {
  try {
    const { nome, email, messaggio } = req.body;

    if (!nome || !email || !messaggio) {
      return res.status(400).json({ error: "Tutti i campi sono obbligatori" });
    }

    const nuovoMessaggio = new FormModel({ nome, email, messaggio });
    await nuovoMessaggio.save();

    res.status(201).json({ message: "Messaggio inviato con successo" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Errore nel salvataggio del messaggio" });
  }
};
