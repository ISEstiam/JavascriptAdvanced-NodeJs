var express = require('express');
var app = express();

let books = {
    'python' : {'email' : 'python@estiam.com', 'ISBN' : 'RTF123DSE'},
    'javascript' : {'email' : 'javascript@estiam.com', 'ISBN' : 'FR6345X'}
}


let users = {
    '1' : {'name' : 'toto', 'email' : 'toto@estiam.com'},
    '2' : {'name' : 'tata', 'email' : 'tata@estiam.com'}
}

app.get('/book/:nameBook', (req, res) => {
    let nameBook = req.params.nameBook;
    console.log(nameBook);
    res.json(books[nameBook]);
})

app.get('/user/:idUser', (req, res) => {
    let idUser = req.params.idUser;
    console.log(idUser);

    if(users[idUser] != null)   res.json(users[idUser]);
    else res.send('Utilisateur non trouvé.');
})

app.listen(3000);