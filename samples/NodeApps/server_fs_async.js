var http = require("http");
var fs = require("fs");

http.createServer((req, res) => {
    fs.readFile('index.html', 'utf8', (err, data) => {    
        if(err)
        {
            console.log(err);
            res.writeHead(404, {'Content-Type' : 'text/html'});
            res.write('<h1>Fichier introuvable.</h1>');
        }
        else
        {
            console.log(data);
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(data);
        }

        res.end();
    });
}).listen(4000);

console.log("Serveur lancé");