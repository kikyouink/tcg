<template>
	<div class="player" :class="side">
		<!-- 玩家头像 -->
		<div class="avatar" :class="side" :style="{backgroundImage:avatarUrl}"></div>
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
				<v-handCard :class="side" v-for="card in handCard" :key="card.id" :cardInfo="card"></v-handCard>
			</div>

		</div>
	</div>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import bus from './bus';
	import handCard from '@/components/card.vue';

	export default {
		name: 'player',
		components: {
			"v-handCard": handCard,
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
					{
						id: '022',
						name: '青州探马',
						type: 'person-chihou',
						country: 'wei-1',
						data: '1-2-2',
					}, {
						id: '156',
						name: '亡国哀民',
						type: 'person-baixing',
						country: 'qun-1',
						data: '3-1-4',
						skill: ['chongfeng'],
					}, {
						id: '056',
						name: '猛将一击',
						type: 'magic-basic',
						country: 'shu-1',
						cost: 5,
					}, {
						id: '077',
						name: '英勇无畏',
						type: 'buff',
						country: 'shu-1',
						cost: 2,
					}, {
						id: '023',
						name: '司隶步兵',
						type: 'person-bubing',
						country: 'wei',
						data: '3-3-3',
					}, {
						id: '086',
						name: '大雾',
						type: 'magic-instant',
						country: 'wu-1',
						cost: 1,
					}, {
						id: '050',
						name: '归隐杰女•黄月英',
						type: 'ws-famale:person-yinshi',
						country: 'shu-1',
						data: '2-1-3',
					}, {
						id: '178',
						name: '倚天剑',
						type: 'ws:equip-weapon',
						cost: 4,
					}
				]
			}
		},
		mounted() {
			this.init();
		},
		computed: {
			...mapState({
				count: state => state.count,
			})
		},
		methods: {
			...mapMutations([
				'damage', 'recover',
			]),
			init() {
				// console.clear();
				console.log('一位新的勇士诞生了');
				bus.$on('preview', (cardUrl) => {
					if (cardUrl == null) this.preview = false;
					else {
						this.preview = true;
						this.previewCardUrl = cardUrl;
					}
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
	        .buff,.equip {
	            float: left;
				width: 1.5rem;
				height: 100%;
	        }
	    }
	}
</style>
