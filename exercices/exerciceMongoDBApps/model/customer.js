class Customer {
    constructor(id, first_name, last_name, email) {
        this._id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
    }
}

module.exports = Customer;