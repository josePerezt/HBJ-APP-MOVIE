const express = require("express");
const mercadopagoRouter = require("./mercadoPago.js/mercadoPagoRouter");
const allMoviesRouter = require("./allMovies/allMovies");
const router = express.Router();

router.use("/MP", mercadopagoRouter);
router.use("/allMovies", allMoviesRouter);
module.exports = router;
