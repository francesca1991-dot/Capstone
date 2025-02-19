import express from 'express';
import { getAllPuppies, getPuppyId, createCheckoutSession, updateAvailability } from '../controllers/puppyController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get("/", getAllPuppies); 
router.get("/:id", getPuppyId); 
router.post('/create-checkout-session', protect, createCheckoutSession); 
router.post('/updateAvailability', updateAvailability); 


export { router };

