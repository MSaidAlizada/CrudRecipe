import axios from "axios";
import qs from "qs";

export const getRecipe = (id) => axios.get(`http://localhost:5000/getrecipe/${id}`);
export const getAllRecipe = () => axios.get('http://localhost:5000/getallrecipe');
export const createRecipe = (newRecipe) => axios.post('http://localhost:5000/createrecipe', qs.stringify(newRecipe), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
export const deleteRecipe = (id) => axios.delete(`http://localhost:5000/deleterecipe/${id}`);
export const favourite = (id) => axios.patch(`http://localhost:5000/favourite/${id}`);
export const getFavourited = () => axios.get('http://localhost:5000/getfavourited');