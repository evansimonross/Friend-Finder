var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8888;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var apiRoutes = require("./routes/apiRoutes");
apiRoutes(app);

var htmlRoutes = require("./routes/htmlRoutes");
htmlRoutes(app);

app.listen(PORT, function(){
    console.log("Listening on PORT " + PORT);
});