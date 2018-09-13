<template>
    <transition name='fade'>
        <div id='design'>

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
        name: 'design',
        data() {
            return {

            }
        },
        mounted() {
            this.check();
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
    #design {
        width: 100%;
        height: 100%;
    }
</style>
