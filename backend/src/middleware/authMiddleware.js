import { requireAuth } from "@clerk/express";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = requireAuth({
  onError: (req, res, next, error) => {
    console.error("Error verifying session:", error);
    return res.status(401).json({
      message: "Unauthorized, error verifying session",
      error: error.message,
    });
  },
});

export default authMiddleware;
