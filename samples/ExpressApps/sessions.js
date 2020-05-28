var express = require('express');
var app = express();
var session = require('express-session');

app.use(session({secret : "Shh est un secret",
                resave: true,
                saveUninitialized: true}));

app.get('/session/', (req, res) => {
    
    if(req.session.page_views){
        req.session.page_views++;
        res.send("Vous avez visiter cette page " + req.session.page_views + " fois");
    }
    else{
        req.session.page_views = 1;
        res.send("Bienvenu sur cette page pour la première fois");
    }
});



app.listen(3000);