import MovieItem from "../components/MovieItem";
import { useFavorites } from "../hooks/useFavorites";

const FavoritesPage = () => {
  const { favs } = useFavorites();

  if (!favs.length) {
    return (
      <div>
        <p>Geen favorieten...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3">
      {favs.map((f) => {
        return <MovieItem key={f.id} movie={f} />;
      })}
    </div>
  );
};

export default FavoritesPage;
