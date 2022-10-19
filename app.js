const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(3000, function(){
  console.log("The app is running on Port 3000.");
});
