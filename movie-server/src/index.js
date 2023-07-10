require("dotenv").config();
const express = require("express");
const server = express();
const PORT = process.env.PORT || 3001;

server.use(express.json());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "localhost:3001");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.listen(PORT, () => {
  console.log(`Server on  PORT ${PORT} `);
});
