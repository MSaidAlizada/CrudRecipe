import React from "react";
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

const RecipeCard = ({name, image, description, recipeId}) => {
    return ( 
        <Card>
            <CardHeader title={name} />
            <CardMedia component="img" image={image} alt={name} height="130"/>
            <CardContent>
                <Typography>{description}</Typography>
            </CardContent>
            <Button variant="contained" component={Link} to="/recipe" sx={{margin: 2}}>Open</Button>
        </Card>
     );
}
 
export default RecipeCard;