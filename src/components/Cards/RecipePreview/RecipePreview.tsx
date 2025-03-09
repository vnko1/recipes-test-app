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
  useAppSelector,
  usePrefetch,
} from "../../../redux";

interface Props extends IMeal {
  classNames?: string;
  isFavoriteCard?: boolean;
}

const RecipePreview: React.FC<Props> = ({ isFavoriteCard, ...cardProps }) => {
  const {
    strCategory,
    strMealThumb,
    strArea,
    strMeal,
    idMeal,
    strSource,
    strInstructions,
  } = cardProps;
  const prefetchPage = usePrefetch("getMeal");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favoritesCards = useAppSelector((state) => state.favorites);
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
      <CardActionArea
        onMouseEnter={() => {
          // if (!isFavoriteCard) {
          //   prefetchPage(idMeal);
          // }
        }}
        onClick={() => {
          if (!isFavoriteCard) {
            prefetchPage(idMeal);
            navigate("recipes/" + idMeal);
          }
        }}
      >
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
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Category: {strCategory}
          </Typography>
          {isFavoriteCard ? (
            <>
              <Typography>Instruction:</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {strInstructions}
              </Typography>
            </>
          ) : null}
          {isFavoriteCard ? (
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Total ingredients: {totalIngredients}
            </Typography>
          ) : null}
          {isFavoriteCard ? (
            <Link href={strSource} target="_blank" rel="noreferrer noopener">
              Instruction
            </Link>
          ) : null}
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
