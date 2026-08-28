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

// Update movie villain by Id
const updateMovieVillainById = (id, name, movie) => {
  return client.query(
    // Execute the update query.
    // - Parameters ($1, $2, $3) prevent SQL injection.
    // - RETURNING * sends back the newly updated row immediately.
    'UPDATE movie_villains SET name = $1, movie = $2 WHERE id =$3 RETURNING *;',
    [name, movie, id]
  )
    .then((results) => {
      console.log('Villain updated!');
      // Return only the 1st row of the updated record from the query result.
      return results.rows[0];
    });
};

// Delete movie villain.
const deleteMovieVillainById = (id) => {
  // Run the delete query with the provided Id and return the removed row
  return client.query('DELETE FROM movie_villains WHERE id = $1 RETURNING *;', [id])
    // Wait for the query promise to resolve with the database results object.
    .then((results) => {
      console.log('Villain deleted');
      // Return the first row (the deleted record) from the query result set.
      return results.rows[0];
    });
};

// Create new movie villain.
const createMovieVillain = (name, movie) => {
  /* Run the insert query with parameterized values ($1, $2)
     to prevent SQL injection, returning the new row.
  */
  return client.query(
    'INSERT INTO movie_villains(name, movie) VALUES($1, $2) RETURNING *;',
    [name, movie]
  )
    // Wait for the query promise to resolve with the db results object.
    .then((results) => {
      console.log(('A new villain is added'));
      // Return only the 1st row of the newly created record from the query result.
      return results.rows[0];
    });
};

module.exports = {
  getAllMovieVillains,
  getMovieVillainById,
  updateMovieVillainById,
  deleteMovieVillainById,
  createMovieVillain
};