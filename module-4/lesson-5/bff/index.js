// Import the express and axios modules
const express = require('express');
const axios = require('axios');

// Create an express application
const app = express();

// Define a port for the server to listen on
const PORT = 4000;

// Define a route handler for the root path
app.get('/', async (req, res) => {
  try {
    // Make requests to both microservices
    const response1 = await axios.get('http://localhost:3000');
    const response2 = await axios.get('http://localhost:3001');

    // Combine responses from both microservices
    const combinedResponse = {
      microservice1: response1.data,
      microservice2: response2.data,
    };

    // Send the combined JSON response
    res.json(combinedResponse);
  } catch (error) {
    // Handle any errors
    res
      .status(500)
      .send('Error occurred while fetching data from microservices');
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`BFF running on http://localhost:${PORT}`);
});
