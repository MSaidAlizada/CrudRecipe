import mongoose from "mongoose";
import Recipe from "../models/recipe.js";

export const getAllRecipe = async (req, res) => {
    await Recipe.find({}).exec((err, recipes) => {
        if (!err) {
            res.status(200).json(recipes);
        }
        else {
            console.log(err);
        }
    })
}

export async function getRecipe(req, res) {
    const id = req.params.id;
    await Recipe.findById(id).exec((err, recipe) => {
        if (!err) {
            res.status(200).json(recipe);
        }
        else {
            console.log(err);
        }
    })
}

export async function createRecipe(req, res) {
    const title = req.body.title;
    const description = req.body.description;
    const instruction = req.body.instruction;
    const imageFile = req.body.imageFile;
    const newRecipe = new Recipe({ title: title, description: description, instruction: instruction, imageFile: imageFile, favourited: false });
    await newRecipe.save();
    res.status(201).json(newRecipe);
}

export function deleteRecipe(req, res) {
    const id = req.params.id;
    Recipe.findByIdAndDelete(id).exec((err, deleteRecipe) => {
        if (!err) {
            res.json({ message: "Succesfully deleted: " + deleteRecipe })
        }
        else {
            console.log(err);
        }
    });
}

export async function favourite(req, res) {
    const id = req.params.id;
    await Recipe.findById(id).exec(async (err, recipe) => {
        var newRecipe = recipe;
        newRecipe.favourited = !newRecipe.favourited;
        await Recipe.findByIdAndUpdate(id, newRecipe);
        res.json(newRecipe);
    });
}

export async function getFavourited(req, res) {
    await Recipe.find({ favourited: true }).exec((err, recipes) => {
        if (!err) {
            res.status(200).json(recipes);
        }
        else {
            console.log(err);
        }
    })
}