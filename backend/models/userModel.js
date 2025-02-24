import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema ({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["admin", "user"], default: "user" }
    });

  
    userSchema.pre("save", async function (next) {
      if (!this.isModified("password") || !this.password) return next();
      try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
      } catch (error) {
        next(error);
      }
    });
    

 
  userSchema.methods.comparePassword = async function (password) {
    try {
      return await bcrypt.compare(password, this.password);
    } catch (error) {
      console.error("Errore nel confronto delle password:", error);
      return false;
    }
  };
  
  const User = mongoose.model("User", userSchema);
  
  export default User;
  
  
  
