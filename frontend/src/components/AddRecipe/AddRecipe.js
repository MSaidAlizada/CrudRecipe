import React, { useState } from "react";
import FileBase64 from 'react-file-base64';
import { createRecipe } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Button, Paper, TextField, Typography } from "@mui/material";

const AddRecipe = () => {
    const navigate = useNavigate();
    const [newRecipe, setNewRecipe] = useState({
        title: "",
        description: "",
        instruction: "",
        imageFile: "",
    });
    const handleSubmit = () => {
        createRecipe(newRecipe);
        navigate("/", {replace: true})
    };
    return (
        <div className="AddRecipe">
            <form onSubmit={handleSubmit}>
                <Paper sx={{ margin: 8, display: "flex", flexDirection: "column" }}>
                    <Typography variant="h4" sx={{ margin: 2 }}>Create new recipe</Typography>
                    <TextField label="Recipe Name" sx={{ margin: 2}} onChange={(e)=>setNewRecipe({...newRecipe, title: e.target.value})}/>
                    <TextField label="Description" sx={{ margin: 2 }} multiline minRows={3} onChange={(e)=>setNewRecipe({...newRecipe, description: e.target.value})}/>
                    <TextField label="Instructions" sx={{ margin: 2 }} multiline minRows={3} onChange={(e)=>setNewRecipe({...newRecipe, instruction: e.target.value})}/>
                    <label for="recipeImage">Image file:</label>
                    <FileBase64 type="file" name="avatar" accept="image/png, image/jpeg" onDone={({base64}) => setNewRecipe({...newRecipe, imageFile: base64})} />
                    <Button type="submit" variant="contained" sx={{ margin: 2 }}>Submit</Button>
                </Paper>
            </form>
        </div>
     );
}
 
export default AddRecipe;