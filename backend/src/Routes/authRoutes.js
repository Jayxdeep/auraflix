import express from 'express';
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const router = express.Router();

// Protected route example (only accessible to authenticated users)
router.get('/profile', ClerkExpressRequireAuth(), (req, res) => {
    res.json({ message: "You have accessed a protected route!", user: req.auth.userId });
});

// Public route example
router.get('/public', (req, res) => {
    res.json({ message: "This is a public route, no authentication needed." });
});

export default router;
