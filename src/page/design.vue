<template>
    <transition name='fade'>
        <div id='design' v-cloak>
            <div class="left">
                <div class="prev" @click="prev()">☵</div>
                <transition-group name="left" class="cl" mode='in-out' tag="div">
                    <div class="card" v-for="card in cardStatus" :key="card.id" 
                    :style="{backgroundImage:'url('+require('../assets/img/card/' + card.id + '.jpg')+')'}"
                    ></div>
                </transition-group>
                <div class="next" @click="next()">☲</div>
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
                card: {
                    all: [],
                }
            }
        },
        created() {
            this.init();
        },
        components: {

        },
        computed: {
            cardStatus() {
                var start = this.index * 8;
                var end = start + 8;
                var clone = this.card.all.slice(start, end);
                console.log(clone);
                return clone;
            },
			bgUrl(){
				if(!this.previewCard) return '';
				else return 'url('+require('../assets/img/card/' + this.previewCard.id + '.jpg')+')';
			},
        },
        methods: {
            init() {
                this.getJson();
            },
            getJson() {
                var url = '/static/card/card.json';
                this.axios.get(url).then((res) => {
                    console.log(res);
                    this.$set(this.card, 'all', res.data);
                }).catch((e) => {
                    console.log(e);
                })
            },
            next(){
                this.index++;
            },
            prev(){
                this.index--;
            }
        }
    }
</script>

<style lang="scss" scoped>
    #design {
        width: 100%;
        height: 100%;
        @include flex;
        // background-image: url('../assets/img/bg/yangpi1.png');
        // background-image: url('../assets/img/bg/1.jpg');
        background-size:100% 100%;

        .left {
            position: relative;
            overflow: visible;
            @include rect(11rem,8rem);

            .prev,.next{
                position: absolute;
                top:calc(50% - .5rem);
                @include round(1rem);
                // transition: background 0.5s;
            }
            .prev:hover,.next:hover{
                background: $hover;
            }
            .prev{
                left: -.7rem;
            }
            .next{
                right: -.7rem;
            }
            .cl{
                height: 100%;
                @include flex;

                .card {
                    width: 2.3rem;
                    height: 3.20rem;
                    background-size: cover;
                    margin: .1rem .2rem;
                    border-radius: .1rem;
                    box-shadow: 0 0 .5rem black;
                }
            }
        }
        .right {
            @include rect(4rem,8rem);
        }
        .left,
        .right {
            border-radius: 0.3rem;
            background-size: 100% 100%;
            color: white;
            font-size: 0.4rem;
        }
    }
</style>
