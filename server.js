const express = require('express');
const app = express(); //we instantiate the server

//now we tell the express that we're going to be using EJS
app.set("view engine", "ejs");// `view engine` is where we tell express what engine we're going to use to render the html, that is EJS

//after we're going to create the routes and we set what is that they will show 
app.get("/", function (req, res) {
  const items = [
    {
      title: "D",
      message: 'Build  applications/services in an easy way'
    },
    {
      title: "E",
      message: 'EJS use JavaScript to render HTML'
    },
    {
      title: "M",
      message: 'Easy to use'
    },
    {
      title: "A",
      message: 'Greate starter point'
    },
    {
      title: "I",
      message: 'npm install ejs'
    },
    {
      title: "S",
      message: 'easy syntax'
    },
  ];

  const subtitle = "A modeling language to develpo HTML pages using JS"
  
  res.render("pages/index", { 
    qualities: items,
    subtitle
   }); // res : the response to the user, and we will render the page.
})

app.get("/about", function (req, res) {
  res.render("pages/about");
})

//in the end we're going to get our serve running in a port
app.listen(8080)
console.log('Running...')