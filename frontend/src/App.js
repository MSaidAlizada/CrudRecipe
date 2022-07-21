import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipe from "./AddRecipe/AddRecipe";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="add" element={<AddRecipe/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
