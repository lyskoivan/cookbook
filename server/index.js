const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const config = require("./config");
const routes = require("./src/routes");

require("./src/db/mongoose");

const app = express();

app.use(express.json());
app.disable("x-powered-by");
app.use(logger("dev"));
app.use(cors("*"));

app.use("/api", routes);

app.listen(config.port, () => {
  console.log(`Server is starting in ${config.port}`);
});
