import React from "react";
import { useFavoritesSelector } from "../../redux";
import { CardsList, Placeholder, RecipePreview } from "../../components";

const FavoritesPage: React.FC = () => {
  const cards = useFavoritesSelector((state) => state.favorites);

  return (
    <section>
      {cards.length ? (
        <CardsList>
          {cards.map((meal) => (
            <RecipePreview key={meal.idMeal} {...meal} isFavoriteCard />
          ))}
        </CardsList>
      ) : (
        <Placeholder text="Empty!" />
      )}
    </section>
  );
};

export default FavoritesPage;
