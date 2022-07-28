import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import Recipe from "./components/Recipe/Recipe";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="add" element={<AddRecipe />} />
          <Route path="recipe" element={<Recipe/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
