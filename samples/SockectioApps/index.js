var express = require('express');
var app = express();
const PORT = 3000;
var http = require('http').createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


// Chargement de socket.io
var io = require('socket.io').listen(http);

io.on('connection', (socket) => {
    console.log('Connexion établie : ', socket.id);
    socket.emit('message', 'Bonjour');

    socket.on('news', (msg) =>{
        console.log('News à partir du client : ', msg, socket.id);
    })

    socket.on('auth', (name) =>{
        socket.name = name;
        console.log(socket.name, " : ", socket.id);
    });

    socket.broadcast.emit("msg", "Brodcast");

    socket.on("room_name", (room_name) =>{
        console.log('Room name : ', room_name);

        if(room_name == "game1") socket.join('game1');
        else socket.join('game2');

        io.to('game1').emit('message', 'Vous êtes dans la room game1');
        io.to('game2').emit('message', 'Vous êtes dans la room game2');
    })
});

const admin = io.of('/admin');
admin.on('connection', (socket) => {
    console.log("Socket io mode administration");
});

const client = io.of('/client');
client.on('connection', (socket) => {
    console.log('Socket io mode client');
});


http.listen(PORT);


//app.listen(PORT);