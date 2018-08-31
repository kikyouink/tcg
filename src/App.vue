<template>
    <div id="warp">
        <div id="container">
            <v-gallery></v-gallery>
        </div>
    </div>
</template>

<script>
    import gallery from '@/components/tools/gallery.vue';

    export default {
        name: 'App',
        components: {
            "v-gallery": gallery,
        },
        data() {
            return {
                version:'0.1-alpha',
                author:'SAI',
                date:'2018-08-31',
                location:'Nan Jing',
            }
        },
        mounted(){
			console.clear();
			this.init();
        },
        methods: {
			init(){
				console.log(gallery);
				console.log('新一轮的阵面对决开始了');
			},
            restart(){
                console.log('See you again!');
                location.reload();
            },
            exit(){
                console.log('See you again!')
            }
        },
    }
</script>

<style lang="scss" type="text/css">
    //阿里图标
    @import url('http://at.alicdn.com/t/font_586765_srq6hpjhrmn.css');
    
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
    } //图标
    .iconfont {
        opacity: 0.6;
        transition: opacity 0.2s;
        vertical-align: middle;
        &.lg {
            font-size: 0.8rem;
        }
        &.sm {
            font-size: 0.6rem;
        }
        &.lg:hover,
        &.sm:hover {
            opacity: 1;
        }
        &.margin {
            margin: 0 .3rem;
        }
    }
    /*---------------主容器------------------*/

    #warp {
        height: 100%;
		background: url(../static/img/chengdu.jpg) no-repeat center bottom;
		background-size: cover;
		// background-position: center center;
		
        #container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100%; // transition: all 1s;
            width:60%;
            margin: 0 auto;
        }
    }
</style>
