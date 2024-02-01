// Import the express module
const express = require('express');

// Create an express application
const app = express();

// Define a port for the server to listen on
const PORT = 3000;

// Define a route handler for the root path
app.get('/', (req, res) => {
  // Create a simple JSON object to send as a response
  const responseObject = {
    service: 'Microservice 1',
    message: 'Hello from Microservice 1!',
    data: {
      item1: 'Norwegian Forest Cat',
      item2: 'Fjords of Norway',
    },
  };

  // Send the JSON response
  res.json(responseObject);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Microservice 1 running on http://localhost:${PORT}`);
});
