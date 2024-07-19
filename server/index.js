import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';

dotenv.config()

console.log('DATABASE_URL:', process.env.DATABASE_URL);

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use((req,res,next)=>{
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', 0);
    res.set('Surrongate-Control', 'no-store');
    next();
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
});

app.use('/api/user', userRoute)
app.use("/api/residency", residencyRoute);

app.use(cors({
    origin: "*",
    methods:['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders:['Content-Type', 'Authorization']
}));