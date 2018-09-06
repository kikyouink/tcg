class Server {
    constructor() {
        this.pnum=0;
        this.wnum=0;
        this.playerList=[];
        this.waittingList=[];
        this.playingList=[];
    }
    log() {
        console.log('当前玩家数:' + this.pnum);
        console.log('当前玩家列表：');
        console.log(this.playerList);
        console.log('当前等待列表：');
        console.log(this.waittingList);
    }
    addPlayer(player) {
        this.pnum++;
        this.playerList.push(player);
        this.waittingList.push(player);
    }
    removePlayer(player) {
        this.wnum--;
        this.waittingList.removeObj(player);
    }
    clearPlayer(player){
        this.pnum--;
        this.playerList.removeObj(player);
        this.waittingList.removeObj(player);
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