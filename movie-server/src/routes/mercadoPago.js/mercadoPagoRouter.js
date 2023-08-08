const express = require("express");
const mercadopago = require("mercadopago");
const mercadopagoRouter = express.Router();

mercadopagoRouter.post("/create_preference", (req, res) => {
  const shoppinCart = req.body;
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: "http://localhost:5173",
      failure: "http://localhost:5173",
      pending: "",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      res.status(500).json({ Error: error.message });
    });
});

module.exports = mercadopagoRouter;
