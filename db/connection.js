// PG database client/connection setup
const pg = require('pg');
const dotenv = require('dotenv');

// Load environment variables from a .env file into process.env
dotenv.config();

const Client = pg.Client;

/* Configuration object for establishing a PG database connection
   using environment variables for secure credential management.
*/
const config = {
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  database: process.env.DB_NAME,
  user:     process.env.DB_USER,
  password: process.env.DB_PASS
};

// Initialize a new PG client instance with the defined configuration.
const client = new Client(config);

// Open a connection to the PG database.
client.connect();

module.exports = client;
