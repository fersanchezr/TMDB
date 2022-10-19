
// Todas las peliculas.
const Base_url = "https://api.themoviedb.org/3";
const Api_key = "api_key=d0acdf65328bcac8a8f4013f26de07ac";

const moviesInTheatersUrl = "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"
const moviesInTheatersUrlConcat = Base_url + moviesInTheatersUrl + "&" + Api_key;

const moviesNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=d0acdf65328bcac8a8f4013f26de07ac`

// probando acceder a una pelicula por ID
const movieById = '/343611'
const movieByIdConcat = Base_url + movieById + "&" + Api_key;

// dsps de la ruta hay que poner &

module.exports = {moviesInTheatersUrlConcat, movieByIdConcat, moviesNowPlaying};