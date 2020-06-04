var mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name : String,
    ISBN : String,
    price : Number, 
    id_author : Number
});

class Book {
    constructor(id, name, ISBN, price, id_author) {
        this._id = id;
        this.name = name;
        this.ISBN = ISBN;
        this.price = price;
        this.id_author = id_author;
    }
}

module.exports = mongoose.model('Book', BookSchema);