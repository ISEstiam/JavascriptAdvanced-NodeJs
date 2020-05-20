var http = require("http");
var fs = require("fs");

http.createServer((req, res) => {
    if(req.url.indexOf('.html') != -1){
        fs.readFile('index.html', 'utf8', (err, data) => {    
            if(err)
            {
                console.log(err);
                res.writeHead(404, {'Content-Type' : 'text/html'});
                res.write('<h1>Fichier introuvable.</h1>');
            }
            else
            {
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.write(data);
            }
    
            res.end();
        });
    }

    if(req.url.indexOf('.css') != -1)
    {
        fs.readFile(__dirname + '/css/style.css', (err, data) => {
            if(err)
            {
                console.log(err);
                res.writeHead(404, {'Content-Type' : 'text/html'});
                res.write('<h1>Fichier introuvable.</h1>');
            }
            else
            {
                res.writeHead(200, {'Content-Type' : 'text/css'});
                res.write(data);
            }
    
            res.end();
        });
    }
    
}).listen(4000);

console.log("Serveur lancé");