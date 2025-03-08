import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRecipes, ICategories } from "../../types";

export const recipesApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (build) => ({
    getMeals: build.query<IRecipes, string>({
      query: (meal) => ({ url: `search.php?s=${meal}` }),
    }),

    getMeal: build.query<IRecipes, string>({
      query: (mealId) => ({ url: `lookup.php?i=${mealId}` }),
    }),

    getCategories: build.query<ICategories, null>({
      query: () => ({ url: "categories.php" }),
    }),
  }),
});

export const { useGetMealsQuery, useGetMealQuery, useGetCategoriesQuery } =
  recipesApi;
