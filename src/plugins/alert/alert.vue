<template>
    <transition name='slideDown'>
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
                        this.$set(this.alert,'icon',data);
                        this.$set(this.alert,'text',time);
                        time=2000;
                    }
                    else if(typeof data=='string'){
                        this.$set(this.alert,'text',data);
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
        position: absolute;
        top: .1rem;
        left: calc(50% - 2.5rem);
        z-index: 200;
        display: flex;
        width: 5rem;
        height: 1.7rem;
        border:.02rem solid white;
        border-radius: .3rem;
        background: rgba(0,0,0,.8);
        box-shadow: 0 0 0.5rem black;
        color: white;
        font-size: .4rem;
        align-items: center;
        justify-content: space-around;

        div{
            width: 1.2rem;
            height: 1.2rem;
            text-align: center;
            line-height: 1.2rem;
        }
    }
</style>
