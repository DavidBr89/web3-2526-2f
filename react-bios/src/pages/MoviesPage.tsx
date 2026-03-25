import React, { useEffect, useState } from "react";
import Axios from "axios";
import MovieItem from "../components/MovieItem";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useQuery } from "@tanstack/react-query";
// import { type Movie } from "../types";

interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const MoviesPage = () => {
  // Alle films te laten tonen

  // URL
  // https://api.themoviedb.org/3/movie/popular
  // TOKEN
  // Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjViYzAyMTNmYTQyZDZlZTRjOGNiZDU3N2NmZGYxNiIsIm5iZiI6MTYwNzA4MDMxNi43NjE5OTk4LCJzdWIiOiI1ZmNhMTk3YzY2YTdjMzAwM2U0Nzg0YTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lzCcndnLR8EVjssAlOYNBxrSDYZndbi6JnYHFfCmZPE

  // const [movies, setMovies] = useState<Movie[]>([]);

  //   useEffect(() => {
  //     const fetchMoviesWithFetch = async () => {
  //       //   GET Request naar onze API met de ingebouwde fetch methode
  //       try {
  //         const response = await fetch(
  //           "https://api.themoviedb.org/3/movie/popular",
  //           {
  //             headers: {
  //               Authorization:
  //                 "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjViYzAyMTNmYTQyZDZlZTRjOGNiZDU3N2NmZGYxNiIsIm5iZiI6MTYwNzA4MDMxNi43NjE5OTk4LCJzdWIiOiI1ZmNhMTk3YzY2YTdjMzAwM2U0Nzg0YTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lzCcndnLR8EVjssAlOYNBxrSDYZndbi6JnYHFfCmZPE",
  //             },
  //           },
  //         );
  //         const data = (await response.json()) as MovieResponse;
  //         setMovies(data.results);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchMoviesWithFetch();
  //   }, []);

  // useEffect(() => {
  //   const fetchMoviesWithAxios = async () => {
  //     try {
  //       const response = await Axios.get<MovieResponse>(
  //         "https://api.themoviedb.org/3/movie/popular",
  //         {
  //           headers: {
  //             Authorization: import.meta.env.VITE_TMDB_API_KEY,
  //           },
  //         },
  //       );
  //       setMovies(response.data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchMoviesWithAxios();
  // }, []);

  // Data fetching met React Query

  const { data, isLoading, isError, error, refetch, dataUpdatedAt } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: () => {
      return Axios.get<MovieResponse>(
        "https://api.themoviedb.org/3/movie/popular",
        {
          headers: {
            Authorization: import.meta.env.VITE_TMDB_API_KEY,
          },
        },
      );
    },
    // enabled: false,
    // refetchInterval: 5000,
  });

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="p-8 ">
      <p>Laatste update: {new Date(dataUpdatedAt).toLocaleTimeString()}</p>
      <button
        className="px-4 py-2 bg-teal-600 text-white text-center my-8"
        onClick={() => {
          refetch();
        }}>
        Vernieuw data
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 cursor-pointer">
        {data?.data.results.map((m) => (
          <MovieItem key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
