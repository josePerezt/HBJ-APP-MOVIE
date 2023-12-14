const express = require("express");
const allMoviesRouter = express.Router();

const allMovies = require("../../contollers/allMovies");

allMoviesRouter.get("/", async (req, res) => {
  const { number_page } = req.params;
  try {
    const movies = await allMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = allMoviesRouter;
