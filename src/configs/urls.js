const baseURL = process.env.REACT_APP_API;

const urls = {
    getMovies: `${baseURL}/discover/movie`,
    getGenres: `${baseURL}/genre/movie/list`,
    search:`${baseURL}/search/movie`
};

export {
    baseURL,
    urls
}