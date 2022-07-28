import React from "react";
import Recipes from "../Recipes/Recipes";

const Home = () => {
    return ( 
        <div className="Home">
            <Recipes recipes={[{name: "lorem", image: "null", description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli", recipeId: 1},{name: "lorem", image: null, description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli", recipeId: 2},{name: "lorem", image: null, description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli", recipeId: 3}]} />
        </div>
     );
}
 
export default Home;