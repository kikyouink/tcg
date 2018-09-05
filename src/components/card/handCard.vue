<template>
	<transition :name='animation'>
		<div class="handCard" :style="{backgroundImage:cardUrl}" @mouseover="setPreviewCard(cardInfo)" @mouseout="hidePreviewCard()">
		</div>
	</transition>
	
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex';
	// import bus from '@/components/bus';

	export default {
		name: 'handCard',
		props:{
			cardInfo:Object,
		},
		data() {
			return {
				animation:'slide',
				cardUrl:'url(http://tcg.sanguosha.com/upload/cards/01/01'+this.cardInfo.id+'.jpg)',
			}
		},
		mounted() {
			this.init();
		},
		computed: {
			// ...mapState({
				
			// })
		},
		methods: {
			...mapMutations('player/handCard',[
				'setPreviewCard','hidePreviewCard'
			]),
			init() {
				
			},
		},

	}
</script>

<style lang="scss" type="text/css" scoped>
	$ymred:#952a1d;
	.handCard{
		width: 1.5rem;
		height: 2.09rem;
		border-radius: .2rem;
		float: left;
		background-size: cover;
		position: relative;
		margin: 0 .04rem 0 .04rem;
		cursor: pointer;

	}
</style>
