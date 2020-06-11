var express = require('express');
var app = express();
const PORT = 3000;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {title:"Utilisation du template Pug", message : "Génération de la page html", BookName: "JS"});
});



app.listen(PORT);