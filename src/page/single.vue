<template>
    <transition name='fade'>
        <div id="battleGround">
            <v-player :side="'enemy'" :playerInfo="enemyInfo"></v-player>
            <!-- <v-battle-field></v-battle-field> -->
            <v-player :side="'self'" :playerInfo="selfInfo"></v-player>
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
            this.init();
        },
        computed: {
            ...mapState([
                'preview',
            ])
        },
        methods: {
            init() {
                

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
