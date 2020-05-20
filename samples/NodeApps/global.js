console.log(__dirname);
console.log(__filename);

var buf = Buffer.alloc(50);;
var len = buf.write("Buffeur contenant une chaine de caractere");
console.log("Nombre d'octets écrit :" + len);
console.log(buf.toString()[0]);