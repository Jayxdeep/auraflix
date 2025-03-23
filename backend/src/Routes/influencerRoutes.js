import express from 'express';
import { getInfluencers, addInfluencer } from '../controllers/influencerController.js';
import authMiddleware from "../Middleware/authMiddleware.js"; 


const router = express.Router();

router.get("/", getInfluencers);
router.post("/", authMiddleware, addInfluencer);

export default router;
