class Server {
    constructor() {
        this.playerList = [];
        this.waittingList = [];
        this.playingList = [];
    }
    log() {
        console.log('当前玩家数:' + this.playerList.length);
        console.log('当前等待玩家数:' + this.waittingList.length);
        console.log('当前玩家列表：');
        console.log(this.playerList);
        console.log('当前等待列表：');
        console.log(this.waittingList);
    }
    matchPlayers(){
        return new Promise((reslove,reject)=>{
            if(this.waittingList.length<2) return ;
            var players=this.waittingList.matchPlayer();
            // console.log(players);
            reslove(players);
        })
    }
    addPlayer(player) {
        if(!this.playerList.contains(player)){
            this.playerList.push(player);
        }
        this.waittingList.push(player);
    }
    removePlayer(player) {
        this.waittingList.removeObj(player);
    }
    clearPlayer(player) {
        this.playerList.removeObj(player);
        this.waittingList.removeObj(player);
    }
    findPlayer(id) {
        var player = this.playerList.findPlayer(id);
        return player;
    }
}
module.exports = Server;