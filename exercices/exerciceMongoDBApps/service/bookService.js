var Book = require('../model/book');

//var tabBook = new Array();

class BookService{
    constructor(req, res){
       this.req = req;
       this.res = res;
    }

    add(newBook) {
        newBook.save((err) => {
            if(err) this.res.send(err);
            else this.res.send("Livre ajouté");
        });
    }

    all() {
        Book.find((err, books) =>{
            if(err) res.send(err);
            else
            {
                res.json(books);
                console.log(books.length)
            } 
        });
    }

    getById(id)
    {
        Book.findById(id, (err, book) => {
            if(err) res.send(err);
            else return book;
        });
    }

    getByName(name)
    {
        Book.findOne({name: name}, (err, book) => {
            if(err) res.send(err);
            else return book;
        });
    }

    update(id, bookUpdate)
    {
        Book.findById(id, (err, book) => {
            if(err) res.send(err)
            else{
                book.name = bookUpdate.name;
                book.ISBN = bookUpdate.ISBN;
                book.price = bookUpdate.price;
                book.id_author = bookUpdate.id_author;
                
                book.save((err) => {
                    if (err) res.send(err);
                    else res.send("Mise à jour OK");
                });
            }
        });

        bookUpdate.save((err) => {
            if (err) res.send(err);
            else res.send("Mise à jour OK");
        });
    }

    delete(id)
    {
        Book.remove({_id:id}, (err) => {
            if (err) res.send(err);
            else res.send("Livre supprimé OK");
        });
    }
}

module.exports = BookService;