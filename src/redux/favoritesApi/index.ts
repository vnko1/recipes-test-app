import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRecipes, ICategories, IMeal, ICategory } from "../../types";

export const recipesApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (build) => ({
    getMeals: build.query<IMeal[], string>({
      query: (meal) => ({ url: `search.php?s=${meal}` }),
      transformResponse: (response: IRecipes) => response.meals,
    }),

    getMeal: build.query<IMeal, string>({
      query: (mealId) => ({ url: `lookup.php?i=${mealId}` }),
      transformResponse: (response: IRecipes) => response.meals[0],
    }),

    getCategories: build.query<ICategory[], void>({
      query: () => ({ url: "categories.php" }),
      transformResponse: (response: ICategories) => response.categories,
    }),
  }),
});

export const {
  useGetMealsQuery,
  useGetMealQuery,
  useGetCategoriesQuery,
  usePrefetch,
} = recipesApi;
