var express = require('express');
var app = express();

app.use(express.static('public'));

server.listen(8086, function() {
    console.log('Example app listening on port 8086!');
});