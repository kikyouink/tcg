<template>
    <transition name='slide'>
        <div id="user">
            <div class="user-container" :style="{backgroundImage:avatarUrl}" @dblclick="changeBg()">
                <div class="user-info">
                    <ul>
                        <li>
                            <i class='sm margin iconfont icon-nickname'></i>
                            <span>昵称</span>
                            <input type="text" spellcheck="false" v-model="user.nickname" :placeholder="nickname"/>
                        </li>
                        <li>
                            <i class='sm margin iconfont icon-sign'></i>
                            <span>签名</span>
                            <input type="text" spellcheck="false" v-model="user.sign" :placeholder="sign"/>
                        </li>
                    </ul>
                    <button class="save" type='button' @click="sumbit()">保存</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'user',
        data() {
            return {
                user:{
                    avatar:'',
                    nickname:'',
                    sign:'',
                }
            }
        },
        components: {
        },
        computed: {
            nickname(){
                return this.$storage.get('nickname');
            },
            sign(){
                return this.$storage.get('sign');
            },
            avatar(){
                return this.$storage.get('avatar');
            },
            avatarUrl(){
                if(this.user.avatar=='') return 'url('+require('../assets/img/player/'+this.avatar+'.png')+')';
                else return 'url('+require('../assets/img/player/'+this.user.avatar+'.png')+')';
            }
        },
        methods: {
            changeBg(){
                var list=['zhenji','lingju','xiahoushi'];
                var item=list.findNext(this.user.avatar);
                this.$set(this.user,'avatar',item);
            },
            sumbit(){
                this.$storage.set(['nickname','sign','avatar'],[this.user.nickname,this.user.sign,this.user.avatar]);
                this.$router.back();
            }
        }
    }
</script>

<style lang="scss" scoped>
    #user{
        width: 100%;
        height: 100%;
        position: relative;
        .user-container{
            width: 4.2rem;
            height: 6rem;
            position: absolute;
            top:calc(50% - 3rem);
            left: calc(50% - 2.1rem);
            box-shadow:.04rem .08rem .3rem .02rem rgba(0,0,0,.4);
            border-radius: .2rem;
            background-size: cover;
            transition: all .75s;
            .user-info{
                background: rgba(0,0,0,0.5);
                position: absolute;
                width: 100%;
                bottom: 0;
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
                            width:2.5rem;
                            float: right;
                            color: rgba(255,255,255,0.8);
                        }
                    }
                }
                .save{
                    position: absolute;
                    width: 100%;
                    bottom: 0;
                }
            }
        }
        
    }
</style>