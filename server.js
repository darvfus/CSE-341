const express = require('express');
const app = express();
const port = 3000; // You can choose any port you prefer

app.use('/',require('./routes'));

// Start the server
app.listen(process.env.port || port);
  console.log(`Web serve is listening at port ` + (process.env.port || port));

