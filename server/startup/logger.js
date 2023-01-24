const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");

const options = {
  file: {
    level: "info",
    filename: "logfile.log",
    handleExceptions: true,
    handleRejections: true,
  },
  console: {
    level: "info",
    handleExceptions: true,
    handleRejections: true,
  },
  mongodb: {
    level: "info",
    db: "mongodb://127.0.0.1/Vidly",
  },
};

const logger = winston.createLogger({
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
    new winston.transports.MongoDB(options.mongodb),
  ],
});

module.exports = logger;
