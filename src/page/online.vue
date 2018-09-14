<template>
    <transition name='fade'>
        <div id='online'>
            <div class="bt"></div>
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
        name: 'online',
        data() {
            return {
                onlinePlayer: [],
                alert: {
                    search: {
                        icon: 'loading',
                        text: '正在寻找对局...',
                        type: 'match',
                    },
                    err: {
                        icon: 'error',
                        text: '错误 网络未连接',
                        type: 'error',
                    },
                    succ: {
                        icon: 'ok',
                        text: '匹配成功',
                        type: 'ok',
                    },
                },
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
            avatar() {
                return this.$storage.get('avatar');
            },
        },
        sockets: {
            matchSucc(oppo) {
                console.log('匹配成功! 你的对手是：' + oppo.nickname);
                this.$alert.show(this.alert.succ).then(() => {
                    // this.registerPlayers(oppo);
                    this.$router.replace({
                        name: 'game',
                        params: {
                            players: {
                                self: {
                                    id: this.id,
                                    nickname: this.nickname,
                                    avatar: this.avatar,
                                },
                                oppo: {
                                    id: oppo.id,
                                    nickname: oppo.nickname,
                                    avatar: oppo.avatar,
                                }
                            }
                        }
                    });
                    return;
                });
            },
        },
        methods: {
            check() {
                //检测连接
                if (!this.connect) {
                    this.$alert.show(this.alert.err).then(() => {
                        this.$router.back();
                        return;
                    });
                }
                else this.start();
            },
            start() {
                console.log(this.id);
                console.log(this.nickname);
                this.match();
            },
            match() {
                this.$alert.show(this.alert.search, 'infinite');
                this.$socket.emit('match', {
                    "id": this.id,
                    "nickname": this.nickname,
                    "avatar": this.avatar,
                });
                //开始计时
                this.timing();
            },
            timing() {
                //5分钟后如果搜索不到则取消
                window.timing=setTimeout(() => {
                    this.$alert.show('error', '等待时间过长')
                        .then(() => {
                            this.$router.back();
                        })
                }, 300000);
            },
            leave() {
                this.$alert.hide();
                clearTimeout(window.timing);
                this.$socket.emit('leave', {
                    "id": this.id,
                    "nickname": this.nickname,
                    "avatar": this.avatar,
                });
            },
        }
    }
</script>

<style lang="scss" scoped>
    #online {
        width: 100%;
        height: 100%;

        .bt{
            width: 8rem;
            height: 4.55rem;
            margin: 1.4rem auto 0 auto;
            background-image: url('./../assets/img/bg/online.png');
            background-size: cover;
        }
    }
</style>
