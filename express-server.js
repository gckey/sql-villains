// Third party modules.
const express = require('express');
const morgan = require('morgan');

// Initialize Express app and set port.
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs'); // Configure EJS as the template engine.

// Middleware - HTTP request logger
app.use(morgan('dev'));

// Listener
app.listen(PORT, () => console.log(
  'Server running on port', PORT
));

// Routes
const movieVillainsRouter = require('./routes/movie-villains');
app.use('/movie-villains', movieVillainsRouter);

