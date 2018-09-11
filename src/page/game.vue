<template>
    <transition name='fade'>
        <div id="battleGround">
            <v-player :side="'oppo'" :playerInfo="oppo" ref="oppo"></v-player>
            <!-- <v-battle-field></v-battle-field> -->
            <v-player :side="'self'" :playerInfo="self" ref="self"></v-player>
        </div>
    </transition>

</template>

<script>
    import {
        mapState,
        mapMutations,
        mapActions
    } from 'vuex';
    import player from '@/components/player.vue';

    export default {
        name: 'game',
        components: {
            "v-player": player,
        },
        data() {
            return {

            }
        },
        created() {
            this.init();
        },
        mounted() {
            this.start();
        },
        computed: {
            //直接从vuex中读取对手和自己的信息
            ...mapState('game', [
                'self', 'oppo'
            ])
        },
        sockets: {
            echo(event) {
                console.log('revive');
                console.log(event);
                var player = (event.targetId == this.self.id) ? this.$refs.self : this.$refs.oppo;
                player[event.type](event.num);
            }
        },
        methods: {
            ...mapMutations('game', [
                'setSelf', 'setOppo'
            ]),
            init() {
                console.log('游戏开始');
                this.registerPlayers(this.$route.params.players);
            },
            start() {
                this.gameDraw();
            },
            registerPlayers(players) {
                this.setSelf(players.self);
                this.setOppo(players.oppo);
            },
            //游戏开始各摸4张牌
            gameDraw() {
                this.commit({
                    targetId: this.self.id,
                    type: 'draw',
                    num: 4,
                })
                // this.$refs.oppo.draw(4);
                // this.$refs.self.draw(4);
                // this.commit.call(this.$refs.oppo.draw(4))
            },
            commit(event) {
                this.$socket.emit('gameEvent', event)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #battleGround {
        width: 100%;
        height: 100%;
    }
</style>
