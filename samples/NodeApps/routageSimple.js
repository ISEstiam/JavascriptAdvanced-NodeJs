var http = require('http');

http.createServer((req, res) => {
    if(req.url == '/getusers')
    {
        console.log("Listes des utilisateurs");
        res.end("Listes des utilisateurs");
    } 
    if(req.url == '/getbooks'){
        console.log("Listes des livres");
        res.end("Listes des livres");
    } 
}).listen(8000);
