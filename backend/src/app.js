import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import influencerRoutes from './routes/influencerRoutes.js';

const app=express()
app.use(express.json())
app.use(cors())

app.use('/api/auth',authRoutes)
app.use('/api/influencers',influencerRoutes)
export default app;