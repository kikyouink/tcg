var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var API = require('../src/api.js');
var Server = require('./server.js');

let server=new Server();
io.on('connection', (socket) => {
	// console.log(server)
	socket.on('match', (info) => {
		console.log(info.nickname+'正在搜索比赛');
		//将正在搜寻比赛的玩家加入玩家列表
		server.addPlayer(info);
		server.log();
		server.startMatch(info.id).then((player)=>{
			console.log(player);
			socket.emit('matchSucc',player);
		}).catch((e)=>{
			console.log(e);
		})
	})
	socket.on('leave', (info) => {
		console.log(info.nickname+'取消了搜索');
		//将正在搜寻比赛的玩家加入玩家列表
		server.removePlayer(info);
		server.log();
	})
	socket.on('disconnect', () => {
		var id=socket.id;
		var player=server.findPlayer(id);
		console.log(player);
		console.log(player.nickname||id+'断开连接');
		server.removePlayer(socket.id);
		server.log();
	})
});

http.listen(3000, function () {
	console.log('listening on *:3000\n');
});