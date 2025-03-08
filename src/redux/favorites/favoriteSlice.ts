import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMeal } from "../../types";

export const favoritesRecipesSlice = createSlice({
  name: "favorites",
  initialState: [] as IMeal[],
  reducers: {
    addToFavorites(state, action: PayloadAction<IMeal>) {
      state.push(action.payload);
    },

    deleteFromFavorites(state, action: PayloadAction<string>) {
      return state.filter((el) => el.idMeal !== action.payload);
    },
  },
});

export const { addToFavorites, deleteFromFavorites } =
  favoritesRecipesSlice.actions;

export const favoritesReducer = favoritesRecipesSlice.reducer;
