const express = require('express');
const app = express(); //we instantiate the server

//now we tell the express that we're going to be using EJS
app.set("view engine", "ejs");// `view engine` is where we tell express what engine we're going to use to render the html, that is EJS

//after we're going to create the routes and we set what is that they will show 
app.get("/", function (req, res) {
  res.render("index"); // res : the response to the user, and we will render the page.
})

app.get("/about", function (req, res) {
  res.render("about");
})

//in the end we're going to get our serve running in a port
app.listen(8080)
console.log('Running...')