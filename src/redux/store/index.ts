import { configureStore } from "@reduxjs/toolkit";
import { recipesApi } from "../favoritesApi";
import { favoritesReducer } from "../favorites";

export const store = configureStore({
  reducer: {
    [recipesApi.reducerPath]: recipesApi.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware),
});

export type FavoriteState = ReturnType<typeof favoritesReducer>;
