var express = require('express');
var app = express();
var sqlite = require('sqlite3');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/subscribe", function(req, res) {
    console.log(req.body);
    res.end();
});

app.listen(8086, function() {
    console.log('Example app listening on port 8086!');
});