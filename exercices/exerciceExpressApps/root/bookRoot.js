var express = require('express');
var app = express();
var router = express.Router();
var BookService = require('../service/bookService');
var Book = require('../model/book')
var AuthorService = require('../service/authorService');
var Author = require('../model/author')
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

router.get('/', (req, res) => {
    var bookService = new BookService();
    tabBook = bookService.all();
    res.json(tabBook);
});

router.post('/add', (req, res) => {
    let book = new Book(req.body.id, req.body.name, req.body.ISBN, req.body.price, req.body.id_author);
    console.log(req.body);
    console.log(book);
    var bookService = new BookService();
    bookService.add(book);
    res.end();
});

router.get('/getbyid/:id', (req, res) =>{
    let id = req.params.id;
    console.log(id);
    var bookService = new BookService();
    var book = bookService.getById(id);
    var authorService = new AuthorService();
    var author = authorService.getById(book.id_author);
    console.log({"book": book, "author":author});
    res.json({"book": book, "author":author});
});

router.get('/getbyname/:name', (req, res) =>{
    let name = req.params.name;
    console.log(name);
    var bookService = new BookService();
    var book = bookService.getByName(name);
    console.log(book);
    res.json(book);
});

router.put('/update/', (req, res) => {
    let bookUpdate = new Book(req.body.id, req.body.name, req.body.ISBN, req.body.price);
    console.log(bookUpdate);
    var bookService = new BookService();
    bookService.update(bookUpdate);
    res.end("Le livre est mis à jour avec succès");
});

router.delete('/delete/:id', (req, res) => {
    var id = req.params.id;
    var bookService = new BookService();
    bookService.delete(id);
    res.end("Le livre est supprimé");
});

module.exports = router;