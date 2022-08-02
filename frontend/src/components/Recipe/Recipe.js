import React, { useState, useEffect } from "react";
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
    useEffect(() => {
        getRecipe(id)
            .then((res) => {
                setRecipe(res.data)
            })
    }, [id]);
    return (
        <Paper sx={{margin: 4}}>
            <Typography variant="h4" sx={{ margin: 2}}>{recipe.title}</Typography>
            <img src={recipe.imageFile} alt={recipe.title} />
            <Typography variant="h6" sx={{ margin: 2, display: "block"}}>Description:</Typography>
            <Typography variant="p" sx={{ margin: 2, display: "block"}}>{recipe.description}</Typography>
            <Typography variant="h6" sx={{ margin: 2, display: "block"}}>Instructions:</Typography>
            <Typography variant="p" sx={{ margin: 2, display: "block"}}>{recipe.instruction}</Typography>
        </Paper>
     );
}
 
export default Recipe;