var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var API = require('../src/api.js');
var Server = require('./server.js');

let server = new Server();
let matching = false;
let num=0;
let startMatch;
async function work() {
	try {
		var players = await server.matchPlayers();
		console.log('系统已匹配完成：')
		console.log(players);
		// socket.emit('matchSucc', players);
		var room='room'+(++num);
		var player0=io.sockets.connected[players[0].id];
		var player1=io.sockets.connected[players[1].id];
		player0.join(room);
		player1.join(room);
		player0.emit('matchSucc',players[1]);
		player1.emit('matchSucc',players[0]);
		// io.to('room'+n).emit('matchSucc', players);
		// socket.on('say to someone', (id, msg) => {
		// 	// send a private message to the socket with the given id
		// 	socket.to(id).emit('my message', msg);
		// });
	}
	catch (e) {
		console.log(e);
	}

}
io.on('connection', (socket) => {
	socket.on('match', (player) => {
		console.log(player.nickname + '正在搜索比赛');
		if (!matching&&server.waittingList.length>0) {
			console.log('系统已开始匹配');
			matching=true;
			startMatch = setInterval(() => {
				work();
			}, 500)
		}
		let rooms = Object.keys(socket.rooms);
    	console.log(rooms)
		//将正在搜寻比赛的玩家加入玩家列表
		server.addPlayer(player);
		server.log();
		// server.startMatch(player.id).then((player)=>{
		// 	console.log(player);
		// 	socket.emit('matchSucc',player);
		// }).catch((e)=>{
		// 	console.log(e);
		// })
	})
	socket.on('leave', (player) => {
		console.log(player.nickname + '取消了搜索');
		//将正在搜寻比赛的玩家加入玩家列表
		server.removePlayer(player);
		if (matching&&server.waittingList.length<2) {
			console.log('人数不足，系统已停止匹配');
			matching=false;
			clearInterval(startMatch);
		}
		server.log();
	})
	socket.on('disconnect', () => {
		var id = socket.id;
		var player = server.findPlayer(id);
		if (player) {
			console.log(player.nickname + '断开连接');
			server.clearPlayer(id);
		}
		else {
			console.log('一位未知大佬断开连接');
		}
		server.log();
	})
});

http.listen(3000, function () {
	console.log('listening on *:3000\n');
});