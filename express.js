//CREATE A WEB SERVER ROUTE USING EXPRESS & NODE JS

const express = require('express');

// TODO: Initiate an express app and store it in the variable app. Don't change the variable name
const app = express(); // Initialize the express app correctly

// TODO: Implement a get method that accepts the request to the root url '/' and responds with the json message { message: 'Hello, world!' }
app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// NOTE: You don't have to start the express app and make it listen on port 3000. The code to start the app is already present in start-server.js
module.exports = app;
