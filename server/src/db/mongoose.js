const mongoose = require("mongoose");
const config = require("../../config.js");

mongoose
  .connect(config.connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("MongoDB is connection");
  })
  .catch(err => {
    if (err) {
      console.error("Database error: ", err.message);
    }
  });
