var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Server = require('./server.js');

let server=new Server();
io.on('connection', (socket) => {
	// console.log(server)
	server.addPlayer(socket.id);
	server.log();
	socket.on('disconnect', () => {
		server.removePlayer(socket.id);
	})
});

http.listen(3000, function () {
	console.log('listening on *:3000\n');
});