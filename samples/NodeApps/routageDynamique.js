var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer((req, res) => {
    if(req.url.indexOf('/book/?idBook') != -1)
    {        
        var query = url.parse(req.url).query;
        var idBook = querystring.parse(query).idBook;
        console.log("Livre id :", idBook);
 
        res.end("Livre id :" + idBook);
    }

}).listen(8000);