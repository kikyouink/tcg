<template>
	<div id="player">
	</div>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		name: 'player',
		data() {
			return {
				name: '甄姬',
				hp: 30,
				maxHp: 30,
				maxHandCard: 7,
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
		background: url(../assets/player/player.png);
		background-size: cover;
		background-position: center center;
	}
</style>
