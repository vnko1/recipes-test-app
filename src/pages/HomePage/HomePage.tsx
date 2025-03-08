import React, { useMemo } from "react";
import { useSearchParams } from "react-router";

import { useGetMealsQuery } from "../../redux";
import {
  Categories,
  SearchInput,
  CardsList,
  RecipePreview,
  CustomPagination,
  Placeholder,
} from "../../components";

const itemsPerPage = 2;

const HomePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const recipeName = searchParams.get("s")?.toString() || "";
  const category = searchParams.get("c")?.toString() || "";
  const currentPage = Math.max(Number(searchParams.get("p")) || 1, 1);

  const response = useGetMealsQuery(recipeName);

  const filteredRecipes = useMemo(() => {
    return response.data?.meals?.filter(
      (meal) => !category || meal.strCategory === category
    );
  }, [category, response.data?.meals]);

  const total = Math.max(
    1,
    Math.ceil((filteredRecipes?.length || 0) / itemsPerPage)
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const recipes = filteredRecipes?.slice(startIndex, endIndex);

  return (
    <section>
      <SearchInput />
      <Categories />
      {recipes?.length ? (
        <CardsList>
          {recipes.map((meal) => (
            <RecipePreview key={meal.idMeal} {...meal} />
          ))}
        </CardsList>
      ) : (
        <Placeholder />
      )}
      <CustomPagination count={total} page={currentPage} />
    </section>
  );
};

export default HomePage;
