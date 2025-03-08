import React from "react";
import { useParams } from "react-router";

import { useGetMealQuery } from "../../redux";
import { Loader, RecipeCard } from "../../components";

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const response = useGetMealQuery(id || "");
  const recipe = response.data?.meals[0];
  if (response.isLoading) return <Loader />;
  return (
    <section>
      {response.isSuccess && recipe ? <RecipeCard {...recipe} /> : null}
    </section>
  );
};

export default RecipePage;
