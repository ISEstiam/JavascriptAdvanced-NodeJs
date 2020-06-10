var express = require('express');
var app = express();
var router = express.Router();
var AuthorService = require('../service/authorService');
var Author = require('../model/author')
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

router.get('/', (req, res) => {
    var authorService = new AuthorService(req, res);
    tabauthor = authorService.all();
    res.json(tabauthor);
});

router.post('/add', (req, res) => {
    let author = new Author(req.body);
    console.log(req.body);
    console.log(author);
    var authorService = new AuthorService(req, res);
    authorService.add(author);
    res.end();
});

router.get('/getbyid/:id', (req, res) =>{
    let id = req.params.id;
    console.log(id);
    var authorService = new AuthorService(req, res);
    var author = authorService.getById(id);
    console.log(author);
    res.json(author);
});

router.get('/getbyfirstname/:firstname', (req, res) =>{
    let firstname = req.params.firstname;
    console.log(firstname);
    var authorService = new AuthorService(req, res);
    var author = authorService.getByFirstName(firstname);
    console.log(author);
    res.json(author);
});

router.put('/update/:id', (req, res) => {
    let id = req.params.id;
    let authorUpdate = new Author(req.body);
    console.log(authorUpdate);
    var authorService = new AuthorService(req, res);
    authorService.update(id, authorUpdate);
    res.end("L'auteur est mis à jour avec succès");
});

router.delete('/delete/:id', (req, res) => {
    var id = req.params.id;
    var authorService = new AuthorService(req, res);
    authorService.delete(id);
    res.end("L'auteur est supprimé");
});

module.exports = router;