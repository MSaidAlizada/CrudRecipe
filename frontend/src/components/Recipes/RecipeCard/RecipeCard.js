import React from "react";
import { Link } from 'react-router-dom';
import { deleteRecipe, favourite } from "../../../api/api";
import { Button, Card, CardContent, CardHeader, CardMedia, Typography, IconButton } from "@mui/material";
import { StyledEngineProvider } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./recipeCard.css"

const RecipeCard = ({ title, imageFile, description, favourited, setUpdated ,id }) => {
    const handleDelete = () => {
        setUpdated(true);
        deleteRecipe(id);
    };
    const handleFavourite = () => {
        setUpdated(true);
        favourite(id);
    };
    return ( 
        <Card>
            <CardHeader title={title} />
            <CardMedia component="img" image={imageFile} alt={title} height="130"/>
            <CardContent>
                <Typography>{description.length <= 100 ? description : description.slice(0,100) + "...."}</Typography>
            </CardContent>
            <StyledEngineProvider injectFirst>
                <div>
                    <IconButton sx={{float: "right"}} onClick={handleDelete}>
                        <DeleteIcon sx={{color: "#DF7861"}} />
                    </IconButton>
                    <IconButton sx={{ float: "right" }} onClick={handleFavourite}>
                        {favourited ? <FavoriteIcon sx={{color: "#DF7861"}}/> : <FavoriteBorderIcon sx={{color: "#DF7861"}}/>}
                    </IconButton>
                    <Button variant="contained" className="button" component={Link} to={`/recipe/${id}`}>Open</Button>
                </div>
            </StyledEngineProvider>
        </Card>
     );
}
 
export default RecipeCard;