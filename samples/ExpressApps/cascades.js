var express = require('express');
var app = express();

app.get('/exemple/b', (req, res, next) => {
    console.log('La répnse sera envoyé par la fonction suivante ...');
    next();
}, (req, res) => {
    res.send('Réponse à partire de B');
});

var cb0 = function(req, res, next) {
    console.log('CB0');
    next();
}

var cb1 = function(req, res, next) {
    console.log('CB1');
    next();
}

var cb2 = function(req, res) {
    res.send('Réponse à partir de C');
}

app.get('/exemple/c', [cb0, cb1], 
(req, res, next) => {
    console.log('CB2');
    next();
}, cb2);

app.listen(3000);