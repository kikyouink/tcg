class Server {
    constructor() {
        this.count=0;
        this.playerList=[];
        this.waittingList=[];
        this.playingList=[];
    }
    log() {
        console.log('当前玩家数:' + this.count);
        console.log('当前玩家列表：');
        console.log(this.playerList);
        console.log('当前等待列表：');
        console.log(this.waittingList);
    }
    addPlayer(info) {
        this.count++;
        this.playerList.push(info);
        this.waittingList.push(info);
    }
    removePlayer(info) {
        this.count--;
        this.playerList.removeObj(info);
    }
    findPlayer(id){
        var player=this.playerList.findPlayer(id);
        return player;
    }
    matchPlayer(id){
        var player=this.waittingList.matchPlayer(id);
        if(player) return player;
    }
    startMatch(id){
        return new Promise((reslove,reject)=>{
            var s=setInterval(()=>{
                var player=this.matchPlayer(id);
                if(player){
                    console.log('matchSucc');
                    clearInterval(s);
                    reslove(player);
                }
            },2000)
        })
    }
}
module.exports = Server;