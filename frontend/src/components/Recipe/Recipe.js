import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../../api/api";
import { Paper, Typography } from "@mui/material";

const Recipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({
        title: "",
        description: "",
        instruction: "",
        imageFile: "",
    })
    getRecipe(id)
        .then((res) => setRecipe(res.data))
    return ( 
        <Paper sx={{margin: 4}}>
            <Typography variant="h4">{recipe.title}</Typography>
            <img src={recipe.imageFile} alt={recipe.title} />
            <Typography variant="h6">Description:</Typography>
            <Typography variant="p">{recipe.description}</Typography>
            <Typography variant="h6">Instructions:</Typography>
            <Typography variant="p">{recipe.instruction}</Typography>
        </Paper>
     );
}
 
export default Recipe;