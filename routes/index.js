const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1'); // Ensure the correct path

// Define a simple route
routes.get('/', lesson1Controller.sarahRoute);
routes.get('/emily', lesson1Controller.emilyRoute);
routes.get('/hannah', lesson1Controller.hannahRoute);

module.exports = routes;