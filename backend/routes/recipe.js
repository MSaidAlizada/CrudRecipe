import { getAllRecipe, getRecipe, createRecipe } from "../controller/recipe.js";
import express from "express";

const router = express.Router();

router.get("/getrecipe/:id", getRecipe);
router.get("/getallrecipe", getAllRecipe);
router.post("/createrecipe", createRecipe);

export default router;