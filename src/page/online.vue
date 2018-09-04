<template>
    <div id='online'>
        
    </div>
</template>

<script>
    export default {
        name: 'found',
        data() {
            return {
                onlinePlayer:'',
            }
        },
        mounted(){
            this.init();
        },
        components: {

        },
        computed: {
            id(){
                return this.$socket.id;
            },
            name(){
                return parseInt(Math.random()*100)
            },
            list() {
                return [];
            }
        },
        methods: {
            init(){
                // this.$set(this.name,name,);
                console.log(this.id);
                console.log(this.name);
                // console.log(this.$socket);
            },
            searchOnlinePlayer(){

            }
        }
    }
</script>

<style lang="scss" scoped>
    #online{
        width: 100%;
        height: 100%;
    }
</style>
