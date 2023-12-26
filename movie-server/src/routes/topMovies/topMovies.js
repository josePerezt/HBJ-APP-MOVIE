const express = require("express");
const topMovies = require("../../contollers/topMovies");
const topMoviesRouter = express.Router();

topMoviesRouter.get("/", async (req, res) => {
  try {
    const top = await topMovies();
    res.status(200).json(top);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = topMoviesRouter;
