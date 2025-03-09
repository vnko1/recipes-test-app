import React, { useMemo } from "react";
import { useSearchParams } from "react-router";

import { useGetMealsQuery } from "../../redux";
import { Categories, SearchInput, CustomPagination } from "../../components";
import { Cards } from "./components";

const itemsPerPage = 2;

const HomePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const recipeName = searchParams.get("s")?.toString() || "";
  const category = searchParams.get("c")?.toString() || "";
  const currentPage = Math.max(Number(searchParams.get("p")) || 1, 1);

  const response = useGetMealsQuery(recipeName);

  const recipes = useMemo(() => {
    return response.data?.filter(
      (meal) => !category || meal.strCategory === category
    );
  }, [category, response.data]);

  const total = Math.max(1, Math.ceil((recipes?.length || 0) / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <section>
      <SearchInput />
      <Categories />
      <Cards
        recipes={recipes || []}
        start={startIndex}
        end={endIndex}
        {...response}
      />
      <CustomPagination count={total} page={currentPage} />
    </section>
  );
};

export default HomePage;
