const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();

let newListItems = ["Task 1", "Task 2", "Task 3"];
let workListItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  let day = date();

  res.render('list', {
    listTitle: day,
    newListItems: newListItems
  });

});

app.post('/', function(req, res) {
  let newListItem = req.body.listItem;

  if (req.body.list === "Work") {
    workListItems.push(newListItem);
    res.redirect("/work");
  } else {
    newListItems.push(newListItem);
    res.redirect("/");
  }
});

app.get("/work", function(req, res) {
  res.render('list', {
    listTitle: "Work List", 
    newListItems: workListItems
  });
});

app.post("/work", function(req, res) {
  let newWorkListItem = req.body.listItem;
  workListItems.push(newWorkListItem);
  res.redirect("/work");
});

app.get("/about", function(req, res) {
  res.render('about');
});

app.listen(3000, function(){
  console.log("The app is running on Port 3000.");
});