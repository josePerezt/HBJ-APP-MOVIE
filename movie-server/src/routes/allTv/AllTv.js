const express = require("express");
const allTv = require("../../contollers/allTv");
const allTvRouter = express.Router();

allTvRouter.get("/", async (req, res) => {
  try {
    const tv = await allTv();
    res.status(200).json(tv);
  } catch (error) {
    console.log(error);
  }
});

module.exports = allTvRouter;
