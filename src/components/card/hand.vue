<template>
	<transition name='hand'>
		<div id="handCard" :style="{backgroundImage:imgSrc}" @mouseover="showPreviewCard(cardInfo)" @mouseout="showPreviewCard(null)">
		</div>
	</transition>
	
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		name: 'handCard',
		props:{
			cardInfo:Object,
		},
		data() {
			return {
				
			}
		},
		mounted() {
			this.init();
		},
		computed: {
			imgSrc(){
				return 'url(http://tcg.sanguosha.com/upload/cards/01/01'+this.cardInfo.id+'.jpg)';
			},
			// ...mapState({
				
			// })
		},
		methods: {
			...mapMutations([
				'showPreviewCard',
			]),
			init() {
				
			}
		},

	}
</script>

<style lang="scss" type="text/css">
	$ymred:#952a1d;
	#handCard{
		width: 1.5rem;
		height: 2.09rem;
		border-radius: .2rem;
		float: left;
		background-size: cover;
		position: relative;

		margin: .6rem .04rem 0 .04rem;
	}
	.hand-enter-active,
	.hand-leave-active {
		transition: all .5s;
	}
	.hand-enter,
	.hand-leave-to
	{
		transform: translateY(-10.8rem);
	}
</style>
