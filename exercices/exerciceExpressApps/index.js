var express = require('express');
var bookRoot = require('./root/bookRoot');
var authorRoot = require('./root/authorRoot');
var customerRoot = require('./root/customerRoot');
var app = express();
const PORT = 3000;

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/book', bookRoot);
app.use('/author', authorRoot);
app.use('/customer', authorRoot);

app.listen(PORT);