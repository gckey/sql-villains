# Movie Villains Full-Stack Application

A minimalist CRUD web application for managing a collection of movie villains. Built with Node.js, Express, PostgreSQL, and EJS templates styled with a calm, accessible design system. This project bridges the gap between front-end views, server-side routing, and database storage. It demonstrates how to securely connect a Node.js application to PostgreSQL using `node-postgres`, manage environment variables securely, and structure code using modular query files and Express routing.

---

## Dependencies

Make sure you have [Node.js](https://nodejs.org/) and [PostgreSQL](https://www.postgresql.org/) installed on your machine.

The project relies on the following npm packages:
* **`express`** - Fast, unopinionated web framework for Node.js
* **`pg`** - PostgreSQL client for Node.js (`node-postgres`)
* **`dotenv`** - Loads environment variables from a `.env` file
* **`morgan`** - HTTP request logger middleware for Node.js
* **`ejs`** - Embedded JavaScript templating for views

---

## Setup Instructions

* Clone and Install Dependencies
* Configure Environment Variables
* Set Up the Database
* Start your Express server: ```node express-server.js```

Open your browser and navigate to:

All Villains API: http://localhost:8080/movie-villains/

Single Villain API: 
http://localhost:8080/movie-villains/1

----
## Backend routes express

| Method | Path | Description |
|--------|------|-------------|
| GET | `/movie-villains` | Display all villains (index) |
| GET | `/movie-villains/new` | Show create form |
| POST | `/movie-villains` | Create new villain |
| GET | `/movie-villains/:id` | Show single villain |
| GET | `/movie-villains/:id/edit` | Show edit form |
| PUT | `/movie-villains/:id` | Update villain |
| DELETE | `/movie-villains/:id` | Delete villain |