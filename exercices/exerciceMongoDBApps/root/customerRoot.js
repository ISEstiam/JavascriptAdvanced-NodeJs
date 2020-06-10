var express = require('express');
var app = express();
var router = express.Router();
var CustomerService = require('../service/customerService');
var Customer = require('../model/customer')
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

router.get('/', (req, res) => {
    var customerService = new CustomerService(req, res);
    tabcustomer = customerService.all();
    res.json(tabcustomer);
});

router.post('/add', (req, res) => {
    let customer = new Customer(req.body);
    console.log(req.body);
    console.log(customer);
    var customerService = new CustomerService(req, res);
    customerService.add(customer);
    res.end();
});

router.get('/getbyid/:id', (req, res) =>{
    let id = req.params.id;
    console.log(id);
    var customerService = new CustomerService(req, res);
    var customer = customerService.getById(id);
    console.log(customer);
    res.json(customer);
});

router.get('/getbyfirstname/:firstname', (req, res) =>{
    let firstname = req.params.firstname;
    console.log(firstname);
    var customerService = new CustomerService(req, res);
    var customer = customerService.getByFirstName(firstname);
    console.log(customer);
    res.json(customer);
});

router.put('/update/:id', (req, res) => {
    let id = req.params.id;
    let customerUpdate = new Customer(req.body);
    console.log(customerUpdate);
    var customerService = new CustomerService(req, res);
    customerService.update(id, customerUpdate);
    res.end("Le client est mis à jour avec succès");
});

router.delete('/delete/:id', (req, res) => {
    var id = req.params.id;
    var customerService = new CustomerService(req, res);
    customerService.delete(id);
    res.end("Le client est supprimé");
});

module.exports = router;