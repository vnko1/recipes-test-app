import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import { IMeal } from "../../../types";
import { createObject } from "../../../utils";

interface Props extends IMeal {
  classNames?: string;
}

const RecipeCard: React.FC<Props> = ({
  strMeal,
  strDrinkAlternate,
  strCategory,
  strArea,
  strInstructions,
  strMealThumb,
  strTags,
  strYoutube,
  strSource,
  ...props
}) => {
  const ingredients = createObject<string>(props, "strIngredient");
  const measures = createObject<string>(props, "strMeasure");

  const renderList = (
    data: Record<string, string>,
    delimiter: string | null = null
  ) => {
    return Object.keys(data).map((key) => (
      <Typography key={key} variant="body2" sx={{ color: "text.secondary" }}>
        {data[key]}
        {delimiter}
      </Typography>
    ));
  };

  return (
    <Card sx={{ maxWidth: 800, marginX: "auto" }}>
      <CardMedia
        component="img"
        height="140"
        image={strMealThumb}
        alt={strCategory}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {strMeal}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Region: {strArea}
        </Typography>
        <Typography>Instruction:</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {strInstructions}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Category: {strCategory}
        </Typography>
        {strDrinkAlternate && (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {strDrinkAlternate}
          </Typography>
        )}
        {strTags && (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {strTags}
          </Typography>
        )}
        <Typography>Ingredients:</Typography>
        <Box sx={{ display: "flex", gap: 1, marginBottom: 5 }}>
          <Stack direction="column" spacing={1}>
            {renderList(ingredients, ":")}
          </Stack>
          <Stack direction="column" spacing={1}>
            {renderList(measures)}
          </Stack>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link
            href={strSource}
            sx={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            Recipe
          </Link>
          <Link
            href={strYoutube}
            sx={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            Video recipe
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
