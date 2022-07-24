//Requiring dependencies
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(cors);

//connecting to database
mongoose.connect(process.env.DB_CONNECTION)
    .then(() => app.listen(5000))
    .catch((err) => console.log(err.message))