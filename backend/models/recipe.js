import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    instruction: String,
    imageFile: String,
});

var Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;