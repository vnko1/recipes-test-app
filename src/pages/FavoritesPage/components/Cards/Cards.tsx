import React from "react";

import { IMeal } from "../../../../types";
import { useAppSelector } from "../../../../redux";
import {
  CardsList,
  Loader,
  Placeholder,
  RecipePreview,
} from "../../../../components";

interface Props {
  recipes: IMeal[];
  isFetching: boolean;
  isError: boolean;
}
const Cards: React.FC<Props> = ({ recipes, isError, isFetching }) => {
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const filteredRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.idMeal)
  );
  if (isFetching) return <Loader />;

  if (isError || !filteredRecipes.length) return <Placeholder />;

  return (
    <CardsList>
      {filteredRecipes.map((meal) => (
        <RecipePreview key={meal.idMeal} {...meal} isFavoriteCard />
      ))}
    </CardsList>
  );
};

export default Cards;
