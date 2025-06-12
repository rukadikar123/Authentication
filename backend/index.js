import express from 'express'
import dotenv from 'dotenv'
import { MongoDbConnect } from './config/MongoDbConnect.js';
import cookieParser from 'cookie-parser';
import cors from "cors"
import authRouter from './Routes/authRoute.js';

const app=express();
dotenv.config();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

// Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

// Routes

app.use("/api/authUser",authRouter)


MongoDbConnect();
const port= process.env.PORT || 8000

app.listen(port ,()=>{
    console.log(`server is running on port : ${port}` );
    
})

