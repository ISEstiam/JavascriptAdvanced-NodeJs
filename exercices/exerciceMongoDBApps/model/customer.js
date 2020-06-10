var mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    first_name : String,
    last_name : String,
    email : String
});

class Customer {
    constructor(id, first_name, last_name, email) {
        this._id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
    }
}

module.exports = mongoose.model('Customer', CustomerSchema);