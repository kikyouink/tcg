<template>
</template>

<script>
    import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex';

    export default {
        name: 'cardPile',
        components: {
        },
        data() {
            return {
                resultCards:null,
                cardPile:this.cardPileStorage,
                cardPile:[
                    {
                        id: '157',
                        name: '颍川名士台',
                        type: 'land',
                        country: 'wei',
                        des:'{通常}将此领土翻面→抓一张牌。你只能于你操控四个或更多的其他魏势力领土时启动此能力。'
                    },{
                        id: '162',
                        name: '颍川名士台',
                        type: 'basic-land',
                        country: 'wei',
                        des:'{通常}{4}，将此领土翻面→抓一张牌。',
                    },{
                        id: '163',
                        name: '魏领土',
                        type: 'basic-land',
                        country: 'wei',
                        des:'{通常}{4}，将此领土翻面→抓一张牌。',
                    },{
                        id: '010',
                        name: '矜严明训·张昌蒲',
                        type: 'character-female',
                        country: 'wei',
                        data:'1-1-2',
                        des:'当张昌蒲进战场时，另一个目标单位-2武力直到张昌蒲离开阵地为止。',
                    },{
                        id: '020',
                        name: '探灵先行队',
                        type: 'character-chihou',
                        country: 'wei',
                        data:'1-2-1',
                        des:'当探灵先行队进战场时，将一个名为【精华原石】的中立战器指示物放进战场，它具有“{瞬发}牺牲精华原石→在目标实体上放置一个精华标记”。',
                    },{
                        id: '022',
                        name: '乌鹊驱逐者',
                        type: 'character-chihou',
                        country: 'wei',
                        data:'1-2-1',
                        des:'{通常}{4}→将目标相对单位移回其拥有者手上。',
                    },{
                        id: '029',
                        name: '一笔勾销',
                        type: 'instant',
                        country: 'wei',
                        data:'1',
                        des:'取消目标阵略令符或战器令符。',
                    },{
                        id: '030',
                        name: '召回',
                        type: 'magic',
                        country: 'wei',
                        data:'1',
                        des:'将目标单位移回其拥有者手上。',
                    },{
                        id: '034',
                        name: '灭灵残片',
                        type: 'magic',
                        country: 'wei',
                        data:'1',
                        des:'当灭灵残片进战场时，观星2（检视你牌库顶的两张牌，将其中任意数量的牌以任意顺序置于你的牌库顶，其余则以任意顺序置于你的牌库底）。{瞬发}{1}，{横置}→观星1。',
                    },{
                        id: '170',
                        name: '霸业之殇·曹昂',
                        type: 'character',
                        country: 'wei',
                        data:'1-2-1',
                        des:'只要你操控四个或更多的魏势力领土，曹昂便+1/+2且具有迎击2。背水～{通常}{0}→将另一个目标单位移回其拥有者手上。在下一个结束步骤开始时，牺牲曹昂。此能力每回合只能启动一次。',
                    },{
                        id: '007',
                        name: '德昭济北·鲍信',
                        type: 'character',
                        country: 'wei',
                        data:'2-2-3',
                        des:'由你操控的其他单位各+1体力上限。',
                    },{
                        id: '008',
                        name: '内助之贤·卞夫人',
                        type: 'character',
                        country: 'wei',
                        data:'2-1-4',
                        des:'{瞬发}{横置}，横置一个由你操控且未横置的战器→横置目标实体。',
                    },{
                        id: '013',
                        name: '灵光傀儡',
                        type: 'equip',
                        country: 'wei',
                        data:'2-3-4',
                        des:'灵光傀儡须横置进战场。除非灵光傀儡上有精华标记，否则它于其操控者的重置步骤中不能重置。当灵光傀儡死去时，将一个名为【傀儡】的2/1中立战器单位指示物放进战场。',
                    },{
                        id: '016',
                        name: '曼成死士',
                        type: 'character-bubing',
                        country: 'wei-2',
                        data:'2-3-2',
                        des:'当曼成死士死去时，你可以支付{2}，若如此做，将两个1/1魏势力步兵单位指示物放进战场。',
                    },{
                        id: '017',
                        name: '青州后备骑',
                        type: 'character-zhanshi/qibing',
                        country: 'wei-2',
                        data:'2-2-3',
                        des:'转移（具有转移能力且不处于整备状态的单位可于你回合的{通常}时机向相邻的空阵地进行一次移动。）',
                    },{
                        id: '026',
                        name: '精华剥离',
                        type: 'instant',
                        country: 'wei',
                        data:'2',
                        des:'将目标单位或战器移回其拥有者手上，然后将一个名为【精华原石】的中立战器指示物放进战场，它具有“{瞬发}牺牲精华原石→在目标实体上放置一个精华标记”。',
                    },
                ]
            }
        },
        mounted() {
            
        },
        computed: {
            count(){
                return this.cardPile.length;
            },
            // cardPile(){
            //     return this.cardPileStorage;
            // },
            // cardPileStorage(){
            //     return this.$storage.cardPile;
            // }
        },
        methods: {
            requireCard(num){
                var cards=this.cardPile.splice(0, num);
                this.resultCards=cards;
                console.log(this.resultCards);
                return cards;
            },
        }
    }
</script>

<style lang="scss" scoped>
</style>
