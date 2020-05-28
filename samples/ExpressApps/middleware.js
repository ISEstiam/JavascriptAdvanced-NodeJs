var express = require('express');
var moment = require('moment');
var app = express();

app.use((req, res, next) => {
    req.requestTime = moment().format('DD/MM/YYYY hh:mm:ss');
    console.log(req.requestTime);
    next();
});

app.use((req, res, next) => {
    console.log("middleware suivant");
    next();
});

app.get('/', (req, res) => {
    var reponse = 'Bonjour à tous ';
    reponse += 'executé à : ' + req.requestTime + '';
    res.send(reponse);
});


app.listen(3000);