<template>
	<transition name='fade' @after-leave="afterLeave">
		<div id="gallery" v-if="show">
			<div class="pic" v-for="item in mode" :key="item.id" :style="{backgroundImage:'url('+item.img+')'}"    @click="start(item)">
				<div class="banner">
					{{item.title}}
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'gallery',
		data() {
			return {
				show: true,
				statusMode:null,
				mode: {
					single: {
						title: 'AI对战',
						img: '../../static/img/start/single.png',
						url:'single',
					},
					online: {
						title: '联机对战',
						img: '../../static/img/start/online.png',
						url:'online',
					},
					design: {
						title: '构筑卡牌',
						img: '../../static/img/start/design.png',
						url:'design'
					},
				}
			}
		},
		mounted() {
			//这里需要使用箭头函数，否则this错误
		},
		methods: {
			init() {
				// this.start()
			},
			afterLeave(el) {
				if(this.statusMode){
					this.$router.push(this.statusMode.url);
					console.log('你开始了' + this.statusMode.title);
				}
			},
			start(mode) {
				this.show = false;
				this.statusMode=mode;
				
			},
		},

	}
</script>

<style lang="scss" type="text/css" scoped>
	$ymred:#952a1d;
	#gallery {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 60%;
		height: 100%;
		margin: 0 auto;

		.pic {
			position: relative;
			width: 2.2rem;
			height: 5.5rem;
			border-radius: .2rem;
			box-shadow: 0 0 .2rem black;
			text-align: center;
			background: url(../../static/img/start/single.png) no-repeat;
			background-size: cover;
			background-position: center center;
			transition: .5s all;

			&:hover {
				box-shadow: 0 0 .1rem .05rem $ymred;
				filter:brightness(1.2);
				// height: 5.7rem;
			}
			
			.banner {
				position: absolute;
				width: 100%;
				height: .5rem;
				bottom: 1rem;
				background: $ymred; // background:linear-gradient(to right, $ymred , blue);
				box-shadow: 0 0 .1rem black;
				color: white;
				text-shadow: .03rem .03rem .05rem black;
				line-height: .5rem;
				font-size: .4rem; // border-radius: .1rem;
			}
		}
	}
	
</style>
