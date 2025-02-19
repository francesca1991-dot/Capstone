import mongoose from 'mongoose';

const FormSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    messaggio: { type: String, required: true },
}, { timestamps: true });

const FormModel = mongoose.model('requests', FormSchema);

export default FormModel;
