<template>
	<div class="player" :class="side" @click="dosth()">
		<!-- 玩家头像 -->
		<!-- <div class="avatar" :class="side" :style="{backgroundImage:player.avatarUrl}">
			<div class="rb">{{player.hp}}</div>
		</div> -->
		<!-- 卡牌预览区 -->
		<transition name='fade'>
			<div class="previewCard" v-show="preview" :style="{backgroundImage:bgUrl}"></div>
		</transition>
		<!-- 卡牌区 -->
		<div class="card-area" :class="side">
			<!-- 阵略 -->
			<!-- <div class="buff">

			</div> -->
			<!-- 战器 -->
			<!-- <div class="equip">

			</div> -->
			<!-- 手牌区 -->
			<transition-group name='handCard-area' class="handCard-area" :class="side"  mode='in-out' tag="div">
				<v-handCard class="handCard" v-for="card in player.handCard" :key="card.id"  :cardInfo="card"></v-handCard>
			</transition-group>
			<!-- 牌堆与弃牌堆 -->
			<div class="cardPile">
				<v-cardPile ref="cardPile"></v-cardPile>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex';
	import handCard from '@/components/card/handCard.vue';
	import cardPile from '@/components/card/cardPile.vue';

	export default {
		name: 'player',
		components: {
			"v-handCard": handCard,
			"v-cardPile":cardPile,
		},
		props: {
			side: String,
			playerInfo: Object,
		},
		data() {
			return {
				player:{
					id:'',
					nickname:'',
					hp: 30,
					maxHp: 30,
					maxHandCard: 7,
					avatarUrl: 'url('+require('../assets/img/player/' + this.playerInfo.avatar + '.png')+')',
					handCard: []
				}
			}
		},
		mounted() {
			this.init();
			window.draw=this.draw;
		},
		computed: {
			...mapState('player/handCard',[
				'previewCard','preview'
			]),
			bgUrl(){
				if(!this.previewCard) return '';
				else return '../assets/img/card/' + this.previewCard.id + '.jpg)';
			},
		},
		methods: {
			...mapMutations('player',[
				'Draw','Damage','Recover'
			]),
			init() {
				for(var i in this.playerInfo){
					this.$set(this.player,i,this.playerInfo[i]);
				}
				console.log('玩家的名称是:'+this.player.nickname);
			},
			dosth(){
				this.draw();
			},
			draw(num=1) {
				var cards=this.$refs.cardPile.requireCard(num);
				console.log(cards);
				for(var i=0;i<cards.length;i++){
					console.log(cards[i]);
					this.player.handCard.push(cards[i]);
				}
				console.log(this.player.handCard);
				// this.Draw({
				// 	target: this.player,
				// 	num: num,
				// 	cards:cards,
				// })
			},
			// damage(num=1){
			// 	this.Damage({
			// 		source:this,
			// 		target: this,
			// 		num: num,
			// 	})
			// }
		},

	}
</script>

<style lang="scss">
	$ymred: #952a1d;
	.self {
		bottom: 0;
	}
	.oppo {
		top: 0;
	}
	.player {
	    position: absolute;
	    width: 100%;
	    height: 50%;
		overflow: visible;

	    .avatar {
	        position: absolute;
			right: 0rem;
	        z-index: 10;
	        width: 2rem;
	        height: 2.7rem;
	        border-radius: 0.1rem;
	        background-position: center center;
	        background-size: cover;
			box-shadow: 0 0 0.2rem black;
	    }
	    .card-area {
			position: absolute;
			width: 100%;
	        height: 100%;
			overflow: visible;
			
			.previewCard {
				position: absolute;
				bottom: 2.2rem;
				left: calc(50% - 1.6rem);
				z-index: 100;
				width: 3.2rem;
				height: 4.46rem;
				border-radius: 0.2rem;
				background-size: cover;
			}

			.handCard-area{
				position: absolute;
				width: 100%;
				@include flex;
				justify-content: center;
				flex-wrap: nowrap;
				height: 50%;
				background: rgba(0, 0, 0, 0.5);
			}
	    }
	}
</style>
