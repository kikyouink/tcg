<template>
    <div id="single">
        <div class="enemy area">
            <div class="enemy bl">
            </div>
            <v-player></v-player>
        </div>
        <div class="player area">
            <v-player></v-player>
            <!-- 卡牌预览区 -->
            <v-previewCard v-show="show"></v-previewCard>
            <div class="player bl">
                <!-- 手牌区 -->
                <v-handCard v-for="card in cards" :key="card.id" :cardInfo="card"></v-handCard>
            </div>
        </div>
    </div>
</template>

<script>
    import player from '@/components/player.vue';
    import handCard from '@/components/card/hand.vue';
    import previewCard from '@/components/card/preview.vue';

    export default {
        name: 'single',
        components: {
            "v-player":player,
            "v-handCard":handCard,
            "v-previewCard":previewCard,
        },
        data() {
            return {
                show:false,
                cards:[
                    {
						id:'024',
						cost:1,
						damage:3,
                        hp:6,
                        skill:['chongfeng'],
                    },
                    {
						id:'156',
						cost:1,
						damage:3,
                        hp:6,
                        skill:['chongfeng'],
                    },
                    {
						id:'056',
						cost:1,
						damage:3,
						hp:6,
                    },
                    {
						id:'077',
						cost:1,
						damage:3,
						hp:6,
                    },
                    {
						id:'023',
						cost:1,
						damage:3,
						hp:6,
                    },
                    {
						id:'132',
						cost:1,
						damage:3,
						hp:6,
                    },
                    {
						id:'050',
						cost:1,
						damage:3,
						hp:6,
                    },
                    {
						id:'099',
						cost:1,
						damage:3,
						hp:6,
                    }
                ]
            }
        },
        mounted(){
            this.init();
        },
        computed: {
            ...mapState({
                show:'previewCard',
            })
        },
        methods: {
            init(){

            },
        }
    }
</script>

<style lang="scss" scoped>
    #single{
        width: 100%;
        height: 100%;

        .area{
            width: 100%;
            height: 50%;
            position: relative;
            
            .bl{
                width: 100%;
                height: 50%;
                background: rgba(0,0,0,.5);
                position: absolute;

                &.enemy{
                    top:0,
                }
                &.player{
                    bottom:0,
                }
            }
        }
    }

</style>
