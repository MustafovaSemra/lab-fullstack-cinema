const express = require("express");
const router = express.Router();
const Movie = require("./model/Movie");

router.get("/movies", (req, res) => {
  Movie.find()
    .then((allMovies) => {
      res.json(allMovies);
    })
    .catch((error) => console.log(error));
});

router.get("/movies/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.json(movie);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
