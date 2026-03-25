// Stap 1: Context aanmaken

import { createContext, useState, type PropsWithChildren } from "react";

interface FavoritesContextType {
  favs: Movie[];
  toggleFavorite: (movie: Movie) => void;
  isInFavorites: (movieId: number) => boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const FavoritesContext = createContext<FavoritesContextType | null>(
  null,
);

// Stap 2: Provider aanmaken
const FavoritesProvider = (props: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const toggleFavorite = (movie: Movie) => {
    if (isInFavorites(movie.id)) {
      setFavorites(favorites.filter((m) => m.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const isInFavorites = (movieId: number) =>
    favorites.some((m) => m.id === movieId);

  return (
    <FavoritesContext.Provider
      value={{ favs: favorites, toggleFavorite, isInFavorites }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
