<template>
    <transition name='slide'>
        <div id="user">
            <div class="user-container">
                <div class="user-info">
                    <v-list :list=dataList></v-list>
                    <button class="save" type='button'>保存</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import list from '@/components/tools/list.vue';
    export default {
        name: 'user',
        data() {
            return {
                dataList:[
                    {
                        name:'ID',
                        icon:'user',
                    },{
                        name:'昵称',
                        icon:'nickname',
                    },{
                        name:'签名',
                        icon:'sign',
                    }
                ]
            }
        },
        components: {
            "v-list":list,
        },
        computed: {
            list() {
                return [];
            }
        },
        methods: {
            sa() {
                alert('sd');
            }
        }
    }
</script>

<style lang="scss" scoped>
    #user{
        width: 100%;
        height: 100%;
        position: relative;
        // background: red;
        .user-container{
            width: 4.2rem;
            height: 6rem;
            position: absolute;
            top:calc(50% - 3rem);
            left: calc(50% - 2.1rem);
            box-shadow:.04rem .08rem .3rem .02rem rgba(0,0,0,.4);
            border-radius: .2rem;
            background-image: url('../../static/img/player/zhenji.png');
            background-size: cover;


            .user-info{
                background: rgba(0,0,0,0.5);
                position: absolute;
                width: 100%;
                bottom: 0;

                .save{
                    position: absolute;
                    width: 100%;
                    bottom: 0;
                }
            }
        }
        
    }
</style>
