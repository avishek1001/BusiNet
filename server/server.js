import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';


import businessProfile from './routes/businessProfile.js'

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB connection error", err))

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    // credentials: true // only if using cookies or sessions
}));

app.use(express.json());

// Routes
app.use('/api/business-profile', businessProfile);

app.listen(process.env.PORT, () => {
    console.log("Listening from port 5000");
})