import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import app from "./src/app.js";
import { Clerk } from "@clerk/clerk-sdk-node";
import cors from "cors";

app.use(cors({
    origin: "http://localhost:3000",  // Adjust if frontend runs on a different port
    credentials: true
}));


dotenv.config();
// Clerk({ apiKey: process.env.CLERK_SECRET_KEY });
const PORT = process.env.PORT || 3000;
// Clerk.configure({ 
//     apiKey: process.env.CLERK_SECRET_KEY,  // Use the correct secret key
//   });
const clerk = new Clerk(process.env.CLERK_SECRET_KEY);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
