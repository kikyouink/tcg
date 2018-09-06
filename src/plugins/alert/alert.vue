<template>
    <transition name='fade'>
        <div class="alert" v-show="alert.show">
            <div :class="icon" :style="{animation:animation}"></div>
            <span>{{text}}</span>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'Alert',
        data() {
            return {
                alert:{
                    show:false,
                    text: '',
                    icon: 'smile',
                }
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
                if(this.alert.icon=='loading') return 'rotating 1.5s linear infinite';
                else return 'none';
            }
        },
        methods: {
            show(data,time=2000){
                // console.log(this.data);
                // console.log(this.$data);
                return new Promise(reslove =>{
                    if(typeof time=='string'&&time!='infinite'){
                        time=2000;
                        this.$set(this.alert,'icon',data);
                        this.$set(this.alert,'text',time);
                    }
                    else if(typeof data=='string'){
                        this.$set(this.alert,'text',data);
                    }
                    else {
                        this.$set(this.$data,'alert',data);
                    }
                    this.$set(this.alert,'show',true);
                    if(time!='infinite'){
                        setTimeout(()=>{
                            this.$set(this.alert,'show',false);
                            reslove();
                        },time)
                    }
                })
            },
            hide(){
                this.$set(this.alert,'show',false);
            }
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
