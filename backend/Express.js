const express = require('express');
const cors = require('cors');
const app = require('./app'); // Import the configured Express app
const { PORT } = require('./config'); // Import the port from config.js

// CORS configuration
const corsOptions = {
  origin: 'https://tracker-front.onrender.com',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Use the imported PORT value to start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
