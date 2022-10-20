const express = require('express');
const bodyParser = require('body-parser');
const { application } = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  var today = new Date();
  
  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render('list', {
    day: day
  });

});

app.post('/', function(req, res) {

  console.log(req.body.listItem);
  
});

app.listen(3000, function(){
  console.log("The app is running on Port 3000.");
});
