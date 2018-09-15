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
                resultCards:[],
                cardPile:[],
            }
        },
        mounted() {
            this.init();
        },
        computed: {
            count(){
                return this.cardPile.length;
            },
            cardPileInit(){
                return this.$storage.get('cardPile');
            }
        },
        methods: {
            init(){
                this.cardPile=json(this.cardPileInit).slice();
            },
            requireCard(num){
                var cards=this.cardPile.splice(0, num);
                console.log(json(cards));
                return json(cards);
            },
        }
    }
</script>

<style lang="scss" scoped>
</style>
