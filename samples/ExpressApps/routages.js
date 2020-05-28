var express = require('express');
var app = express();

app.get('/', (req, res) =>{
    res.send('Première application express');
});

app.get('/about', (req, res) => {
    res.send('A propos ...');
});

app.post('/login', (req, res) => {
    res.send('Connexion ...');
});

app.put('/majuser', (req, res) => {
    res.send('Mise à jour du profile utilisateur ...');
});

app.delete('/deluser', (req, res) => {
    res.send('Supprimer l\'utilisateur ...');
});

// Expression régulière 
// abcd ou acd
app.get('/ab?cd', (req, res) => {
    res.send('ab?cd');
});

// abcd ou abbbbcd
app.get('/ab+cd', (req, res) =>{
    res.send('ab+cd');
});

// ab123cd
app.get('/ab*cd', (req, res) => {
    res.send('ab*cd');
});

// abe ou abcde
app.get('/ab(cd)?e', (req, res) => {
    res.send('ab(cd)?e');
});

// abctoto = vrai mais abctoto12 = faux
app.get(/.*toto$/, (req, res) => {
    res.send('/.*toto$/');
});

// contenir la lette y
app.get(/y/, (req, res) => {
    res.send('/y/');
});


app.listen(3000);