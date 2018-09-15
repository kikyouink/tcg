<template>
    <transition name='fade'>
        <div id='design' v-cloak>
            <div class="left">
                <div class="prev" @click="prev()">☵</div>
                <transition-group name="left" class="cl" mode='in-out' tag="div">
                    <div class="card" v-for="card in cardStatus" :key="card.id" :style="{backgroundImage:'url('+require('../assets/img/card/' + card.id + '.jpg')+')'}" @click="push(card)"></div>
                </transition-group>
                <div class="next" @click="next()">☲</div>
            </div>
            <transition-group name="right" class="right" mode='in-out' tag="div" ref="board">
                <div class="cardMini" v-for="card in card.selected" :key="card.name" @click="remove(card)">
                    {{card.name}}
                </div>
            </transition-group>
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
                    selected: [],
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
                var clone = JSON.parse(JSON.stringify(this.card)).all.slice(start, end);
                return clone;
            },
            bgUrl() {
                if (!this.previewCard) return '';
                else return 'url(' + require('../assets/img/card/' + this.previewCard.id + '.jpg') + ')';
            },
        },
        methods: {
            init() {
                this.getJson();
            },
            getJson() {
                var url = '/static/card/card.min.json';
                this.axios.get(url).then((res) => {
                    console.log(res);
                    this.$set(this.card, 'all', res.data);
                }).catch((e) => {
                    console.log(e);
                })
            },
            next() {
                this.index++;
            },
            prev() {
                this.index--;
            },
            push(card) {
                this.card.selected.push(JSON.parse(JSON.stringify(card)));
                var scrollDom = document.querySelector('.right');
                scrollDom.scrollTop = scrollDom.scrollHeight;
            },
            remove(card) {

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
        background-size: 100% 100%;

        .left {
            position: relative;
            overflow: visible;
            @include rect(11rem, 8rem);

            .prev,
            .next {
                position: absolute;
                top: calc(50% - 0.5rem);
                @include round(1rem);
                // transition: background 0.5s;
            }
            .prev:hover,
            .next:hover {
                background: $hover;
            }
            .prev {
                left: -0.7rem;
            }
            .next {
                right: -0.7rem;
            }
            .cl {
                height: 100%;
                @include flex;

                .card {
                    width: 2.3rem;
                    height: 3.2rem;
                    background-size: cover;
                    margin: 0.1rem 0.2rem;
                    border-radius: 0.1rem;
                    box-shadow: 0 0 0.5rem black;
                    cursor: pointer;
                }
            }
        }
        .right {
            @include rect(4rem, 8rem);
            overflow: auto;
            transition: all 0.5s;
            .cardMini{
                height: .7rem;
                line-height: .7rem;
                border-top: .02rem solid $border;
                border-bottom: .02rem solid $border;
                margin: .01rem auto;
                box-shadow: 0 0 .2rem black inset;
            }
        }
        .left,
        .right {
            border-radius: 0.3rem;
            background-size: 100% 100%;
            font-size: 0.4rem;
        }
    }
</style>
