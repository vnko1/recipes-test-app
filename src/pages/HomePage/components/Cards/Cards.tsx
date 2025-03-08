import React from "react";

import { IMeal } from "../../../../types";
import {
  CardsList,
  Loader,
  Placeholder,
  RecipePreview,
} from "../../../../components";

interface Props {
  recipes: IMeal[];
  start: number;
  end: number;
  isFetching: boolean;
  isError: boolean;
}
const Cards: React.FC<Props> = ({
  recipes,
  start,
  end,
  isError,
  isFetching,
}) => {
  if (isFetching) return <Loader />;
  if (isError || !recipes.length) return <Placeholder />;
  return (
    <CardsList>
      {recipes.slice(start, end).map((meal) => (
        <RecipePreview key={meal.idMeal} {...meal} />
      ))}
    </CardsList>
  );
};

export default Cards;
