import mongoose from 'mongoose';
import 'dotenv/config';
import User from '../models/userModel.js'; 


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connesso a MongoDB');
  })
  .catch((err) => {
    console.error('Errore di connessione:', err);
  });

const updatePasswords = async () => {
  const users = await User.find(); 

  for (let user of users) {
    if (!user.password) {
      const randomPassword = Math.random().toString(36).slice(-8); 
      
      user.password = randomPassword;
      await user.save();
      console.log(`Password aggiornata per ${user.email}: ${randomPassword}`);
      }
  }

  mongoose.disconnect();
};

updatePasswords();

