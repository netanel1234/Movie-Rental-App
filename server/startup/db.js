const logger = require("./logger");
const mongoose = require("mongoose");

module.exports = function () {
  mongoose.set("strictQuery", false);
  mongoose
    .connect("mongodb://127.0.0.1/Vidly", {
      useUnifiedTopology: true,
    })
    .then(() => logger.info("Connected to MongoDB..."));
};
