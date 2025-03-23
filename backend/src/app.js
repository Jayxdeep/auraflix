import express from 'express';
import cors from 'cors';
import authRoutes from './Routes/authRoutes.js';  
import influencerRoutes from './Routes/influencerRoutes.js';
import reviewRoutes from './Routes/reviewRoutes.js'
import authMiddleware from './Middleware/authMiddleware.js';
const app=express()
app.use(express.json())
app.use(cors())

app.use('/api/auth',authRoutes)
app.use('/api/influencers',authMiddleware,influencerRoutes)

app.use('/api/reviews',authMiddleware, reviewRoutes);  
export default app;