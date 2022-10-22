import {axiosService} from "./axios.service";
import {urls} from "../configs";

const movieService = {
    getAll: (page = 1) => axiosService.get(urls.getMovies, {params: {page}}),
    searchMovie: (movie) => axiosService.get(`${urls.search}?query=${movie}`),
    getGenres: () => axiosService.get(urls.genres),
    searchGenre:(genre)=>axiosService.get(`${urls.getMovies}?&with_genres=${genre}`)
}

export {
    movieService
}