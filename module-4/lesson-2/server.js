// server.js
const express = require('express');
const { fetchAndProcessAllData } = require('./fetch-and-process-all-data');
const app = express();
const port = 3000;

// Basic route for the home page
app.get('/', async (req, res, next) => {
  const data = await fetchAndProcessAllData().catch(next);
  res.send(data);
});

// Error handling middleware should be the last piece of middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  // send a generic error message to the client
  res.status(500).send('Something broke!');
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
