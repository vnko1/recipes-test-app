import axios from "axios";
import { ICategories, IRecipes } from "../types";

const apiInstance = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/",
});

export const recipesApi = {
  getMeals: (meal: string) =>
    apiInstance.get<IRecipes>("search.php", { params: { s: meal } }),

  getCategories: async () => apiInstance.get<ICategories>("categories.php"),

  getMeal: (mealId: string) =>
    apiInstance("lookup.php", { params: { i: mealId } }),
};
