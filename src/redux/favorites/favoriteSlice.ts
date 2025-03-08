import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavoriteState = Array<string>;

const initialState = [] satisfies FavoriteState as FavoriteState;

export const favoritesRecipesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<string>) {
      return [...state, action.payload];
    },

    deleteFromFavorites(state, action: PayloadAction<string>) {
      return state.filter((el) => el !== action.payload);
    },
  },
});

export const { addToFavorites, deleteFromFavorites } =
  favoritesRecipesSlice.actions;

export const favoritesReducer = favoritesRecipesSlice.reducer;
