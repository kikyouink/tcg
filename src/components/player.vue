<template>
	<div class="player" :class="side">
		<!-- 玩家头像 -->
		<div class="avatar" :class="side" :style="{backgroundImage:avatarUrl}" @click="dosth()">
			<div class="rb">{{playerInfo.hp}}</div>
		</div>
		<!-- 卡牌区 -->
		<div class="card-area">
			<!-- 卡牌预览区 -->
			<transition name='fade'>
				<div class="previewCard" v-show="preview" :style="{backgroundImage:previewCardUrl}"></div>
			</transition>
			<!-- 阵略 -->
			<div class="buff">

			</div>
			<!-- 战器 -->
			<div class="equip">

			</div>
			<!-- 手牌区 -->
			<div class="handCard-area">
				<v-handCard :side="side" v-for="card in handCard" :key="card.id" :cardInfo="card"></v-handCard>
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
	import bus from '@/components/bus';
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
				preview: false,
				previewCardUrl: null,
				avatarUrl: 'url(../../static/img/player/' + this.playerInfo.name + '.png)',
				handCard: [

				]
			}
		},
		mounted() {
			this.init();
		},
		computed: {
			// ...mapState({
			// 	count: state => state.count,
			// })
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
				console.log('一位新的勇士诞生了');
				for(var i in this.playerInfo){
					this.$set(this.$data,i,this.playerInfo[i]);
					// this[i]=this.playerInfo[i];
				}
				console.log(this.name);
				this.draw(4);
				//预览卡牌
				// bus.$on('preview', (cardUrl) => {
				// 	if (cardUrl == null) this.preview = false;
				// 	else {
				// 		this.preview = true;
				// 		this.previewCardUrl = cardUrl;
				// 	}
				// })
				//游戏初始摸牌
				// bus.$on('gameDraw', () => {
				// 	this.draw(4);
				// })

			},
			dosth(){
				// player.draw();
				// this.draw();
				this.$socket.emit('ca','caocao');this.$socket
			},
			draw(num=1) {
				//提交异步操作
				this.Draw({
					target: this,
					num: num,
				})
					.then((cards) => {
						this.handCard = this.handCard.concat(cards);
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
