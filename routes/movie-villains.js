// Express router set up
const express = require('express');
const router = express.Router();

// Import database query function to fetch all movie villains from the db.
const { getAllMovieVillains } = require('../db/queries/movie-villains');

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

module.exports = router;
