<template>
	<div id="gallery" v-if="show" >
		<div class="pic" v-for="item in mode" @click="start(item.title)">
			<div class="banner">
				{{item.title}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'gallery',
		components: {},
		data() {
			return {
				show:true,
				mode: {
					single: {
						title: 'AI对战',
						img: 'static/img/start/single.png',
					},
					online: {
						title: '联机对战',
						img: 'static/img/start/online.png',
					},
					design: {
						title: '构筑卡牌',
						img: 'static/img/start/design.png',
					},
				}
			}
		},
		mounted() {
			//这里需要使用箭头函数，否则this错误
		},
		methods: {
			init() {

			},
			start(mode){
				this.show=false;
				console.log('你开始了'+mode);
			}
		},

	}
</script>

<style lang="scss" type="text/css">
	#gallery {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100%;

		.pic {
			position: relative;
			width: 2.2rem;
			height: 5.5rem;
			border-radius: .2rem;
			box-shadow: 0 0 .2rem black;
			text-align: center;
			background: url(../../../static/img/start/single.png) no-repeat;
			background-size: cover;
			background-position: center center;

			.banner {
				position: absolute;
				width: 100%;
				height: .5rem;
				bottom: 1rem;
				background: #952a1d; // background:linear-gradient(to right, #952a1d , blue);
				box-shadow: 0 0 .1rem black;
				color: white;
				text-shadow: .03rem .03rem .05rem black;
				line-height: .5rem;
				font-size: .4rem; // border-radius: .1rem;
			}
		}
	}
</style>
