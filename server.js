var express = require('express');
var app = express();
var path = require('path');

// __dirname will use the current path from where you run this file 

//app.use('/templates/', express.static(__dirname + '/templates'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/templates')));

app.listen(3000);
console.log('Listening on port 3000');