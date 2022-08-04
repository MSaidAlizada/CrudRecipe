import { Grid } from "@mui/material";
import React, {useState, useEffect} from "react";
import RecipeCard from "./RecipeCard/RecipeCard";
import { getAllRecipe } from "../../api/api";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);
    useEffect(() => {
        getAllRecipe()
            .then((res) => {
                setRecipes(res.data)
            });
        setIsUpdated(false);
    }, [isUpdated]);
    return ( 
        <div>
            <Grid container spacing={4} justifyContent="center">
                {recipes.map((recipe) =>
                    <Grid item xs={6} md={3}>
                        <RecipeCard title={recipe.title} imageFile={recipe.imageFile} description={recipe.description} favourited={recipe.favourited} id={recipe._id} setUpdated={setIsUpdated}/>
                    </Grid>
                )}
            </Grid>
        </div>
     );
}
 
export default Recipes;