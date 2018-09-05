function api() {
	Array.prototype.findNext = function (val) {
		var num = this.length;
		var index = this.indexOf(val);
		return (index + 1 == num) ? this[0] : this[index + 1];
	};
	Array.prototype.findPrev = function (val) {
		var num = this.length;
		var index = this.indexOf(val);
		return (index - 1 < 0) ? this[num - 1] : this[index - 1];
	};
	Array.prototype.findRandom = function () {
		var num = this.length;
		var item = parseInt(Math.random() * num);
		return this[item];
	}
	Array.prototype.findPlayer = function (id) {
		for(var i=0;i<this.length;i++){
			if(this[i].id==id) return this[i];
		}
	}
	Array.prototype.remove = function (val) {
		var index = this.indexOf(val);
		if (index > -1) {
			this.splice(index, 1);
		}
		return this;
	}
	Array.prototype.randomGet = function () {
		var num=this.length;
		var index=parseInt(Math.random()*num);
		return this[index];
	}
	Array.prototype.removeObj = function (val) {
		var id;
		if (typeof val == 'string') id=val;
		else id=val.id;
		for (var i = 0; i < this.length; i++) {
			if (this[i].id == id) {
				this.splice(i, 1);
			}
		}
		return this;
	}
	Array.prototype.matchPlayer = function (id) {
		var list=this.slice();
		list.removeObj(id);
		if(list.length==0) return false;
		else{
			var player=list.randomGet();
			return player;
		}
	}
	//禁止右键
	// document.oncontextmenu = function(){
	// 	return false;
	// }
}
api();
