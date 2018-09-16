<template>
    <transition name='fade'>
        <div id='design' v-cloak>
            <div class="left">
                <div class="prev" @click="prev()">☵</div>
                <transition-group name="left" class="cl" mode='in-out' tag="div">
                    <div class="card" v-for="card in cardStatus" :key="card.id" :style="{backgroundImage:'url(./img/card/' + card.id + '.jpg)'}" @click="push(card)"></div>
                </transition-group>
                <div class="next" @click="next()">☲</div>
            </div>
            <transition-group name="right" class="right" mode='in-out' tag="ul" ref="board">
                <li class="cardMini" v-for="(card,index) in card.selected" :key="card.id" @click="remove(card,index)" ref="mini">
                   {{card.data.split('-')[0]}} {{card.name}}
                   <span class="dh" v-if="card.data.split('-')[1]!=0">{{card.data.split('-')[1]}}/{{card.data.split('-')[2]}}</span>
                </li>
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
        beforeDestroy() {
            console.log('即将离开');
            this.leave();
        },
        components: {

        },
        computed: {
            miniindex(){
                return this.card.selected.length-1;
            },
            cardStatus() {
                var start = this.index * 8;
                var end = start + 8;
                var clone = JSON.parse(JSON.stringify(this.card)).all.slice(start, end);
                return clone;
            },
            bgUrl() {
                if (!this.previewCard) return '';
                else return 'url(./img/card/' + this.previewCard.id + '.jpg)';
            },
        },
        methods: {
            init() {
                this.getJson();
                this.loadCardPile();
            },
            getJson() {
                var url = './config/card.min.json';
                this.axios.get(url).then((res) => {
                    this.$set(this.card, 'all', res.data);
                    this.sort(this.card.all);
                }).catch((e) => {
                    console.log(e);
                })
            },
            loadCardPile(){
                this.card.selected=this.$storage.get('cardPile')||[];
            },
            next() {
                this.index++;
            },
            prev() {
                this.index--;
            },
            push(card) {
                if(this.card.selected&&this.card.selected.length>=50) {
                    this.$alert.show('prompt','套牌已满50张牌');
                    return ;
                }
                var c=JSON.parse(JSON.stringify(card));
                this.card.selected.push(c);
                this.sort(this.card.selected);
                // this.$nextTick(function(){
                //     this.$refs.mini[this.miniindex].scrollIntoView({
                //         behavior: 'smooth'
                //     })
                // })
                
            },
            sort(list){
                list.sort(function(a,b){
                    var costa=a.data.split('-')[0];
                    var costb=b.data.split('-')[0];
                    return costa-costb;
                })
            },
            remove(card,index) {
                this.card.selected.splice(index,1);
            },

            leave(){
                var s=this.card.selected;
                if(s.length<50) this.$alert.show('prompt','你的套牌需要50张牌');
                if(s.length) this.$storage.set('cardPile',s);
                else this.$storage.remove('cardPile');
            }
        }
    }
</script>

<style lang="scss" scoped>
    #design {
        width: 100%;
        height: 100%;
        @include flex;
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

                    &:hover{
                        box-shadow: 0 0 0.1rem .07rem $ymred;
                        filter:brightness(1.2);
                    }
                }
            }
        }
        .right {
            @include rect(4rem, 8rem);
            padding: .1rem 0 .1rem 0;
            overflow: auto;
            .cardMini{
                width: 87%;
                height: .6rem;
                line-height: .6rem;
                border-radius: .1rem;
                // border-top: .02rem solid $border;
                // border-bottom: .02rem solid $border;
                border:.02rem solid $border;
                margin: .05rem auto;
                padding: 0 .15rem 0 .15rem;
                // box-shadow: 0 0 .2rem black inset;
                font-size: .3rem;

                .dh{
                    // display: block;
                    float: right;
                }
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
