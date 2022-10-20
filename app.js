const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  var today = new Date();
  var currentDay = today.getDate();
  var day = "";

  if (today.getDate() === 6 || today.getDate() === 0) {
    day = "Weekend";
  } else {
    day = "Weekday";
  }

  res.render('list', {day: day});

});

app.listen(3000, function(){
  console.log("The app is running on Port 3000.");
});
