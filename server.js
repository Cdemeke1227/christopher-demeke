var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 5000

var app = express();

// Static Files: CSS, Images, Javascript
app.use(express.static(__dirname + '/public'));

// Routes
app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "views.html"));
  });



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
