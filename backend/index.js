import express from "express";
import connectDB from "./config/db.js";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import userRoutes from '../backend/routes/userRoutes.js';
import movieRoutes from '../backend/routes/movieRoutes.js';
import uploadImageRoute from '../backend/routes/uploadImageRoute.js';
import path from 'path';
import orderRoutes from '../backend/routes/orderRoutes.js';

dotenv.config();
const port = process.env.PORT || 5000;
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users",userRoutes);
app.use("/api/movies",movieRoutes);
app.use("/api/upload",uploadImageRoute);
app.use("/api/orders",orderRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));
app.listen(port,()=>console.log('server up'));