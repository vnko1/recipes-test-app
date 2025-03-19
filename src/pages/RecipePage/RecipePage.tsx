import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { Loader, RecipeCard } from "../../components";
import { recipesApi } from "../../api";

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const response = useQuery({
    queryKey: ["meal", { mealId: id }],
    queryFn: () => recipesApi.getMeal(id || ""),
  });
  const recipe = response.data?.data.meals[0];
  if (response.isLoading) return <Loader />;
  return (
    <section>
      {response.isSuccess && recipe ? <RecipeCard {...recipe} /> : null}
    </section>
  );
};

export default RecipePage;
