import { Grid } from "@mui/material";
import React, {useState} from "react";
import RecipeCard from "./RecipeCard/RecipeCard";
import { getAllRecipe } from "../../api/api";

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    getAllRecipe()
        .then((res) => {
            setRecipes(res.data)
        })
    return ( 
        <div>
            <Grid container spacing={4} justifyContent="center">
                {recipes.map((recipe) =>
                    <Grid item xs={6} md={3}>
                        <RecipeCard title={recipe.title} image={recipe.image} description={recipe.description} recipeId={recipe.recipeId} />
                    </Grid>
                )}
            </Grid>
        </div>
     );
}
 
export default Recipes;