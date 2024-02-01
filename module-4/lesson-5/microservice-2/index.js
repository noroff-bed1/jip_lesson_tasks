// Import the express module
const express = require('express');

// Create an express application
const app = express();

// Define a port for the server to listen on
const PORT = 3001; // Different port from the first microservice

// Define a route handler for the root path
app.get('/', (req, res) => {
  // Create a different simple JSON object to send as a response
  const responseObject = {
    service: 'Microservice 2',
    message: 'Velkommen fra Microservice 2!',
    data: {
      item1: 'Oslo Opera House',
      item2: 'Midnight Sun in Norway',
    },
  };

  // Send the JSON response
  res.json(responseObject);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Microservice 2 running on http://localhost:${PORT}`);
});
