import { Grid } from "@mui/material";
import React from "react";
import RecipeCard from "./RecipeCard/RecipeCard";

const Recipes = ({ recipes }) => {
    return ( 
        <div>
            <Grid container spacing={4}>
                {recipes.map((recipe) =>
                    <Grid item xs={6} md={3}>
                        <RecipeCard name={recipe.name} image={recipe.image} description={recipe.description} recipeId={recipe.recipeId} />
                    </Grid>
                )}
            </Grid>
        </div>
     );
}
 
export default Recipes;