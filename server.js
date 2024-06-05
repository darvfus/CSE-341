// server.js

const express = require('express');
const app = express();
const port = 3000; // You can choose any port you prefer

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

