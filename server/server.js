import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true // only if using cookies or sessions
}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB connection error", err))

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(process.env.PORT, () => {
    console.log("Listening from port 5000");
})