<template>
    <div id="player" @click="this.damage()">
        请鞭笞我吧
    </div>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'

    export default {
        name: 'player',
        data() {
            return {
                name: '甄姬',
                HP: 30,
                maxHp: 30,
                maxHandCard: 7,
            }
        },
        mounted() {
            this.init();
        },
        computed: {
            ...mapState({
                count: state => state.count,
            })
        },
        methods: {
            ...mapMutations([
                'damage', 'recover',
            ]),
            init() {
                console.log('一位新的勇士诞生了');
                this.damage({
                    source: this,
                    target: '王异',
                    num: 1
                });
            }
        },

    }
</script>

<style lang="scss" type="text/css">
    #player {
        width: 200px;
        height: 300px;
        border-radius: 10px;
        box-shadow: 1px 1px 10px 10px;
        text-align: center;
        line-height: 300px;
        font-size: 20px;
		background: ;
    }
</style>
