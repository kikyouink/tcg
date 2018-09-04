<template>
    <div id="warp">
        <i class="lg iconfont icon-smile" @click="smile()"></i>
        <i class="lg iconfont icon-back" @click="back()"></i>
        <router-view></router-view>
        <!-- <v-dialog></v-dialog> -->
    </div>
</template>

<script>
    import dialog from '@/components/dialog.vue';

    export default {
        name: 'App',
        components: {
            "v-dialog": dialog,
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
                //禁止右键
                document.oncontextmenu = function(){
                    return false;
                }
            },
            back() {
                this.$router.back();
            },
            smile(){
				this.$router.push('user');
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

<style lang="scss">
    //阿里图标
    @import url("http://at.alicdn.com/t/font_818705_8vroqffmxah.css");
    @import "../static/scss/animation.scss";
    @import "../static/scss/ui.scss";

    /*---------------主容器------------------*/
    #warp {
        height: 100%;
        background: url(../static/img/bg/chengdu.png) no-repeat center bottom;
        background-size: cover;
    }

</style>
