const express = require('express');
const bodyParser = require('body-parser');
const { application } = require('express');

const app = express();

let newListItems = ["Task 1", "Task 2", "Task 3"];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  let today = new Date();
  
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render('list', {
    day: day,
    newListItems: newListItems
  });

});

app.post('/', function(req, res) {
  let newListItem = req.body.listItem;
  newListItems.push(newListItem);
  res.redirect("/");
});

app.listen(3000, function(){
  console.log("The app is running on Port 3000.");
});