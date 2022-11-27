const express = require("express");

// import { Router } from "express";

const {
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("../db/queries/movies");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await getAllMovies();
    return res.status(200).send({ message: "data is coming", data: user });
  } catch (err) {
    console.log(err);
  }
});
// Post
router.post("/", async (req, res) => {
  try {
    const user = await addMovie(req.body);
    res.status(201).send({ message: "data is coming", data: user });
    if (user.length) {
      res.body = {
        status: "success",
        data: user,
      };
    } else {
      res.body = {
        status: "failure",
        message: "something went wrong",
      };
    }
  } catch (err) {
    console.log(err);
  }
});
// update
router.put(`/:id`, async (req, res) => {
  try {
    const movie = await updateMovie(req.params.id, req.body);
    res.status(200).send({ message: "data is updating", data: movie });
    if (user.length) {
      res.body = {
        status: "success",
        data: user,
      };
    } else {
      res.status = 404;
      res.body = {
        status: "error",
        message: "That movie does not exist.",
      };
    }
  } catch (err) {
    console.log(err);
  }
});
router.delete(`/:id`, async (req, res) => {
  try {
    const movie = await deleteMovie(req.params.id);
    res.status(200).send({ message: "data is deleted", data: movie });
    if (user.length) {
      res.body = {
        status: "success",
        data: user,
      };
    } else {
      res.status = 404;
      res.body = {
        status: "error",
        message: "That movie does not exist.",
      };
    }
  } catch (err) {
    res.status = 400;
    res.body = {
      status: "error",
      message: err.message || "Sorry, an error has occurred.",
    };
  }
});
module.exports = router;
