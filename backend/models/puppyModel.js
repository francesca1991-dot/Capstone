import mongoose from 'mongoose';


const puppySchema = new mongoose.Schema ({
    name: String,
    sex: String,
    price: Number,
    months: Number,
    available: Boolean, 
    img: String,
});

const Puppy = mongoose.model("Puppy", puppySchema);


export default Puppy;