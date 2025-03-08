import React from "react";
import { useGetMealsQuery } from "../../redux";

import { Cards } from "./components";

const FavoritesPage: React.FC = () => {
  const response = useGetMealsQuery("");

  return (
    <section>
      <Cards recipes={response.data?.meals || []} {...response} />
    </section>
  );
};

export default FavoritesPage;
