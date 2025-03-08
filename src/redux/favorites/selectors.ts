import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useFavoritesSelector = useSelector.withTypes<RootState>();
