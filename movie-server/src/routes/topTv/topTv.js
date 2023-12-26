const express = require("express");
const topTv = require("../../contollers/topTv");
const topTvRouter = express.Router();

topTvRouter.get("/", async (req, res) => {
  try {
    const topTvData = await topTv();
    res.status(200).json(topTvData);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = topTvRouter;
