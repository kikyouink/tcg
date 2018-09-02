<template>
    <div id="battleGround">
        <v-player :side="enemy" :info="playerInfo"></v-player>
        <v-battle-field></v-battle-field>
        <v-player :side="self" :info="playerInfo"></v-player>
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
                playerInfo:{
                    name: '甄姬',
                    hp: 30,
                    maxHp: 30,
                    maxHandCard: 7,
                    avatarUrl:'url(../../static/img/player/player.png)'
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
