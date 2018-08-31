<template>
	<transition name='dialog'>
		<div id="mask" v-if="show">
			<div id="dialog">
				<div class="dialog-title">{{info.title}}</div>
				<div class="dialog-msg">{{info.msg}}</div>
				<div class="dialog-buttons" v-if="info.buttons">
					<button type="button" v-for="item in info.buttons" @click="item.callback">{{item.text}}</button>
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
				info:{
					title:'程序员小哥哥',
					msg:'相信你已经体验过<<阵面对决>>一段时间了,感觉如何呢？请尽情发表意见吧!',
					buttons:[{
						text:'✔',
						callback:this.yes();
					},{
						text:'✘',
						callback:this.show=false;
					}],
				}
			}
		},
		mounted() {
			//这里需要使用箭头函数，否则this错误
		},
		methods: {
			init() {

			},
			yes(){
				console.log('ok');
			},
		},
	}
</script>

<style lang="scss" type="text/css" scoped>
	$ymred:#952a1d;
	#mask{
		position: absolute;
		height: 100%;
		background: rgba(0,0,0.5);
		
		#dialog{
			position: absolute;
			top:calc(50% - 1rem);
			padding: .1rem;
			width:3rem;
			height: 2rem;
			background: linear-gradient(45deg, $ymred, #333);
			box-shadow: 0 0 .1rem black;
			color: white;
			text-shadow: .03rem .03rem .05rem black;
			font-size: .2rem;
			
			.dialog-title{
				position: absolute;
				top:-.1rem;
				height: .2rem;
				width: .5rem;
			}
			.dialog-msg{
				height: 100%;
			}
			
			
		}
	}
	.dialog-enter-active,
	.dialog-leave-active {
		transition: all .5s;
	}
	.dialog-enter,
	.dialog-leave-to
	{
		transform: translateY(-1.5rem);
	}
	
</style>
