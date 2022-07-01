import React from "react";
import Navbar from "../Navbar/Navbar";
import Recipes from "../Recipes/Recipes";

const Home = () => {
    return ( 
        <div className="Home">
            <Navbar />
            <Recipes recipes={[{name: "lorem", image: null, description: "ipsum", recipeId: 1},{name: "lorem", image: null, description: "ipsum", recipeId: 2},{name: "lorem", image: null, description: "ipsum", recipeId: 3}]} />
        </div>
     );
}
 
export default Home;