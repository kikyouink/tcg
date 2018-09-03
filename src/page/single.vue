<template>
    <transition name='fade'>
        <div id="battleGround">
            <v-player :side="'enemy'" :playerInfo="JSON.parse(JSON.stringify(enemyInfo))" ref="enemy"></v-player>
            <!-- <v-battle-field></v-battle-field> -->
            <v-player :side="'self'" :playerInfo="JSON.parse(JSON.stringify(selfInfo))" ref="self"></v-player>
        </div>
    </transition>
    
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import player from '@/components/player.vue';

    export default {
        name: 'single',
        components: {
            "v-player": player,
        },
        data() {
            return {
                enemyInfo:{
                    name: 'lingju',
                    hp: 30,
                    maxHp: 30,
                    maxHandCard: 7,
                },
                selfInfo:{
                    name: 'xiahoushi',
                    hp: 30,
                    maxHp: 30,
                    maxHandCard: 7,
                }
            }
        },
        mounted() {
            this.start();
        },
        computed: {
            // ...mapState('',[
            //     'preview',
            // ])
        },
        methods: {
            ...mapMutations('game',[
				'initPlayers','gameDraw'
			]),
            start(){
                console.log('游戏开始');
                //定义玩家
                this.initPlayers({
                    enemy:this.$refs.enemy,
                    self:this.$refs.self,
                });
                // 游戏开始摸牌
                this.gameDraw();
            },
           
        }
    }
</script>

<style lang="scss" scoped>
    #battleGround {
        width: 100%;
        height: 100%;

        
    }
</style>
