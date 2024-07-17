import express from "express";
import connectDB from "./config/db.js";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import userRoutes from '../backend/routes/userRoutes.js';
import movieRoutes from '../backend/routes/movieRoutes.js';
dotenv.config();
const port = process.env.PORT || 5000;
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users",userRoutes);
app.use("/api/movies",movieRoutes);
app.listen(port,()=>console.log('server up'));