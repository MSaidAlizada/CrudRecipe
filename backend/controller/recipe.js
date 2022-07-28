import mongoose from "mongoose";
import Recipe from "../models/recipe.js";

export function getAllRecipe(req, res) {
    Recipe.find({}, (err, recipes) => {
        if (!err) {
            res.status(200).json(recipes);
        }
        else {
            console.log(err);
        }
    })
}

export function getRecipe(req, res) {
    const id = req.params.id;
    Recipe.findById(id, (err, recipe) => {
        if (!err) {
            res.status(200).json(recipe);
        }
        else {
            console.log(err);
        }
    })
}

export function createRecipe(req, res) {
    const title = req.body.title;
    const description = req.body.description;
    const instruction = req.body.instruction;
    const imageFile = req.body.imageFile;
    const newRecipe = new Recipe({ title: title, description: description, instruction: instruction, imageFile: imageFile });
    newRecipe.save();
    res.status.json(newRecipe);
}