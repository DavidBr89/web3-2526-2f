import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Axios from "axios";
import { movieAxios } from "../api/movieApi";

// https://api.themoviedb.org/3/movie/popular
const BASE_FIND_URL = "https://api.themoviedb.org/3/movie/";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const DetailsPage = () => {
  const { movieId } = useParams();

  // TODO: Converteer dit naar React Query opgelet queryKey is nu ook met de id

  const [movie, setMovie] = useState<Movie>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    // Self invoking function
    (async () => {
      try {
        setIsLoading(true);
        // const response = await Axios.get<Movie>(`${BASE_FIND_URL}${movieId}`, {
        //   headers: {
        //     Authorization: import.meta.env.VITE_TMDB_API_KEY,
        //   },
        // });

        const response = await movieAxios.get<Movie>(`/${movieId}`);

        setMovie(response.data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  //   State opvragen vanuit het navigeren door de useNavigate hook
  //   const { state } = useLocation();
  //   console.log(state.movieItem);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Fout bij het laden van de request!</p>;
  }

  if (!movie) {
    return <p>Film niet gevonden...</p>;
  }

  return (
    <div>
      <img src={`${BASE_IMAGE_URL}/${movie.backdrop_path}`} />
      <p className="text-3xl">{movie.title}</p>
    </div>
  );
};

export default DetailsPage;
