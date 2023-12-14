require("dotenv").config();
const express = require("express");
const imagenes = express.Router();
const { API_KEY } = process.env;
const axios = require("axios");

imagenes.get("/", async (req, res) => {
  // const { number_page } = req.params;
  const API_URL =
    "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg";
  try {
    const { data } = await axios.get(API_URL, {
      params: {
        api_key: API_KEY,
        // page: number_page ? number_page : 1,
      },
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = imagenes;
