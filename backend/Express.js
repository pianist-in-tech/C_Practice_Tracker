
const app = require('./app'); // Import the configured Express app
const { PORT } = require('./config'); // Import the port from config.js


// Use the imported PORT value to start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

