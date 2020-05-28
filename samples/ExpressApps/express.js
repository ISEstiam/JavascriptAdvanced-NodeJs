var express = require('express');
var app = express();

app.get('/', (req, res) =>{
    res.send('Première application express');
});


app.listen(3000);