import React from "react";
import { useFavoritesSelector } from "../../redux";
import { Cards } from "./components";

const FavoritesPage: React.FC = () => {
  const cards = useFavoritesSelector((state) => state.favorites);

  return (
    <section>
      <Cards recipes={cards} />
    </section>
  );
};

export default FavoritesPage;
