var path = require("path");

var routes = function(app){
    app.get("/:path", function(req, res){
        switch(req.params.path){
            case "": return res.sendFile(path.join(__dirname, "../public/home.html"));
            case "survey": res.sendFile(path.join(__dirname, "../public/survey.html"));
            default: return res.status(404).sendFile(path.join(__dirname,"../public/404.html"));
        }
    });
}

module.exports = routes;