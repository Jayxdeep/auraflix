import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import dotenv from "dotenv";

dotenv.config();

export const requireAuth = ClerkExpressRequireAuth(); 
