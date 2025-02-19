import express from "express";
import { sendMessage } from "../controllers/formController.js"; 

const router = express.Router();

router.post("/", sendMessage); 

export { router };

