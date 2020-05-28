var express = require('express');
var app = express();
var route_book = require('./book');

app.use('/book', route_book);

app.listen(3000);