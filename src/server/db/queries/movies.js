const knex = require("../connection");

function getAllMovies() {
  return knex("movies").select("*");
}

function addMovie(movies) {
  return knex("movies").insert(movies).returning("*");
}
function updateMovie(id, movies) {
  return knex("movies")
    .update(movies)
    .where({ id: parseInt(id) })
    .returning("*");
}

function deleteMovie(id) {
  return knex("movies")
    .del()
    .where({ id: parseInt(id) })
    .returning("*");
}
module.exports = {
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
};
