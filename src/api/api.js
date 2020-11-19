import axios from "axios";

let instance = axios.create ( {
    baseURL: "https://api.themoviedb.org/3/"
} )

export const API = {
    getPopular (currentPage) {
        return instance.get (`movie/popular?api_key=59b515f14ca7817fa52949d84c435157&page=${currentPage}`);
    },
    getToprated (currentPage) {
        return instance.get (`movie/top_rated?api_key=59b515f14ca7817fa52949d84c435157&page=${currentPage}`)
    },
    getMovieBlock (movieId) {
        return instance.get (`movie/${movieId}?api_key=59b515f14ca7817fa52949d84c435157`);
    },
    getNowPlaying () {
        return instance.get (`movie/now_playing?api_key=59b515f14ca7817fa52949d84c435157`);
    },
    getImages (movieId) {
        return instance.get (`movie/${movieId}/images?api_key=59b515f14ca7817fa52949d84c435157`)
    },
    getVideos (movieId) {
        return instance.get (`movie/${movieId}/videos?api_key=59b515f14ca7817fa52949d84c435157`)
    },
    getSearch (query) {
        return instance.get (`search/movie?api_key=59b515f14ca7817fa52949d84c435157&query=${query}`);
    },
    getLatest () {
        return instance.get (`/movie/upcoming?api_key=59b515f14ca7817fa52949d84c435157`);
    },
}