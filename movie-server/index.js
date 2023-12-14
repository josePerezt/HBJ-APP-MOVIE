require("dotenv").config();
const server = require("./src/App");
const { PORT } = process.env || 3001;

server.listen(PORT, () => {
  console.log(`Server on  PORT ${PORT}  `);
});
