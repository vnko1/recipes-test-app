import React from "react";

import { IMeal } from "../../../../types";

import { CardsList, Placeholder, RecipePreview } from "../../../../components";

interface Props {
  recipes: IMeal[];
}
const Cards: React.FC<Props> = ({ recipes }) => {
  if (!recipes.length) return <Placeholder text="Empty!" />;

  return (
    <CardsList>
      {recipes.map((meal) => (
        <RecipePreview key={meal.idMeal} {...meal} isFavoriteCard />
      ))}
    </CardsList>
  );
};

export default Cards;
