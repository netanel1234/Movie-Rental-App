const logger = require("./startup/logger");
const express = require("express");
const app = express();

require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logger.info(`Listening on port ${port}....`);
});
