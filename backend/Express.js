const express = require('express');
const cors = require('cors');
const app = require('./app'); // Import the configured Express app
const { PORT } = require('./config'); // Import the port from config.js

// CORS configuration - allow requests from render. 
const corsOptions = {
  origin: 'https://tracker-front.onrender.com',
  optionsSuccessStatus: 200 // to avoid compatibility issues with older browsers
};
app.use(cors(corsOptions));

// Use the imported PORT value to start the server and make it listen for incoming requests on the specified port. 
app.listen(PORT, () => { //PORT value is coming from config.js for easier configuration for different environments
  console.log(`Server is running on port ${PORT}`);
});
