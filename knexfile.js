const path = require("path");

const BASE_PATH = path.join(__dirname, "src", "server", "db");

module.exports = {
  development: {
    client: "pg",
    connection: "postgres://postgres:8078@localhost:5432/testfirst",
    migrations: {
      directory: path.join(BASE_PATH, "migrations"),
    },
    seeds: {
      directory: path.join(BASE_PATH, "seeds"),
    },
  },
};
