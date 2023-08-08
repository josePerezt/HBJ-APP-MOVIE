require("dotenv").config();
const express = require("express");
const allMoviesRouter = express.Router();
const { API_KEY } = process.env;
const axios = require("axios");

allMoviesRouter.get("/", async (req, res) => {
  const { number_page } = req.params;
  const API_URL = "https://api.themoviedb.org/3/discover/movie";
  try {
    const { data } = await axios.get(API_URL, {
      params: {
        api_key: API_KEY,
        page: number_page ? number_page : 1,
      },
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = allMoviesRouter;
