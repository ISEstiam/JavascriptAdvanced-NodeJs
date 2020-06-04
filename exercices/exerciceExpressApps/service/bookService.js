var Book = require('../model/book');

var tabBook = new Array();

class BookService{
    constructor(){
       
    }

    add(Book) {
        tabBook.push(Book);
        console.log(tabBook);
    }

    all() {
        console.log(tabBook);
        return tabBook;
    }

    getById(id)
    {
        var book = tabBook.find(book => book._id == id);
        return book;
    }

    getByName(name)
    {
        var book = tabBook.find(book => book.name == name);
        return book;
    }

    update(bookUpdate)
    {
        for(var cpt in tabBook)
        {
            if(tabBook[cpt]._id == bookUpdate._id)
            {
                tabBook[cpt].name = bookUpdate.name;
                tabBook[cpt].ISBN = bookUpdate.ISBN;
                tabBook[cpt].price = bookUpdate.price;
                tabBook[cpt].id_author = bookUpdate.id_author;
                break;
            }
        }
    }

    delete(id)
    {
        for( var cpt in tabBook)
        {
            if(tabBook[cpt]._id == id)
            {
                tabBook.splice(cpt, 1);
            }
        }
    }
}

module.exports = BookService;