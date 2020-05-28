var express = require('express');
var app = express();

app.get('/response/send', (req, res) => {
    res.send('Envoi d\'une réponse');
});

app.get('/response/json', (req, res) => {
    res.json({"name": "js", "email" : "js@estiam.com", "ISBN" : "FR323FZ"});
});

app.get('/response/redirect', (req, res) => {
    res.redirect('/response/send');
    console.log("Redirection ...");
});

app.get('/response/end', (req, res) => {
    res.end('Envoi de end');
});

app.get('/response/sendStatus', (req, res) => {
    res.sendStatus(404);
    console.log("Erreur 404");
});

app.get('/response/download', (req, res) => {
    res.download('test.txt');
    console.log("Download ...");
})

app.listen(3000);