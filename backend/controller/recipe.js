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
    const newRecipe = new Recipe({ title: title, description: description, instruction: instruction, imageFile: imageFile, favourited: false });
    newRecipe.save();
    res.status(201).json(newRecipe);
}

export function deleteRecipe(req, res) {
    Recipe.findByIdAndRemove(req.params.id )
    res.json({ message: "Succesfully deleted" })
}

export function favourite(req, res) {
    const id = req.params.id;
    Recipe.findById(id, (err, recipe) => {
        var newRecipe = recipe;
        newRecipe.favorited = !newRecipe.favorited;
        Recipe.findByIdAndUpdate(id, newRecipe);
        res.json(newRecipe);
    });
}

export function getFavourited(req, res) {
    Recipe.find({ favourited: true }, (err, recipes) => {
        if (!err) {
            res.status(200).json(recipes);
        }
        else {
            console.log(err);
        }
    })
}