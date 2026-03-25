import { useFavorites } from "../hooks/useFavorites";

const FavoritesPage = () => {
  // Context gaan gebruiken of consumeren
  const { favs } = useFavorites();

  // TODO: Alle favorieten tonen, MovieItem gebruiken
  // Als er geen favorieten zijn toon dan een paragraaf met Geen favorieten

  return <div>FavoritesPage</div>;
};

export default FavoritesPage;
