<template>
	<div id="warp">
		<button type="button" class="lg iconfont icon-back" @click="back()"></button>
		<router-view></router-view>
		<v-dialog></v-dialog>
		<!-- <v-gallery></v-gallery> -->
	</div>
</template>

<script>
	import dialog from '@/components/area/dialog.vue';
	
	export default {
		name: 'App',
		components: {
			"v-dialog":dialog,
		},
		data() {
			return {
				version: '0.1-alpha',
				author: 'SAI',
				date: '2018-08-31',
				location: 'Nan Jing',
			}
		},
		mounted() {
			console.clear();
			this.init();
		},
		methods: {
			init() {
				console.log('新一轮的阵面对决开始了');
			},
			back(){
				this.$router.back();
			},
			restart() {
				console.log('See you again!');
				location.reload();
			},
			exit() {
				console.log('See you again!')
			}
		},
	}
</script>

<style lang="scss" type="text/css">
	//阿里图标
	@import url('http://at.alicdn.com/t/font_586765_g8nfmtzu3mu.css');

	* {
		overflow: hidden;
		padding: 0;
	}

	html,
	body {
		margin: 0;
		height: 100%;
		font-family: KaiTi; //以1080P做设计稿，用其他的话太麻烦，还得换算
		font-size: calc(100vw/19.2);
	}

	 ::-webkit-scrollbar {
		display: none;
	}
	button {
		display: block;
		outline: none;
		border: none;
		background: none;
		color: white;
		font: 15px Microsoft Yahei;
		transition: all .5s;
		
		&:hover {
			// filter: brightness(0.8);
		}
		&[disabled] {
			background-color: rgba(255, 255, 255, 0.4);
		}
		&.icon-back{
			position: absolute;
			top: 1rem;
			right: 1rem;
		}
	} 
	//图标
	.iconfont {
		filter: brightness(0.7);
		// transition: filter 0.2s;
		vertical-align: middle;
		&.lg {
			font-size: 0.8rem;
		}
		&.sm {
			font-size: 0.6rem;
		}
		&.lg:hover,
		&.sm:hover {
			filter: brightness(1);
		}
		&.margin {
			margin: 0 .3rem;
		}
	}
	/*---------------主容器------------------*/

	#warp {
		position: relative;
		height: 100%;
		background: url(../static/img/chengdu.jpg) no-repeat center bottom;
		background-size: cover;
	}
</style>
