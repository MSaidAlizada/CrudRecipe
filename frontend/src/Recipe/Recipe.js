import React from "react";
import { Paper, Typography } from "@mui/material";

const Recipe = ({name, image, description, instructions, recipeId}) => {
    return ( 
        <Paper sx={{margin: 4}}>
            <Typography variant="h4">{name}</Typography>
            <img src={image} alt={name} />
            <Typography variant="h6">Description:</Typography>
            <Typography variant="p">{description}</Typography>
            <Typography variant="h6">Instructions:</Typography>
            <Typography variant="p">{instructions}</Typography>
        </Paper>
     );
}
 
export default Recipe;