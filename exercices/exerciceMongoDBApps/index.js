var express = require('express');
var bookRoot = require('./root/bookRoot');
var authorRoot = require('./root/authorRoot');
var customerRoot = require('./root/customerRoot');
var app = express();
const PORT = 3000;
var mongoose = require('mongoose');
var ulrDB = "mongodb://localhost:27017/booksdb";
mongoose.connect(ulrDB, {useNewUrlParser:true, useUnifiedTopology:true});

var db = mongoose.connection;
db.on('error', console.error.bind(console,"Erreur de connexion à la base de donnée"));
db.once('open', ()=>{
    console.log("Connexion à la base de donnée OK")
});

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/book', bookRoot);
app.use('/author', authorRoot);
app.use('/customer', authorRoot);

app.listen(PORT);