// Express router set up
const express = require('express');
const router = express.Router();

// Import database query function to fetch all movie villains from the db.
const { getAllMovieVillains, getMovieVillainById } = require('../db/queries/movie-villains');

// INDEX - Browse all movie villains.
// Handles GET requests to the root of the movie-villains route (/movie-villains)
router.get('/', (req, res) => {
  // Fetch movie villains data asyncly.
  getAllMovieVillains().then((movieVillains) => {
    // Package the retrieved data into an object for the template.
    const templateVar = { movieVillains };

    // Render the index view template located at views/movie-villains/index.ejs
    res.render('movie-villains/index', templateVar);
  });
});

// SHOW - Display specific movie villain.
router.get('/:id', (req, res) => {
  const id = req.params.id;
  getMovieVillainById(id).then((movieVillain) => {
    const templateVar = { movieVillain };
    res.render('movie-villains/show', templateVar);
  });
});

module.exports = router;
