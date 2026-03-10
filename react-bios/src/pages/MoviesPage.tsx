import React, { useEffect, useState } from "react";
import Axios from "axios";

interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const MoviesPage = () => {
  // Alle films te laten tonen

  // URL
  // https://api.themoviedb.org/3/movie/popular
  // TOKEN
  // Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjViYzAyMTNmYTQyZDZlZTRjOGNiZDU3N2NmZGYxNiIsIm5iZiI6MTYwNzA4MDMxNi43NjE5OTk4LCJzdWIiOiI1ZmNhMTk3YzY2YTdjMzAwM2U0Nzg0YTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lzCcndnLR8EVjssAlOYNBxrSDYZndbi6JnYHFfCmZPE

  const [movies, setMovies] = useState<Movie[]>([]);

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

  useEffect(() => {
    const fetchMoviesWithAxios = async () => {
      try {
        const response = await Axios.get<MovieResponse>(
          "https://api.themoviedb.org/3/movie/popular",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjViYzAyMTNmYTQyZDZlZTRjOGNiZDU3N2NmZGYxNiIsIm5iZiI6MTYwNzA4MDMxNi43NjE5OTk4LCJzdWIiOiI1ZmNhMTk3YzY2YTdjMzAwM2U0Nzg0YTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lzCcndnLR8EVjssAlOYNBxrSDYZndbi6JnYHFfCmZPE",
            },
          },
        );
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMoviesWithAxios();
  }, []);

  return (
    <div className="p-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 cursor-pointer">
        {movies.map((m) => (
          // TODO: MovieItem component gebruiken
          <div
            className="shadow-lg rounded-xl overflow-clip hover:scale-105"
            key={m.id}>
            <img src={`${BASE_IMAGE_URL}${m.poster_path}`} />
            <p className="text-teal-600 font-bold text-2xl h-20 text-center ">
              {m.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
