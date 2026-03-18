import React from "react";
import { useNavigate, Link } from "react-router";

// import { type Movie } from "../types/index";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

interface MovieItemProps {
  movie: Movie;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  // Hook om via code te navigeren en dus niet via elementen
  // const navigate = useNavigate();

  return (
    <Link
      to={`movies/${movie.id}`}
      // onClick={() => {
      //   navigate(`movies/${movie.id}`);
      // }}
      // <div
      //   onClick={() => {
      //     navigate(`movies/${movie.id}`, { state: { movieId: movie.id } });
      //   }}
      className="shadow-lg rounded-xl overflow-clip hover:scale-105">
      <img src={`${BASE_IMAGE_URL}${movie.poster_path}`} />
      <p className="text-teal-600 font-bold text-2xl h-20 text-center ">
        {movie.title}
      </p>
      {/* </div> */}
    </Link>
  );
};

export default MovieItem;
