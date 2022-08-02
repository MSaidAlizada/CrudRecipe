import React from "react";
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import "./recipeCard.css"

const RecipeCard = ({ title, imageFile, description, id }) => {
    return ( 
        <Card>
            <CardHeader title={title} />
            <CardMedia component="img" image={imageFile} alt={title} height="130"/>
            <CardContent>
                <Typography>{description.length <= 100 ? description : description.slice(0,100) + "...."}</Typography>
            </CardContent>
            <Button variant="contained" className="button" component={Link} to={`/recipe/${id}`}>Open</Button>
        </Card>
     );
}
 
export default RecipeCard;