<template>
    <transition name='fade'>
        <div id='online'>

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
        name: 'found',
        data() {
            return {
                onlinePlayer: [],
                alert: {
                    icon: 'loading',
                    text: '正在搜索中...',
                    type: 'match',
                },
                alertErr:{
                    icon: 'error',
                    text: '错误 网络未连接',
                    type: 'error',
                },
                alertSucc:{
                    icon: 'ok',
                    text: '匹配成功',
                    type: 'ok',
                }
            }
        },
        mounted() {
            this.check();
        },
        beforeDestroy() {
            console.log('即将离开');
            this.leave();
        },
        components: {

        },
        computed: {
            ...mapState('game', [
                'connect',
            ]),
            id() {
                return this.$socket.id;
            },
            nickname() {
                return this.$storage.get('nickname');
            },
            list() {
                return [];
            }
        },
        sockets:{
            matchSucc: function(player){
                console.log('匹配成功! 你的对手是：'+player.nickname);
                this.$alert.show(this.alertSucc).then(()=>{
                    this.$router.replace('game');
                    return ;
                });
            },
        },
        methods: {
            check() {
                console.log(this.connect);
                if (!this.connect){
                    this.$alert.show(this.alertErr).then(()=>{
                        this.$router.back();
                        return ;
                    });
                }
                else if (!this.nickname){
                    this.$router.replace('user');
                    return ;
                }
                else this.init();
            },
            init() {
                console.log(this.id);
                console.log(this.nickname);
                this.match();
            },
            match(){
                this.$alert.show(this.alert,'infinite');
                this.$socket.emit('match', {
                    "id": this.id,
                    "nickname": this.nickname,
                });
                this.timing();
            },
            timing(){
                //5分钟后如果搜索不到则取消
                setTimeout(()=>{
                    this.$alert.show('error','等待时间过长')
                    .then(()=>{
                        this.$router.back();
                    })
                },2000);
            },
            leave(){
                this.$alert.hide();
                if(!this.nickname) return;
                this.$socket.emit('leave', {
                    "id": this.id,
                    "nickname": this.nickname,
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    #online {
        width: 100%;
        height: 100%;
    }
</style>
