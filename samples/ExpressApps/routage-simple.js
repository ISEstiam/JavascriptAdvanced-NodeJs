var express = require('express');
var app = express();

app.get('/book', (req, res) => {
    res.send('Lire un livre');
});

app.post('/book', (req, res) => {
    res.send('Ecrire un livre');
});

app.put('/book', (req, res) => {
    res.send('Modifier un livre');
});

app.delete('/book', (req, res) => {
    res.send('Supprimer un livre');
});

app.route('/user')
    .get((req, res) => {
        res.send('Lire un utilisateur');
        console.log('Lire un utilisateur');
    })
    .post((req, res) => {
        res.send('Ecrire un utilisateur');
        console.log('Ecrire un utilisateur');
    })
    .put((req, res) => {
        res.send('Modifier un utilisateur');
        console.log('Modifier un utilisateur');
    })
    .delete((req, res) => {
        res.send('Supprimer un utilisateur');
        console.log('Supprimer un utilisateur');
    })

app.listen(3000);