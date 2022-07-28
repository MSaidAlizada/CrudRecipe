import axios from "axios";
import qs from "qs";

export const getRecipe = (id) => axios.get(`http://localhost:5000/getrecipe/${id}`);
export const getAllRecipe = () => axios.get('http://localhost:5000/getallrecipe');
export const createRecipe = (title, description, instruction, imageFile) => axios.post('http://localhost:5000/createrecipe', qs.stringify({ title: title, description: description, instruction: instruction, imageFile: imageFile }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });