<template>
	<transition name='preview'>
		<div id="previewCard" :style="{backgroundImage:imgSrc}">
			<div class="cost lt">{{ss.cost}}</div>
			<div class="damage lb">{{ss.damage}}</div>
			<div class="hp rb">{{ss.hp}}</div>
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
				console.log(this.ss.id);
				return 'url(../../static/img/card/01'+this.ss.id+'.jpg)';
				// return 'url(../../static/img/card/010'+'99'+'.jpg)'; 
			},
			...mapState({
				
			})
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

<style lang="scss" type="text/css">
	$ymred:#952a1d;
	#card{
		width: 2rem;
		height: 2.8rem;
		border-radius: .2rem;
		left: calc(50% - 1rem);
		top:4rem;
		background-size: cover;
		position: absolute;

		.cost{
			background: purple;
		}
		.damage{
			background: green;
		}
		hp{
			background: $ymred;
		}
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
