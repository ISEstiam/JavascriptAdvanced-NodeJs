var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<H1>Hello World</H1>");
    res.end();

}).listen(8000);

console.log("Le serveur est en execution");
