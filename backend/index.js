//Requiring dependencies
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import recipeRoutes from "./routes/recipe.js";
dotenv.config();

const app = express();

//middleware
app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}));
app.use(cors());
app.use("/", recipeRoutes);

//connecting to database
mongoose.connect(process.env.DB_CONNECTION)
    .then(() => app.listen(process.env.PORT))
    .catch((err) => console.log(err.message))