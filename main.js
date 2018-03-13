var express = require('express');
var app = express();
var sqlite = require('sqlite3');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var db = new sqlite.Database("contact.db");

app.post("/subscribe", function(req, res) {
    db.serialize(function() {
        db.run("CREATE TABLE IF NOT EXISTS contact (first text, last text, email text, phone text, place text)");
        db.run("INSERT INTO contact (first, last, email, phone, place) VALUES ('"
            +req.body.first+"', '"+req.body.last+"', '"+req.body.email+"', '"+req.body.phone+"', '"+req.body.place+"')");
        db.all("SELECT * FROM contact", function(err, rows) {
            res.send(rows);
        });
    });
});



app.listen(8086, function() {
    console.log('Example app listening on port 8086!');
});