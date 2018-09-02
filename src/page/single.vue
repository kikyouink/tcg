<template>
    <div id="battleGround">
        <v-player :side="enemy" :info="enemyInfo"></v-player>
        <v-battle-field></v-battle-field>
        <v-player :side="self" :info="selfInfo"></v-player>
    </div>
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
                    name: '灵雎',
                    hp: 30,
                    maxHp: 30,
                    maxHandCard: 7,
                    avatarUrl:'url(../../static/img/player/enemy.png)'
                },
                selfInfo:{
                    name: '夏侯氏',
                    hp: 30,
                    maxHp: 30,
                    maxHandCard: 7,
                    avatarUrl:'url(../../static/img/player/self.png)'
                }
            }
        },
        mounted() {
            this.init();
        },
        computed: {
            ...mapState([
                'preview',
            ])
        },
        methods: {
            init() {
                console.log(this.preview);
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
