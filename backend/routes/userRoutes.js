import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import {protect} from "../middleware/authMiddleware.js"



const router= express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/protected-route", protect, (req, res) => {
    res.json({ message: "Accesso consentito" });
  });


export { router };
