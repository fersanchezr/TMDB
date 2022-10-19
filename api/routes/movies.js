const express = require("express");
const router = express.Router();
// const movies = require("../controllers/requestMovies");
const axios = require("axios");
const { moviesInTheatersUrlConcat , moviesNowPlaying} = require("../controllers/tmdb");


// Es un pedido de todas las peliculas.

router.get("/", (req, res) => {
    axios(moviesNowPlaying)
        .then((response) => {
            if (response.status === 200) {
                res.status(200).send(response.data)
            } else if (response.status === 401) {
                res.status(401).send('petición (request) no ha sido ejecutada porque carece de credenciales válidas de autenticación para el recurso solicitado.')
            } else if (response.status === 404) {
                res.status(404).send('no existe el pedido solicitado')
            }
        })
        .catch((error) => { console.log(error) }) // en caso de error 
});

router.get("/search/:name", (req, res) => {
    const name = req.params.name;
    axios(`https://api.themoviedb.org/3/search/movie?api_key=d0acdf65328bcac8a8f4013f26de07ac&query=${name}`)
        .then((response) => {
            if (response.status === 200) {
                res.status(200).send(response.data)
            } else if (response.status === 401) {
                res.status(401).send('petición (request) no ha sido ejecutada porque carece de credenciales válidas de autenticación para el recurso solicitado.')
            } else if (response.status === 404) {
                res.status(404).send('no existe el pedido solicitado')
            }
        })
        .catch((error) => { console.log(error) }) // en caso de error 
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    axios(`https://api.themoviedb.org/3/movie/${id}?api_key=d0acdf65328bcac8a8f4013f26de07ac&language=en-US`)
        .then((response) => {
            if (response.status === 200) {
                res.status(200).send(response.data)
            } else if (response.status === 401) {
                res.status(401).send('petición (request) no ha sido ejecutada porque carece de credenciales válidas de autenticación para el recurso solicitado.')
            } else if (response.status === 404) {
                res.status(404).send('no existe el pedido solicitado')
            }
        })
        .catch((error) => { console.log(error) }) // en caso de error 
});

router.get("/popular", (req, res) => {
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=d0acdf65328bcac8a8f4013f26de07ac`)
      .then((response) => {
        if (response.status === 200) {
          res.status(200).send(response.data);
        } else if (response.status === 401) {
          res.status(401).send("petición (request) no  válido.");
        } else if (response.status === 404) {
          res.status(404).send("no existe el pedido solicitado");
        }
      })
      .catch((error) => console.log(error)); // en caso de error
  });


/* 
router.get("/", (req, res) => {
  axios(Api_url)
    .then((response) => response.data)
    .then((data) => res.status(200).send(data));
});
 */

module.exports = router;
