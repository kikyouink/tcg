<template>
    <ul>
        <li v-for="item in list" :key="item.id" >
            <i :class="'sm margin iconfont icon-'+item.icon"></i>{{item.name}}<input />
        </li>
    </ul>
</template>

<script>
    export default {
        name:'list',
        data(){
            return{

            }
        },
        props:{
            list:Array,
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