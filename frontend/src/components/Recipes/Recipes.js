import { Grid } from "@mui/material";
import React, {useState, useEffect} from "react";
import RecipeCard from "./RecipeCard/RecipeCard";
import { getAllRecipe } from "../../api/api";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        getAllRecipe()
            .then((res) => {
                setRecipes(res.data)
        })
    }, [])
    return ( 
        <div>
            <Grid container spacing={4} justifyContent="center">
                {recipes.map((recipe) =>
                    <Grid item xs={6} md={3}>
                        <RecipeCard title={recipe.title} imageFile={recipe.imageFile} description={recipe.description} id={recipe._id} />
                    </Grid>
                )}
            </Grid>
        </div>
     );
}
 
export default Recipes;