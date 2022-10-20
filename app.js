const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  var today = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = days[today.getDay()];

  res.render('list', {day: day});

});

app.listen(3000, function(){
  console.log("The app is running on Port 3000.");
});
