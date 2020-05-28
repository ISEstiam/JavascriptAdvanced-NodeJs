var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var moment = require('moment');

app.use(cookieParser());

set = function(req, res){
    res.cookie('login_date', moment().format("DD MM YYYY hh mm ss"), {maxAge : 60 * 1000});
    res.redirect('/cookie/');
}

del = function(req, res){
    res.clearCookie('login_date');
    res.redirect('/cookie/');
}

app.get('/cookie/', (req, res) => {
    res.send("Accueil des cookies");
});

app.get('/cookie/set', set);
app.get('/cookie/del', del);

app.listen(3000);