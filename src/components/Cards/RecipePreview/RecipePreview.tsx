import React, { useMemo } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
  Link,
} from "@mui/material";

import { IMeal } from "../../../types";
import {
  addToFavorites,
  deleteFromFavorites,
  useFavoritesSelector,
} from "../../../redux";

interface Props extends IMeal {
  classNames?: string;
  isFavoriteCard?: boolean;
}

const RecipePreview: React.FC<Props> = ({ isFavoriteCard, ...cardProps }) => {
  const { strCategory, strMealThumb, strArea, strMeal, idMeal, strSource } =
    cardProps;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favoritesCards = useFavoritesSelector((state) => state.favorites);
  const isFavorite = favoritesCards.some((card) => card.idMeal === idMeal);

  const totalIngredients = useMemo(() => {
    if (isFavoriteCard)
      return Object.entries(cardProps).reduce((acc, [key, value]) => {
        if (key.startsWith("strIngredient") && value) return (acc += 1);
        return acc;
      }, 0);
  }, [cardProps, isFavoriteCard]);

  const handleAddToFavorite = () => {
    dispatch(addToFavorites(cardProps));
  };

  const handleRemoveFromFavorite = () => {
    dispatch(deleteFromFavorites(idMeal));
  };
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
          {isFavoriteCard ? (
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Ingredients: {totalIngredients}
            </Typography>
          ) : null}
          {isFavoriteCard ? <Link href={strSource}>Instruction</Link> : null}
        </CardContent>
      </CardActionArea>
      {isFavorite ? (
        <Button onClick={handleRemoveFromFavorite}>Remove</Button>
      ) : (
        <Button onClick={handleAddToFavorite}>Add</Button>
      )}
    </Card>
  );
};

export default RecipePreview;
