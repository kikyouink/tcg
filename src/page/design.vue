<template>
    <transition name='fade'>
        <div id='design' v-cloak>
            <div class="left">
                <div class="prev" @click="prev()">‹</div>
                <transition-group name="left" class="cl" mode='in-out' tag="div">
                    <div class="card" v-for="card in cardStatus" :key="card.id" 
                    :style="{backgroundImage:'url('+require('../assets/img/card/' + card.id + '.jpg')+')'}"
                    ></div>
                </transition-group>
                <div class="next" @click="next()">›</div>
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
        display: flex;
        justify-content: space-around;
        align-items: center;
        // background-image: url('../assets/img/bg/yangpi1.png');
        background-image: url('../assets/img/bg/1.jpg');
        background-size:100% 100%;

        .left {
            position: relative;
            width: 13rem;
            height: 8rem;
            overflow: visible;
            background: url('../assets/img/bg/dialog.png');
            // background-position: center center;
            // box-shadow: 0 0 0.5rem black inset;

            .prev,.next{
                position: absolute;
                width: 1rem;
                height: 1rem;
                top:calc(50% - .5rem);
                background: #a85339;
                border:.08rem solid white;
                box-shadow: 0 0 .3rem black;
                border-radius: 50%;
                line-height: 1rem;
                text-align: center;
                transition: all 0.5s;
            }
            .prev:hover,.next:hover{
                background: #820606;
            }
            .prev{
                left: -.5rem;
            }
            .next{
                right: -.5rem;
            }
            .cl{
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                align-content: center;
                flex-wrap: wrap;

                .card {
                    // position: absolute;
                    width: 2.3rem;
                    height: 3.20rem;
                    background-size: cover;
                    margin: .15rem .2rem;
                    border-radius: .1rem;
                    box-shadow: 0 0 .3rem black;
                }
            }
        }
        .right {
            width: 4rem;
            height: 8rem;
            // background: url('../assets/img/bg/alert.png');
            // background-size: 100% 100%;
            background: rgba(0, 0, 0, 0.5);
            border:.03rem solid #544141;
            // background: #f4dc60;
            box-shadow: 0 0 0.5rem black inset;
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
