class Server {
    constructor() {
        let s = {
            count: 0,
            playerList: {},
        }
        Array.prototype.remove = function (val) {
            var index = this.indexOf(val);
            if (index > -1) {
                this.splice(index, 1);
            }
        }
        for (var i in s) {
            this[i] = s[i];
        }
    }
    log() {
        console.log('当前玩家数:' + this.count);
        console.log('当前玩家列表' + this.playerList+'\n');
    }
    addPlayer(id) {
        this.count++;
        console.log(id + '加入连接...\n');
    }
    removePlayer(id) {
        this.count--;
        console.log(id + '断开连接...\n');
    }
    registerPlayer(obj) {
        var id = obj.id;
        this.playerList[id] = obj;
        // console.log(player.name);
    }
}
module.exports = Server;