<template>
	<transition name='handCard'>
		<div id="card" :style="{backgroundImage:imgSrc}" @mouseover="showPreviewCard(cardInfo)" @mouseout="showPreviewCard(null)">
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
				return 'url(../../static/img/card/01'+this.cardInfo.id+'.jpg)';
			},
			...mapState({
				
			})
		},
		methods: {
			...mapMutations([
				'showPreviewCard',
			]),
			init() {
				for(var i in this.cardInfo){
					this[i]=this.cardInfo[i];
				}
				console.log(this.cost);
			}
		},

	}
</script>

<style lang="scss" type="text/css">
	$ymred:#952a1d;
	#card{
		width: 1.5rem;
		height: 2.09rem;
		border-radius: .2rem;
		float: left;
		background-size: cover;
		position: relative;

		margin: .6rem .04rem 0 .04rem;
	}
	.card-enter-active,
	.card-leave-active {
		transition: all .5s;
	}
	.card-enter,
	.card-leave-to
	{
		transform: translateY(-10.8rem);
	}
</style>
