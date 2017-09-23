// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Web dev friends (DATA)
// =============================================================
var webDevs = [{
  routeName: "urkel",
  name: "Steve Urkel",
  q: 1,
  q: 1,
  q: 1,
  q: 1,
  q: 1,
  q: 1,
  q: 1,
  q: 1,
  q: 1,
  q: 1
  
}, {
  routeName: "newman",
  name: "Alfred E. Newman",
  q: 2,
  q: 2,
  q: 2,
  q: 2,
  q: 2,
  q: 2,
  q: 2,
  q: 2,
  q: 2,
  q: 2
}, {
  routeName: "grimley",
  name: "Ed Grimley",
  routeName: "Newman",
  name: "Alfred E. Newman",
  q: 3,
  q: 3,
  q: 3,
  q: 3,
  q: 3,
  q: 3,
  q: 3,
  q: 3,
  q: 3,
  q: 3
}, {
  routeName: "herman",
  name: "Pee-Wee Herman",
  q: 4,
  q: 4,
  q: 4,
  q: 4,
  q: 4,
  q: 4,
  q: 4,
  q: 4,
  q: 4,
  q: 4
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Get all characters
app.get("/all", function(req, res) {
  res.json(webDevs);
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:webDevs?", function(req, res) {
  var chosen = req.params.webDevs;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < webDevs.length; i++) {
      if (chosen === webDevs[i].routeName) {
        return res.json(webDevs[i]);
      }
    }
    return res.json(false);
  }
  return res.json(webDevs);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newDev = req.body;
  newDev.routeName = newDev.name.replace(/\s+/g, "").toLowerCase();
  console.log(newDev);
  webDevs.push(newDev);
  res.json(newDev);

  // Performs compatibility calculations:
  function calculate() {
    // Extracts q1-q10 from newDev and parseInt() to turn it to array of integers:
    var newDevq1 = parseInt(newDev.q1);
    var newDevq2 = parseInt(newDev.q2);
    var newDevq3 = parseInt(newDev.q3);
    var newDevq4 = parseInt(newDev.q4);
    var newDevq5 = parseInt(newDev.q5);
    var newDevq6 = parseInt(newDev.q6);
    var newDevq7 = parseInt(newDev.q7);
    var newDevq8 = parseInt(newDev.q8);
    var newDevq9 = parseInt(newDev.q9);
    var newDevq10 = parseInt(newDev.q10);
    
    var newDevArray = [];
    newDevArray.push(newDevq1, newDevq2, newDevq3,newDevq4,newDevq5,newDevq6,newDevq7,newDevq8,newDevq9,newDevq10)
    for (i = 0; i < newDevArray.length; i++) {
      newDevArray[i]%
    }
    console.log(newDevArray);
    
  // Extracts q1-q10 from each item in webDevs and turns their string numbers into integers:

  // Finds the difference between each value in the newDev array from the one in webDev array:
  
  // Adds up the differences:

  // Takes the webDev object that is the least different and sends it to the view.html page:
  }
  calculate(); 
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});