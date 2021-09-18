//var http = require('http');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sql = require("./db.js")
// parse requests of contenttype: application/json
app.use(bodyParser.json());
// parse requests of contenttype: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true
}));
// simple route
app.get("/", (req, res) => {
res.json({ message: "Welcome to web course example application." });
});
//new route
app.get("/visitorsHagar", function(req, res){
    sql.query("SELECT * FROM visitorsHagar", (err, mySQLresponse) => {
    if (err) {
    console.log("error: ", err);
    res.status(400).send({message: "error in getting all visitors: " + err});
    return;
    }
    console.log("got all visitors...");
    res.send(mySQLresponse);
    return;
    });
    });

// set port, listen for requests
app.listen(3000, () => {
console.log("Server is running on port 3000."
);
});
// http.createServer(function (req, res) {
// res.writeHead(200, {'Content-Type': 'text/html'});
// res.end('Hello World!');
// }).listen(8080);