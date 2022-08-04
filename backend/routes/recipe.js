import { getAllRecipe, getRecipe, createRecipe, deleteRecipe, favourite, getFavourited } from "../controller/recipe.js";
import express from "express";

const router = express.Router();

router.get("/getrecipe/:id", getRecipe);
router.get("/getallrecipe", getAllRecipe);
router.post("/createrecipe", createRecipe);
router.delete("/deleterecipe/:id", deleteRecipe);
router.patch("/favourite/:id", favourite);
router.get("/getfavourited", getFavourited);

export default router;