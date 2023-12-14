const express = require("express");
const mercadopagoRouter = require("./mercadoPago.js/mercadoPagoRouter");
const allMoviesRouter = require("./allMovies/allMovies");
const imagenes = require("./Imagenes/imagen.");
const allTvRouter = require("./allTv/AllTv");
const router = express.Router();

router.use("/MP", mercadopagoRouter);
router.use("/allMovies", allMoviesRouter);
router.use("/allTv", allTvRouter);
router.use("/image", imagenes);
module.exports = router;
