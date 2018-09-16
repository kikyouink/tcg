<template>
    <div id="warp">
        <i class="lg iconfont icon-user" @click="smile()"></i>
        <i class="lg iconfont icon-back" @click="back()"></i>
        <router-view></router-view>
        <!-- <v-dialog></v-dialog> -->
    </div>
</template>

<script>
    import {
        mapState,
        mapMutations,
        mapActions
    } from 'vuex';
    export default {
        name: 'App',
        components: {
        },
        data() {
            return {
                version: '0.3-alpha',
                author: 'SAI',
                date: '2018-08-31',
                location: 'Nan Jing',
            }
        },
        mounted() {
            // console.clear();
            window.game = this;
            this.init();
        },
        computed: {
            ...mapState('game',[
				'UA',
			]),
			nickname() {
				return this.$storage.get('nickname');
			},
        },
        methods: {
            ...mapMutations('game',[
				'setUA'
			]),
            init() {
                this._setUA();
                this.log();
                //禁止右键
                this.check();
                document.oncontextmenu = function () {
                    return false;
                }
            },
            _setUA(){
                var UA;
                if(/Android|iPhone|iPod/i.test(navigator.userAgent)){
                    UA='mobile'
                }
                else UA='pc'
                this.setUA(UA);
            },
            log() {
                console.log('版本:' + this.version);
                console.log('作者:' + this.author);
                console.log('日期:' + this.date + ' ' + this.location);
            },
            check() {
				if (this.nickname) return ;
				else {
					this.$router.replace('user');
					this.$alert.show('smile', '请先设定昵称 ~');
				}
			},
            back() {
                if(this.$router.currentRoute.name=='gallery'){
                    if(this.UA=='moblie'){
                        navigator.notification.confirm(
                            'You are the winner!', 
                            function(index){
                                if(index==1) this.exitApp();
                            },
                            'Game Over',    
                            ['取消','确定']
                        );
                    }
                    else this.$alert.show('glass','不能再返回了哦~');   
                }
                else this.$router.back();
            },
            smile() {
                this.$router.push('user');
            },
            restart() {
                console.log('See you again!');
                location.reload();
            },
            exit() {
                console.log('See you again!');
                navigator.app.exitApp();
            }
        },
    }
</script>

<style lang="scss">
    //阿里图标
    @import url("http://at.alicdn.com/t/font_818705_txtrjxpklmn.css");
    @import "../public/scss/animation.scss";
    @import "../public/scss/ui.scss";

    /*---------------主容器------------------*/
    #warp {
        height: 100%;
        background:$bg;
        background-size: cover;
    }
</style>
