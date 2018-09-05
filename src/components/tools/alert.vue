<template>
    <transition name='fade'>
        <div class="alert">
            <div :class="icon" :style="{animation:animation}"></div>
            <span>{{text}}</span>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'alert',
        props:{
            alert:Object,
        },
        data() {
            return {

            }
        },
        computed:{
            text(){
                return this.alert.text;
            },
            icon(){
                return 'lg iconfont icon-'+this.alert.icon;
            },
            animation(){
                if(this.alert.type=='match') return 'rotating 1.5s linear infinite';
                else return '';
            }
        },
        methods: {
        }
    }
</script>
<style lang="scss">
    .alert{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 5rem;
        height: 2.2rem;
        background: rgba(0,0,0,.8);
        color: white;
        position: absolute;
        left: calc(50% - 2.5rem);
        top: 3rem;
        border-radius: .3rem;
        z-index: 200;
        font-size: .4rem;
        // animation: rotating 1.5s linear infinite;

        div{
            width: 1.2rem;
            height: 1.2rem;
            text-align: center;
            line-height: 1.2rem;
            // line-height: 1.2rem;
        
            // animation: rotating 1.5s linear infinite;
            .iconfont{
                // font-size: .3rem;
                // vertical-align: middle;
                // transition: all 1s;
            }
        }
}
</style>
