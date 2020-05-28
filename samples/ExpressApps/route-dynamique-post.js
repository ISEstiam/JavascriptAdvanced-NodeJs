var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.post('/book', (req, res) => {
    let book = {'name' : req.body.name,
                'email' : req.body.email,
                'ISBN' : req.body.ISBN};
    
    res.json(book);
    console.log(book);
});


app.listen(3000);