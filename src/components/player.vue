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
		},
		computed: {
			...mapState('player/handCard',[
				'previewCard','preview'
			]),
			bgUrl(){
				if(!this.previewCard) return '';
				else return 'url(http://tcg.sanguosha.com/upload/cards/13/13' + this.previewCard.id + '.jpg)';
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
				// this.draw();
				// this.$socket.emit('ca','caocao');
			},
			draw(num=1) {
				console.log('draw');
				// var cards=this.$refs.cardPile.requireCard(num);
				// this.player.handCard = this.player.handCard.concat(cards);
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
	.player {
	    position: absolute;
	    width: 100%;
	    height: 2.09rem;
	    overflow: visible;

	    &.self {
	        bottom: 0;
	    }
	    &.oppo {
	        top: 0;
	    }
	    .avatar {
	        width: 2rem;
	        height: 2.7rem;
	        border-radius: 0.1rem;
	        box-shadow: 0 0 0.2rem black;
	        background-size: cover;
	        background-position: center center;
	        position: absolute;
	        // left: calc(50% - 1rem);
			right: 0rem;
	        z-index: 10;

	        &.self {
	            bottom: 0;
	        }
	        &.oppo {
	            top: 0;
	        }
	    }
	    .card-area {
	        height: 100%;
	        background: rgba(0, 0, 0, 0.5);
	        overflow: visible;

	        .previewCard {
	            width: 3.2rem;
	            height: 4.46rem;
	            border-radius: 0.2rem;
	            left: calc(50% - 1.6rem);
	            bottom: 2.2rem;
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
			.handCard-area{
				float: left;
	            margin-left: 1.5rem;
	            height: 100%;
			}
	    }
	}
</style>
