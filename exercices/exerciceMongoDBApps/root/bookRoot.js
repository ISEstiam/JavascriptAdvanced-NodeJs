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
    let book = new Book(req.body);
    console.log(req.body);
    console.log(book);
    var bookService = new BookService(req, res);
    result = bookService.add(book);
 });

router.get('/getbyid/:id', (req, res) =>{
    let id = req.params.id;
    console.log(id);
    var bookService = new BookService(req, res);
    var book = bookService.getById(id);
    var authorService = new AuthorService(req, res);
    var author = authorService.getById(book.id_author);
    console.log({"book": book, "author":author});
    res.json({"book": book, "author":author});
});

router.get('/getbyname/:name', (req, res) =>{
    let name = req.params.name;
    console.log(name);
    var bookService = new BookService(req, res);
    var book = bookService.getByName(name);
    console.log(book);
    res.json(book);
});

router.put('/update/:id', (req, res) => {
    let id = req.params.id;
    let bookUpdate = new Book(req.body);
    console.log(bookUpdate);
    var bookService = new BookService(req, res);
    bookService.update(id, bookUpdate);
    res.end("Le livre est mis à jour avec succès");
});

router.delete('/delete/:id', (req, res) => {
    var id = req.params.id;
    var bookService = new BookService(req, res);
    bookService.delete(id);
    res.end("Le livre est supprimé");
});

module.exports = router;