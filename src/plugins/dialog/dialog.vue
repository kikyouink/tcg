<template>
	<transition name='dialog'>
		<div id="mask" v-if="show">
			<div id="dialog">
				<div class="dialog-title">
					<h4>{{info.title}}</h4>
				</div>
				<div class="dialog-msg">{{info.msg}}</div>
				<button type="button" v-if="info.buttons" v-for="item in info.buttons" :key="item.id" :class="item.class" @click="item.callback()"></button>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'dialog',
		data() {
			return {
				show: true,
				info: {
					title: '程序员小哥哥',
					msg: '相信你已经体验过<<阵面对决>>一段时间了,感觉如何呢？请尽情发表意见吧!',
					buttons: [{
						class: 'sm iconfont icon-ok lb',
						callback: () => {
							this.yes()
						}
					}, {
						class: 'sm iconfont icon-error rb',
						callback: () => {
							this.show = false;
						}
					}],
				}
			}
		},
		mounted() {
			//这里需要使用箭头函数，否则this错误
		},
		methods: {
			init() {
				console.log('新的对话框');
			},
			yes() {
				console.log('ok');
				this.show = false;
			},
		},
	}
</script>

<style lang="scss" type="text/css" scoped>
	$ymred: #952a1d;
	#mask {
	    position: absolute;
	    width: 100%;
	    height: 100%;
	    top: 0;
	    background: rgba(0, 0, 0, 0.5);
	    z-index: 100;

	    #dialog {
	        position: absolute;
	        top: calc(50% - 2rem);
	        left: calc(50% - 3rem);
	        padding: 0.1rem;
	        width: 6rem;
	        height: 4rem;
	        background: rgba(0, 0, 0, 0.5);
	        color: white;
	        text-shadow: 0.03rem 0.03rem 0.05rem black;
	        font-size: 0.2rem;
	        overflow: visible;
	        font-family: "microsoft yahei";

	        .dialog-title {
	            font-family: "microsoft yahei";
	        }
	        .dialog-msg {
	            height: 100%;
	        }
	        button {
	            background: $ymred;
	        }
	    }
	}
	.dialog-enter-active,
	.dialog-leave-active {
	    transition: all 0.5s;
	}
	.dialog-enter,
	.dialog-leave-to {
	    transform: translateY(-10.8rem);
	}
</style>
