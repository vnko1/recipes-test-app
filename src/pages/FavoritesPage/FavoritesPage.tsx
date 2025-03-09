import React from "react";
import { useAppSelector } from "../../redux";
import { Cards } from "./components";

const FavoritesPage: React.FC = () => {
  const cards = useAppSelector((state) => state.favorites);

  return (
    <section>
      <Cards recipes={cards} />
    </section>
  );
};

export default FavoritesPage;
