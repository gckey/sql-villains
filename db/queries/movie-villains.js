const client = require('../connection');

const getAllMovieVillains = () => {
  // Execute a SQL query to fetch all records from the movie_villains table.
  return client.query('SELECT * FROM movie_villains;')
    .then((results) => {
      // Extract the row array from the db result object.
      const rows = results.rows;
      console.log(rows);
      return rows;
    });
};

module.exports = {
  getAllMovieVillains
};