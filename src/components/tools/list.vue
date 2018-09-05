<template>
    <ul>
        <li v-for="item in data" :key="item.id" >
            <i v-if="item.icon" :class="'sm margin iconfont icon-'+item.icon"></i>
                {{item.name}}
            <input v-if="item.input" />
        </li>
    </ul>
</template>

<script>
    export default {
        name:'list',
        data(){
            return{
                list:{

                }
            }
        },
        computed:{

        },
        props:{
            data:Array,
        },
        mounted(){
            this.init();
        },
         methods: {
            init() {
                var 
                for(var i in this.list){
                    console.log(i);
                    console.log(list[i]);
                    this.$set(this.list,i.icon)

                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    ul{
        margin: 0 0 .8rem 0;
        li {
            font-size: .36rem;
            height: .8rem;
            line-height: .8rem;
            transition: all 0.3s ease-out;
            transform: translateX(0);
            color: rgba(255,255,255,0.8);

            &.active,&:hover{
                transform: translateX(.06rem);
                background: rgba(0,0,0,0.3);
            }
            i{
                color: rgba(255,255,255,0.6);
            }
            input{
                // outline: none;
                width:55%;
                float: right;
            }
        }
    }
    
</style>