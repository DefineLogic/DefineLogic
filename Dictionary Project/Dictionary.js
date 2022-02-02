var express = require('express');
var queryDb = require('./word');
const path = require('path');

const bodyParser = require('body-parser');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));


var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@nonym0uS",
    database: "entries"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/dictionary', function(req, res, next) {
    res.sendFile(__dirname + "/public/dict.html");
});

app.get('/search', function(req, res, next) {
    var key = req.query.key;
    queryDb(key, con, res);
});

var server = app.listen(3000, function() {
    console.log('Node server is running..');
});