-- DROP DATABASE IF EXISTS villains_db;
-- CREATE DATABASE villains_db;

-- Create movie_villains table
DROP TABLE IF EXISTS movie_villains;

CREATE TABLE movie_villains(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  movie VARCHAR(50)
);