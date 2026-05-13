
import Axios from "axios";

export const movieAxios = Axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    headers: {
            Authorization: import.meta.env.VITE_TMDB_API_KEY,
          },
})

export const expressAxios = Axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
})
