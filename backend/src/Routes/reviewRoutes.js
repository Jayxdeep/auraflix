import express from 'express';
import { addReview } from '../controllers/reviewController.js';  

import authMiddleware from '../Middleware/authMiddleware.js';  

const router = express.Router();

router.post("/", authMiddleware, addReview);

export default router;
