import axios from "axios";
import qs from "qs";

export const getRecipe = (id) => axios.get(`http://localhost:5000/getrecipe/${id}`);
export const getAllRecipe = () => axios.get('http://localhost:5000/getallrecipe');
export const createRecipe = (newRecipe) => axios.post('http://localhost:5000/createrecipe', qs.stringify(newRecipe), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });