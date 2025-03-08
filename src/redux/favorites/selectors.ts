import { favoritesReducer } from "./favoriteSlice";

type FavoriteState = ReturnType<typeof favoritesReducer>;

export const selectFavorites = (state: FavoriteState) => state;
