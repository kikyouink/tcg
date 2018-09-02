<template>
	<transition name='preview'>
		<div id="previewCard" :style="{backgroundImage:imgSrc}">
			<!-- 这里的显示有待考虑 -->
			<!-- <div class="cost rt">{{previewCard.cost}}</div>
			<div v-if="previewCard.damage" class="damage lb">{{previewCard.damage}}</div>
			<div v-if="previewCard.hp" class="hp rb">{{previewCard.hp}}</div> -->
		</div>
	</transition>
	
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		name: 'previewCard',
		data() {
			return {
				type:'wushuang',
			}
		},
		mounted() {
			this.init();
		},
		computed: {
			imgSrc(){
				return 'url(http://tcg.sanguosha.com/upload/cards/01/01'+this.previewCard.id+'.jpg)';
				// return 'url(../../static/img/card/010'+'99'+'.jpg)'; 
			},
			...mapState([
				'previewCard'
			])
		},
		methods: {
			...mapMutations([
				
			]),
			init() {
				console.log('card');
			}
		},

	}
</script>

<style lang="scss" scoped>
	$ymred:#952a1d;
	#previewCard{
		width: 3.6rem;
		height: 5.05rem;
		border-radius: .2rem;
		left: calc(50% - 1.8rem);
		bottom: 2.7rem;
		background-size: cover;
		position: absolute;
		z-index:100;
		overflow: visible;

		// .cost{
		// 	background: purple;
		// }
		// .damage{
		// 	background: greenyellow;
		// }
		// .hp{
		// 	background: $ymred;
		// }
	}
	.preview-enter-active,
	.preview-leave-active {
		transition: all .5s;
	}
	.preview-enter,
	.preview-leave-to
	{
		opacity: 0;
	}
</style>
