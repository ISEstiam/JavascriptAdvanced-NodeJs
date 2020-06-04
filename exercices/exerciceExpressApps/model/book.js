class Book {
    constructor(id, name, ISBN, price, id_author) {
        this._id = id;
        this.name = name;
        this.ISBN = ISBN;
        this.price = price;
        this.id_author = id_author;
    }
}

module.exports = Book;