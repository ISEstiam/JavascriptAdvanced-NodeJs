var Customer = require('../model/customer');

var tabCustomer = new Array();

class CustomerService{
    constructor(){
       
    }

    add(Customer) {
        tabCustomer.push(Customer);
        console.log(tabCustomer);
    }

    all() {
        console.log(tabCustomer);
        return tabCustomer;
    }

    getById(id)
    {
        var customer = tabCustomer.find(customer => customer._id == id);
        return customer;
    }

    getByFirstName(firstName)
    {
        var customer = tabCustomer.find(customer => customer.first_name == firstName);
        return customer;
    }

    update(customerUpdate)
    {
        for(var cpt in tabCustomer)
        {
            if(tabCustomer[cpt]._id == customerUpdate._id)
            {
                tabCustomer[cpt].first_name = customerUpdate.first_name;
                tabCustomer[cpt].last_name = customerUpdate.last_name;
                tabCustomer[cpt].email = customerUpdate.email;
                break;
            }
        }
    }

    delete(id)
    {
        for( var cpt in tabCustomer)
        {
            if(tabCustomer[cpt]._id == id)
            {
                tabCustomer.splice(cpt, 1);
            }
        }
    }
}

module.exports = CustomerService;