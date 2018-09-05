<template>
    <transition name='fade'>
        <div id='online'>
            <v-alert :data="prompt" :match="match"></v-alert>
        </div>
    </transition>
</template>

<script>
    import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex';
    import alert from '@/components/tools/alert.vue';
    import storage from '@/components/storage.js';
    export default {
        name: 'found',
        data() {
            return {
                match: true,
                onlinePlayer: [],
                prompt: {
                    icon: 'loading',
                    text: '正在搜索中',
                }
            }
        },
        mounted() {
            this.init();
        },
        beforeDestroy(){
            console.log('即将离开');
            this.$socket.emit('leave',{
                "id":this.id,
                "nickname":this.nickname,
            });
        },
        components: {
            "v-alert": alert,
        },
        computed: {
            id() {
                return this.$socket.id;
            },
            nickname() {
                return storage.get('nickname')
            },
            list() {
                return [];
            }
        },
        methods: {
            ...mapMutations('game', {
                _searchOnlinePlayers: 'searchOnlinePlayers',
            }),
            init() {
                console.log(this.id);
                console.log(this.nickname);
                // this._searchOnlinePlayers(this.info);
                console.log()
                this.$socket.emit('match',{
                    "id":this.id,
                    "nickname":this.nickname,
                });
            },
            _searchOnlinePlayers(info) {
                this.$socket.emit('match',info);
                // this.searchOnlinePlayers(info)
                //     .then((msg) => {
                //         console.log(msg);
                //     })
            }
        }
    }
</script>

<style lang="scss" scoped>
    #online {
        width: 100%;
        height: 100%;
    }
</style>
