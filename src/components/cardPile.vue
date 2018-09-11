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
            }
        },
        mounted() {
            this.start();
        },
        computed: {
            count(){
                return this.cardPile.length;
            },
            cardPile(){

            },
            cardPileStorage(){
                return this.$storage.cardPile;
            }
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
