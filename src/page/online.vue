<template>
    <div id='online'>
        
    </div>
</template>

<script>
    export default {
        name: 'found',
        data() {
            return {
                id:this.$socket.id,
                onlinePlayer:null,
            }
        },
        components: {

        },
        computed: {
            list() {
                return [];
            }
        },
        methods: {
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
