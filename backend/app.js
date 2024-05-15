"use strict";

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const aiRouter = require("./routes/ai"); // Import AI-related routes

const { NotFoundError } = require("./expressError");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
//app.use(authenticateJWT);

// Use the AI routes
app.use("/ai-endpoint", aiRouter); // Add the AI-related routes with a base path

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
