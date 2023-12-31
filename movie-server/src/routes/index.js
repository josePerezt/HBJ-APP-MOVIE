const express = require("express");
const mercadopagoRouter = require("./mercadoPago.js/mercadoPagoRouter");
const allMoviesRouter = require("./allMovies/allMovies");
const imagenes = require("./Imagenes/imagen.");
const allTvRouter = require("./allTv/AllTv");
const topMoviesRouter = require("./topMovies/topMovies");
const topTvRouter = require("./topTv/topTv");

const router = express.Router();

router.use("/MP", mercadopagoRouter);
router.use("/allMovies", allMoviesRouter);
router.use("/allTv", allTvRouter);
router.use("/topMovies", topMoviesRouter);
router.use("/topTv", topTvRouter);
router.use("/image", imagenes);
module.exports = router;
