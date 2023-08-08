require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mercadopago = require("mercadopago");
const { MERCADO_PAGO } = process.env;
const router = require("./routes/index");
const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
mercadopago.configure({
  access_token: MERCADO_PAGO,
});
server.use("/", router);

server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
