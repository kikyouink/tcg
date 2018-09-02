<template>
	<div id="player" :class="side">
		<div class="avatar" :style="{backgroundImage:avatarUrl}"></div>
		<!-- 卡牌预览区 -->
		<v-previewCard v-show="preview"></v-previewCard>
		<div class="card-area">
			<!-- 手牌区 -->
			<v-handCard v-for="card in cards" :key="card.id" :cardInfo="card"></v-handCard>
		</div>
	</div>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import handCard from '@/components/card/hand.vue';
	import previewCard from '@/components/card/preview.vue';
	
	export default {
		name: 'player',
		components: {
            "v-handCard": handCard,
            "v-previewCard": previewCard,
		},
		props:{
			side:String,
			playerInfo:object,
		},
		data() {
			return {
				
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
				console.log('一位新的勇士诞生了');
				
				this.damage({
					source: this,
					target: '王异',
					num: 1
				});
			}
		},

	}
</script>

<style lang="scss" type="text/css">
	#player {
		width: 2rem;
		height: 2.7rem;
		border-radius: .1rem;
		box-shadow: 0 0 .2rem;
		text-align: center;
		font-size: .2rem;
		background: url(../../static/img/player/player.png);
		background-size: cover;
		background-position: center center;
		position: absolute;
		left: calc(50% - 1rem);
	}
	.area {
            width: 100%;
            height: 50%;
            position: relative;
            overflow: visible;

            .bl {
                width: 100%;
                height: 2.7rem;
                background: rgba(0, 0, 0, 0.5);
                position: absolute;

                &.enemy {
                    top: 0;
                }
                &.player {
                    bottom: 0;
                }
            }
        }
</style>
