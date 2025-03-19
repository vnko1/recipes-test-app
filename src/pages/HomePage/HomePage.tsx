import React, { useMemo } from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { recipesApi } from "../../api";
import { Categories, SearchInput, CustomPagination } from "../../components";
import { Cards } from "./components";

const itemsPerPage = 2;

const HomePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const recipeName = searchParams.get("s")?.toString() || "";
  const category = searchParams.get("c")?.toString() || "";
  const currentPage = Math.max(Number(searchParams.get("p")) || 1, 1);

  const { data, isError, isFetching } = useQuery({
    queryKey: ["meals", { recipeName }],
    queryFn: () => recipesApi.getMeals(recipeName),
  });

  const recipes = useMemo(() => {
    return data?.data.meals?.filter(
      (meal) => !category || meal.strCategory === category
    );
  }, [category, data?.data.meals]);

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
        isError={isError}
        isFetching={isFetching}
      />
      <CustomPagination count={total} />
    </section>
  );
};

export default HomePage;
