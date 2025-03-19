import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "../favorites";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
