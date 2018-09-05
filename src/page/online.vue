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
    import alert from '@/components/tools/alert.vue';
    import storage from '@/components/storage.js';
    export default {
        name: 'found',
        data() {
            return {
                onlinePlayer: [],
                alert: {
                    icon: 'loading',
                    text: '正在搜索中',
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
                return storage.get('nickname');
            },
            list() {
                return [];
            }
        },
        sockets:{
            matchSucc: function(player){
                console.log('匹配成功! 你的对手是：'+player.nickname);
                this.showAlert(this.alertSucc);
                setTimeout(()=>{
                        this.$router.replace('single');
                        return ;
                },2000);
            },
        },
        methods: {
            ...mapMutations('ui', [
                'showAlert','hideAlert'
            ]),
            check() {
                console.log(this.connect);
                if (!this.connect){
                    this.showAlert(this.alertErr);
                    setTimeout(()=>{
                        this.$router.back();
                        return ;
                    },2000);
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
                this.showAlert(this.alert);
                this.$socket.emit('match', {
                    "id": this.id,
                    "nickname": this.nickname,
                });

            },
            leave(){
                this.hideAlert();
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
