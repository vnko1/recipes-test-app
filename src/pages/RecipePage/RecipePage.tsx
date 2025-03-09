import React from "react";
import { useParams } from "react-router";

import { useGetMealQuery } from "../../redux";
import { Loader, Placeholder, RecipeCard } from "../../components";

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetMealQuery(id || "");

  if (isLoading) return <Loader />;

  if (!data) return <Placeholder />;

  return (
    <section>
      <RecipeCard {...data} />
    </section>
  );
};

export default RecipePage;
