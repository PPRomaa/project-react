const baseURL = process.env.REACT_APP_API;

const urls = {
    getMovies: `${baseURL}/discover/movie`,
    getGenres: `${baseURL}/genre/movie/list`,
    search: `${baseURL}/search/movie`,
    genres: `${baseURL}/genre/movie/list`
};

export {
    baseURL,
    urls
}