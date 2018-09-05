<template>
	<div class="player" :class="side">
		<!-- 玩家头像 -->
		<div class="avatar" :class="side" :style="{backgroundImage:player.avatarUrl}" @click="dosth()">
			<div class="rb">{{player.hp}}</div>
		</div>
		<!-- 卡牌区 -->
		<div class="card-area">
			<!-- 卡牌预览区 -->
			<transition name='fade'>
				<div class="previewCard" v-show="preview" :style="{backgroundImage:bgUrl}"></div>
			</transition>
			<!-- 阵略 -->
			<div class="buff">

			</div>
			<!-- 战器 -->
			<div class="equip">

			</div>
			<!-- 手牌区 -->
			<div class="handCard-area" :side="side">
				<v-handCard v-for="card in player.handCard" :key="card.id" :cardInfo="card"></v-handCard>
			</div>
			<!-- 牌堆与弃牌堆 -->
			<!-- <div class="cardPile">
				<v-cardPile ></v-cardPile>
			</div> -->
		</div>
	</div>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex';
	// import bus from '@/components/bus';
	import handCard from '@/components/card/handCard.vue';
	// import cardPile from '@/components/card/cardPile.vue';

	export default {
		name: 'player',
		components: {
			"v-handCard": handCard,
			// "v-cardPile":cardPile,
		},
		props: {
			side: String,
			playerInfo: Object,
		},
		data() {
			return {
				player:{
					name:String,
					hp: 30,
					maxHp: 30,
					maxHandCard: 7,
					avatarUrl: 'url(../../static/img/player/' + this.playerInfo.name + '.png)',
					handCard: [

					]
				}
			}
		},
		mounted() {
			this.init();
		},
		computed: {
			...mapState('player/handCard',[
				'previewCard','preview'
			]),
			bgUrl(){
				if(!this.previewCard) return '';
				else return 'url(http://tcg.sanguosha.com/upload/cards/01/01' + this.previewCard.id + '.jpg)';
			},
		},
		methods: {
			...mapMutations('player',{
				Damage:'damage',
				Recover:'recover',
			}),
			...mapActions('player', {
				Draw: 'draw',
			}),
			init() {
				for(var i in this.playerInfo){
					this.$set(this.player,i,this.playerInfo[i]);
				}
				console.log('玩家的名称是:'+this.player.name);
				this.draw(4);
			},
			dosth(){
				this.draw();
				// this.draw();
				// this.$socket.emit('ca','caocao');
			},
			draw(num=1) {
				//提交异步操作
				this.Draw({
					target: this.player,
					num: num,
				})
					.then((cards) => {
						// console.log(cards);
						game.log();
						console.log(JSON.parse(JSON.stringify(cards)));
						this.player.handCard = this.player.handCard.concat(cards);
					})
			},
			damage(num=1){
				this.Damage({
					source:this,
					target: this,
					num: num,
				})
			}
		},

	}
</script>

<style lang="scss">
	$ymred: #952a1d;
	.player {
	    position: absolute;
	    width: 100%;
	    height: 2.09rem;
	    overflow: visible;
	    cursor: pointer;

	    &.self {
	        bottom: 0;
	    }
	    &.enemy {
	        top: 0;
	    }
	    .avatar {
	        width: 2rem;
	        height: 2.7rem;
	        border-radius: 0.1rem;
	        box-shadow: 0 0 0.2rem;
	        background-size: cover;
	        background-position: center center;
	        position: absolute;
	        left: calc(50% - 1rem);
	        z-index: 10;

	        &.self {
	            bottom: 1.3rem;
	        }
	        &.enemy {
	            top: 1.3rem;
	        }
	    }
	    .card-area {
	        height: 100%;
	        background: rgba(0, 0, 0, 0.5);
	        overflow: visible;

	        .previewCard {
	            width: 2.98rem;
	            height: 4.16rem;
	            border-radius: 0.2rem;
	            left: calc(50% - 1.48rem);
	            bottom: 2.7rem;
	            background-size: cover;
	            position: absolute;
	            z-index: 100;
	        }
	        .buff,
	        .equip {
	            float: left;
	            width: 1.5rem;
	            height: 100%;
	        }
	    }
	}
</style>
