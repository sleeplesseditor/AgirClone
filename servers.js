const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
const socketio = require('socket.io');
const expressServer = app.listen(8080);
const io = socketio(expressServer);

console.log('Server is listening on Port 8080')