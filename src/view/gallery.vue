<template>
	<transition name='fade'>
		<div id="gallery">
			<div class="pic" v-for="item in mode" :key="item.id" :style="{backgroundImage:'url(./img/start/' + item.img + '.png)'}" @click="start(item)">
				<div class="banner">
					{{item.title}}
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex';
	export default {
		name: 'gallery',
		data() {
			return {
				mode: {
					game: {
						title: 'AI对战',
						img: 'game',
						url: 'game',
					},
					online: {
						title: '联机对战',
						img: 'online',
						url: 'online',
					},
					design: {
						title: '构筑卡牌',
						img: 'design',
						url: 'design'
					},
				}
			}
		},
		mounted() {
			
		},
		computed: {
			
		},
		methods: {
			...mapMutations('game',[
				'setMode'
			]),
			//检测是否已经有昵称
			check(mode){
				console.log(mode);
				if(mode.url=='game'){
					this.$alert.show('cry', '暂未开放~');
				}
				else if(mode.url=='online'&&!this.$storage.get('cardPile')){
					this.$alert.show('cry', '请先构筑套牌~');
				}
				else return true;
				return false;
			},
			start(mode) {
				if(this.check(mode)){
					this.$router.push(mode.url);
					console.log('你开始了' + mode.title);
					this.setMode(mode.title);
				}
			},
		},

	}
</script>

<style lang="scss" type="text/css" scoped>
	#gallery {
	   @include flex;
	    width: 60%;
	    height: 100%;
	    margin: 0 auto;

	    .pic {
	        position: relative;
	        width: 2.2rem;
			height: 5.5rem;
			border:.08rem solid $border1;
	        border-radius: 0.2rem;
	        box-shadow: 0 0 .2rem black;
	        text-align: center;
	        background-size: cover;
	        background-position: center center;
	        transition: 0.5s all;

	        &:hover {
	            box-shadow: 0 0 .4rem black;
	            filter: brightness(1.2);
	            // height: 5.7rem;
	        }

	        .banner {
	            position: absolute;
	            width: 100%;
	            height: 0.5rem;
	            bottom: 1rem;
				background: $bg;
				// border-radius: .05rem;
	            box-shadow: 0 0 0.1rem black;
	            color: $color;
	            // text-shadow: 0.03rem 0.03rem 0.05rem black;
	            line-height: 0.5rem;
				font-size: 0.4rem; 
	        }
	    }
	}
</style>
