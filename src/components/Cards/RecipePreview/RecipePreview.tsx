import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

import { IMeal } from "../../../types";
import { useNavigate } from "react-router";

interface Props
  extends Pick<
    IMeal,
    "idMeal" | "strArea" | "strCategory" | "strMeal" | "strMealThumb"
  > {
  classNames?: string;
}

const RecipePreview: React.FC<Props> = ({
  strCategory,
  strMealThumb,
  strArea,
  strMeal,
  idMeal,
}) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardActionArea onClick={() => navigate("recipes/" + idMeal)}>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RecipePreview;
