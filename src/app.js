const express = require("express");
require("express-async-errors");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const authRouter = require("./api/auth/auth.router");
const errorHandler = require("./common/middleware/error-handler.middleware");
const { logger, stream } = require("./common/logger");

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("combined", { stream }));

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Taxi Backend API is running.");
});

app.use(errorHandler);

module.exports = app;
