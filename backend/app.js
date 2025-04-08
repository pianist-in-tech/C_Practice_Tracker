"use strict";
 
const express = require("express"); //express framework for backend set up
const cors = require("cors"); //middleware to allow the frontend to communicate with the backend from different domains
const morgan = require("morgan"); //logging library that logs incoming requests in a concise format for debugging
const aiRouter = require("./routes/ai"); // Import AI-related routes to handel API requests related to AI

const { NotFoundError } = require("./expressError");

const app = express();

app.use(cors());
app.use(express.json()); //middleware that ensures that incoming requests with JSON payloads are parsed and available in req.body
app.use(morgan("tiny")); //logs HTTP requests to the console for easy debugging

// Use aiRouter for  handling requests to paths starting with /ai-endpoint
app.use("/ai-endpoint", aiRouter); // Add the AI-related routes with a base path

// middleware to catch any requests that don't match any defined routes, triggering NotFoundError. Will send a 404 response to the client.
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

// Generic error handler for any undandled errors. Checks if it is a non-test environment, logs the error stack, and returns a JSON response with an appropriate error status (500)
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
