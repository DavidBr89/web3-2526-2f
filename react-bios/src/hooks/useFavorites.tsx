import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

export const useFavorites = () => {
  const favoritesContext = useContext(FavoritesContext);

  if (!favoritesContext) {
    throw new Error("FavoritesContext must be wrapped in a FavoritesProvider");
  }

  return favoritesContext;
};
