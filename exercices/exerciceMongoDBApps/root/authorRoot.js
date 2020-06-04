var express = require('express');
var app = express();
var router = express.Router();
var AuthorService = require('../service/authorService');
var Author = require('../model/author')
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

router.get('/', (req, res) => {
    var authorService = new AuthorService();
    tabauthor = authorService.all();
    res.json(tabauthor);
});

router.post('/add', (req, res) => {
    let author = new Author(req.body.id, req.body.first_name, req.body.last_name, req.body.email);
    console.log(req.body);
    console.log(author);
    var authorService = new AuthorService();
    authorService.add(author);
    res.end();
});

router.get('/getbyid/:id', (req, res) =>{
    let id = req.params.id;
    console.log(id);
    var authorService = new AuthorService();
    var author = authorService.getById(id);
    console.log(author);
    res.json(author);
});

router.get('/getbyfirstname/:firstname', (req, res) =>{
    let firstname = req.params.firstname;
    console.log(firstname);
    var authorService = new AuthorService();
    var author = authorService.getByFirstName(firstname);
    console.log(author);
    res.json(author);
});

router.put('/update/', (req, res) => {
    let authorUpdate = new Author(req.body.id, req.body.first_name, req.body.last_name, req.body.email);
    console.log(authorUpdate);
    var authorService = new AuthorService();
    authorService.update(authorUpdate);
    res.end("L'auteur est mis à jour avec succès");
});

router.delete('/delete/:id', (req, res) => {
    var id = req.params.id;
    var authorService = new AuthorService();
    authorService.delete(id);
    res.end("L'auteur est supprimé");
});

module.exports = router;