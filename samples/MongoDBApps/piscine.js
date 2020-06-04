var express = require('express');
var app = express();
const PORT = 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ulrDB = "mongodb://localhost:27017/piscinedb";
mongoose.connect(ulrDB, {useNewUrlParser:true, useUnifiedTopology:true});

var db = mongoose.connection;
db.on('error', console.error.bind(console,"Erreur de connexion à la base de donnée"));
db.once('open', ()=>{
    console.log("Connexion à la base de donnée OK")
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var piscineSchema = mongoose.Schema({
    nom : String,
    adresse : String,
    tel : String,
    description : String
});

var Piscine = mongoose.model('Piscine', piscineSchema);

app.post("/piscine", (req, res) => {
    var piscine = new Piscine();
    piscine.nom = req.body.nom;
    piscine.adresse = req.body.adresse;
    piscine.tel = req.body.tel;
    piscine.description = req.body.description;
    piscine.save((err) => {
        if(err) res.send(err);
        else res.send('Bravo, la piscine est maintenant stockée en base de donnée');
    });
});

app.get('/piscine', (req, res) =>{
    Piscine.find((err, piscines) =>{
        if(err) res.send(err);
        else
        {
            res.json(piscines);
            console.log(piscines.length)
        } 
    });
});

app.get('/piscine/:id', (req, res) => {
    var id = req.params.id;
    Piscine.findById(id, (err, piscine) => {
        if(err) res.send(err);
        else res.json(piscine);
    });
});

app.put('/piscine/:id', (req, res) => {
    var id = req.params.id;
    Piscine.findById(id, (err, piscine) => {
        if(err) res.send(err)
        else{
            piscine.nom = req.body.nom;
            piscine.adresse = req.body.adresse;
            piscine.tel = req.body.tel;
            piscine.description = req.body.description;
            
            piscine.save((err) => {
                if (err) res.send(err);
                else res.send("Mise à jour OK");
            });
        }
    });
});

app.delete('/piscine/:id', (req, res) => {
    var id = req.params.id;
    Piscine.remove({_id:id}, (err) => {
        if (err) res.send(err);
        else res.send("Piscine supprimé OK");
    });
});

app.listen(PORT);