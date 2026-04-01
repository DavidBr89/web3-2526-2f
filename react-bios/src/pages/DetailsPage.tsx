// import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import Axios from "axios";
import { movieAxios } from "../api/movieApi";
import { useQuery } from "@tanstack/react-query";

// https://api.themoviedb.org/3/movie/popular
// const BASE_FIND_URL = "https://api.themoviedb.org/3/movie/";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const DetailsPage = () => {
  const { movieId } = useParams();

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["movies", movieId],
    queryFn: () => {
      return movieAxios.get<Movie>(`/${movieId}`);
    },
  });

  // const [movie, setMovie] = useState<Movie>();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<unknown>();

  // useEffect(() => {
  //   // Self invoking function
  //   (async () => {
  //     try {
  //       setIsLoading(true);
  //       // const response = await Axios.get<Movie>(`${BASE_FIND_URL}${movieId}`, {
  //       //   headers: {
  //       //     Authorization: import.meta.env.VITE_TMDB_API_KEY,
  //       //   },
  //       // });

  //       const response = await movieAxios.get<Movie>(`/${movieId}`);

  //       setMovie(response.data);
  //     } catch (error) {
  //       setError(error);
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   })();
  // }, [movieId]);

  //   State opvragen vanuit het navigeren door de useNavigate hook
  //   const { state } = useLocation();
  //   console.log(state.movieItem);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Fout bij het laden van de request! {error.message}</p>;
  }

  // if (!movie) {
  //   return <p>Film niet gevonden...</p>;
  // }

  if (!data) {
    return <p>Film niet gevonden...</p>;
  }

  return (
    <div>
      <img src={`${BASE_IMAGE_URL}/${data.data.backdrop_path}`} />
      <p className="text-3xl">{data.data.title}</p>
    </div>
  );
};

export default DetailsPage;
