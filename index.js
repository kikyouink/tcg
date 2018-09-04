var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var game=io.of('/');
game.on('connection', (socket) => {
	console.log('一位用户加入连接...');
	socket.emit('log',game.name);
	socket.emit('log',game.connected);
	socket.emit('log',game.adapter);
	socket.emit('log',game.clients());
	socket.emit('log',socket.id);
	socket.emit('log',socket.client);
	socket.emit('log',socket.conn);
	socket.emit('log',socket.request);
	socket.emit('log',socket.handshake);
});

http.listen(3000, function () {
	console.log('listening on *:3000');
});