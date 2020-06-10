var Customer = require('../model/customer');

// var tabCustomer = new Array();

class CustomerService{
    constructor(req, res){
        this.req = req;
        this.res = res;
     }

     add(newCustomer) {
        newCustomer.save((err) => {
            if(err) this.res.send(err);
            else this.res.send("Client ajouté");
        });
    }

    all() {
        Customer.find((err, customers) =>{
            if(err) res.send(err);
            else
            {
                res.json(customers);
                console.log(customers.length)
            } 
        });
    }

    getById(id)
    {
        Customer.findById(id, (err, customer) => {
            if(err) res.send(err);
            else return customer;
        });
    }

    getByFirstName(firstName)
    {
        Customer.findOne({first_name: firstName}, (err, customer) => {
            if(err) res.send(err);
            else return customer;
        });
    }

    update(id, customerUpdate)
    {
        Customer.findById(id, (err, customer) => {
            if(err) res.send(err)
            else{
                customer.first_name = customerUpdate.first_name;
                customer.last_name = customerUpdate.last_name;
                customer.email = customerUpdate.email;
                
                customer.save((err) => {
                    if (err) res.send(err);
                    else res.send("Mise à jour OK");
                });
            }
        });

        customerUpdate.save((err) => {
            if (err) res.send(err);
            else res.send("Mise à jour OK");
        });
    }

    delete(id)
    {
        Customer.remove({_id:id}, (err) => {
            if (err) res.send(err);
            else res.send("Client supprimé OK");
        });
    }
}

module.exports = CustomerService;