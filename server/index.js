var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var API = require('../src/api.js');
var Server = require('./server.js');

let server=new Server();
io.on('connection', (socket) => {
	// console.log(server)
	socket.on('match', (player) => {
		console.log(player.nickname+'正在搜索比赛');
		//将正在搜寻比赛的玩家加入玩家列表
		server.addPlayer(player);
		server.log();
		server.startMatch(player.id).then((player)=>{
			console.log(player);
			socket.emit('matchSucc',player);
		}).catch((e)=>{
			console.log(e);
		})
	})
	socket.on('leave', (player) => {
		console.log(player.nickname+'取消了搜索');
		//将正在搜寻比赛的玩家加入玩家列表
		server.removePlayer(player);
		server.log();
	})
	socket.on('disconnect', () => {
		var id=socket.id;
		var player=server.findPlayer(id);
		if(player){
			console.log(player.nickname+'断开连接');
			server.clearPlayer(id);
		}
		else{
			console.log('一位未知大佬断开连接');
		}
		server.log();
	})
});

http.listen(3000, function () {
	console.log('listening on *:3000\n');
});