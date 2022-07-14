import React from "react";
import { Paper, TextField, Typography } from "@mui/material";

const AddRecipe = () => {
    return ( 
        <div className="AddRecipe">
            <Paper sx={{margin: 8}}>
                <Typography variant="h4" sx={{ margin: 2 }}>Create new recipe</Typography>
                <TextField label="Recipe Name"></TextField>
            </Paper>
        </div>
     );
}
 
export default AddRecipe;