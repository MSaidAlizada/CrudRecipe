import React from "react";
import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

const RecipeCard = ({name, image, description, recipeId}) => {
    return ( 
        <Card>
            <CardHeader title={name} />
            <CardMedia component="img" image={image} alt={name} />
            <CardContent>
                <Typography>{description}</Typography>
            </CardContent>
            <Button variant="contained">Open</Button>
        </Card>
     );
}
 
export default RecipeCard;