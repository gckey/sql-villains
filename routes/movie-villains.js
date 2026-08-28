// Express router set up
const express = require('express');
const router = express.Router();

// Import database query function to fetch all movie villains from the db.
const { getAllMovieVillains,
  getMovieVillainById,
  updateMovieVillainById,
  deleteMovieVillainById
} = require('../db/queries/movie-villains');

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

// Edit - Display form to edit a movie villain.
router.get('/:id/edit', (req, res) => {
  // Extract the villain id from the URL parameters.
  const id = req.params.id;
  // Retrieve villain details to populate the edit form
  getMovieVillainById(id).then((movieVillain) => {
    // Package the villain data into an object for the view template.
    const templateVar = { movieVillain };

    // Render the edit view template containing the form.
    res.render('movie-villains/edit', templateVar);
  });
});

// UPDATE - Update a movie villain.
router.put('/:id', (req, res) => {
  // Extract the villain id from the URL parameters
  const id = req.params.id;
  // Destructure name and movie fields from the submitted form body.
  const { name, movie } = req.body;
  // Call database function to update the villain and return the updated record.
  updateMovieVillainById(id, name, movie).then((movieVillain) => {
    // Redirect the user back to the updated villain's detail page.
    res.redirect(`/movie-villains/${movieVillain.id}`);
  });
});

// DELETE - Delete a movie villain.
router.delete('/:id', (req, res) => {
  // Get the Id from the route parameters.
  const id = req.params.id;
  // Call the database function to delete the villain by their Id.
  deleteMovieVillainById(id).then(() => {
    // Send the user back to the main list page after deletion.
    res.redirect('/movie-villains');
  });
});

module.exports = router;
