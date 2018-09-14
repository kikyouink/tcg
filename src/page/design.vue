<template>
    <transition name='fade'>
        <div id='design' v-cloak>
            <div class="left">
                <div v-for="card in cardStatus" :key="card.id" :style="{backgroundImage:'url('+require('../assets/img/card/' + card.id + '.jpg')+')'}"></div>
            </div>
            <div class="right">

            </div>
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
                index: 0,
                card:{
                    all:[],
                }
            }
        },
        created() {
            this.init();
        },
        components: {

        },
        computed: {
            ...mapState('game', [
                'connect',
            ]),
            cardStatus() {
                var start = this.index * 8;
                var end = start + 8;
                var clone = this.card.all.slice(start, end);
                console.log(clone);
                return clone;
            }
        },
        methods: {
            init(){
                this.getJson();
            },
            getJson(){
                var url = '/static/card/card.json';
                this.axios.get(url).then((res) => {
                    console.log(res);
                    this.$set(this.card,'all',res.data);
                }).catch((e) => {
                    console.log(e);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    #design {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .left {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 12rem;
            height: 8rem;
        }
        .right {
            width: 4rem;
            height: 8rem;
        }
        .left,
        .right {
            border: 0.02rem solid white;
            border-radius: 0.3rem;
            background: rgba(0, 0, 0, 0.8);
            box-shadow: 0 0 0.5rem black;
            color: white;
            font-size: 0.4rem;
        }
    }
</style>
