var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output2.txt');

readerStream.on('data', (content) => {
    data += content;
});


readerStream.on('end', () => {
    console.log(data);
    writerStream.write(data, 'UTF8');
    writerStream.end();
    fs.appendFile('output.txt', data, (error) =>{
        if (error) console.log(error);
        console.log("Les données sont ajoutés avec succès");
    });
});

readerStream.on('error', () => console.log("Fichier input introuvable"));
writerStream.on('error', () => console.log("Fichier output introuvable"));

writerStream.on('finish', () => {
    console.log("l'ecriture dans le fichier est terminé");
});