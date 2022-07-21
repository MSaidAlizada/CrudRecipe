import React from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";

const AddRecipe = () => {
    return ( 
        <div className="AddRecipe">
            <Paper sx={{margin: 8, display: "flex",flexDirection:"column"}}>
                <Typography variant="h4" sx={{ margin: 2 }}>Create new recipe</Typography>
                <TextField label="Recipe Name" sx={{ margin: 2}}></TextField>
                <TextField label="Description" sx={{ margin: 2 }} multiline minRows={3}></TextField>
                <TextField label="Instructions" sx={{ margin: 2 }} multiline minRows={3}></TextField>
                <label for="recipeImage">Image file:</label>
                <input type="file" name="avatar" accept="image/png, image/jpeg"></input>
                <Button variant="contained" sx={{ margin: 2}}>Submit</Button>
            </Paper>
        </div>
     );
}
 
export default AddRecipe;