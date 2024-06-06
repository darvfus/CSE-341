const express = require('express');
const app = express();
const port = 3000; // You can choose any port you prefer
const lesson1Controller = require('./controllers/lesson1');

// Define a simple route
app.get('/', lesson1Controller,emilyRouter);
app.get('/hannah', lesson1Controller,hannahRoute);

// Start the server
app.listen(process.env.port || port);
  console.log(`Web serve is listening at port ` + (process.env.port || port));

