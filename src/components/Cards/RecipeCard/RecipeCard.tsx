import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import { IMeal } from "../../../types";

interface Props extends IMeal {
  classNames?: string;
}
const RecipeCard: React.FC<Props> = ({
  strCategory,
  strMealThumb,
  strMeal,
  strArea,
  ...props
}) => {
  return (
    <Card sx={{ maxWidth: 800, marginX: "auto" }}>
      <CardMedia
        component="img"
        height="140"
        image={strMealThumb}
        alt={strCategory}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {strMeal}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {strArea}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {strCategory}
        </Typography>
        {Object.keys(props).map((key, idx) =>
          typeof props[key as keyof typeof props] === "string" ? (
            <Typography
              key={idx}
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              {props[key as keyof typeof props]}
            </Typography>
          ) : null
        )}
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
