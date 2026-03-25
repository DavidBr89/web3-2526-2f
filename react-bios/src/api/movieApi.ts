
import Axios from "axios";

export const movieAxios = Axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    headers: {
            Authorization: import.meta.env.VITE_TMDB_API_KEY,
          },
})
