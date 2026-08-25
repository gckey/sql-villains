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

const getMovieVillainById = (id) => {
  return client.query('SELECT * FROM movie_villains WHERE id = $1;', [id]) // also sanitizes the input
    .then((result) => {
        const rows = result.rows;
        const record = rows[0];
        console.log(record);
        return record;
    });
};

module.exports = {
  getAllMovieVillains,
  getMovieVillainById
};