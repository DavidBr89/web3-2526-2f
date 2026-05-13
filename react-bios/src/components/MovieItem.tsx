import React from "react";
import { useNavigate, Link } from "react-router";

import { MdStar, MdStarOutline } from "react-icons/md";
import { useFavorites } from "../hooks/useFavorites";

// import { type Movie } from "../types/index";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

interface MovieItemProps {
  movie: Movie;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  // Hook om via code te navigeren en dus niet via elementen
  const navigate = useNavigate();

  const { isInFavorites, toggleFavorite } = useFavorites();

  console.log(movie.overview);

  return (
    <div
      onClick={() => {
        navigate(`movies/${movie.id}`);
      }}
      // to={`movies/${movie.id}`}
      // onClick={() => {
      //   navigate(`movies/${movie.id}`);
      // }}
      // <div
      //   onClick={() => {
      //     navigate(`movies/${movie.id}`, { state: { movieId: movie.id } });
      //   }}
      className="relative shadow-lg rounded-xl overflow-clip hover:scale-105">
      <img src={`${BASE_IMAGE_URL}${movie.poster_path}`} />
      <p className="text-teal-600 font-bold text-2xl h-20 text-center ">
        {movie.title}
      </p>
      <p className="text-teal-600">{movie.overview}</p>
      {/* </div> */}
      <button
        onClick={(event) => {
          toggleFavorite(movie);
          event.stopPropagation();
        }}
        className="text-3xl text-white absolute top-2 right-2 bg-teal-600 hover:bg-teal-400 p-4 rounded-full cursor-pointer">
        {isInFavorites(movie.id) ? <MdStar /> : <MdStarOutline />}
      </button>
    </div>
  );
};

export default MovieItem;
