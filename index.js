const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");

const config = require("./config");
const routes = require("./src/routes");

require("./src/db/mongoose");

const app = express();

app.use(express.json());
app.disable("x-powered-by");
app.use(logger("dev"));
app.use(cors("*"));

app.use(express.static(path.join(__dirname, "view", "build")));

app.use("/api", routes);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "build", "index.html"));
});

app.listen(config.port, () => {
  console.log(`Server is starting in ${config.port}`);
});
