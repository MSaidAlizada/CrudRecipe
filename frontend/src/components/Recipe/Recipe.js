import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../../api/api";
import { Paper, Typography } from "@mui/material";
import { StyledEngineProvider } from '@mui/material/styles';
import "./recipe.css";

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
        <StyledEngineProvider injectFirst>
            <Paper className="paper">
                <Typography variant="h4" sx={{ margin: 2}}>{recipe.title}</Typography>
                <img src={recipe.imageFile} alt={recipe.title} />
                <Typography variant="h6" className="text">Description:</Typography>
                <Typography variant="p" className="text">{recipe.description}</Typography>
                <Typography variant="h6" className="text">Instructions:</Typography>
                <Typography variant="p" className="text">{recipe.instruction}</Typography>
            </Paper>
        </StyledEngineProvider>
     );
}
 
export default Recipe;