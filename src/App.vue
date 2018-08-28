<template>
    <div id="warp">
        <div id="container">
            <v-nav></v-nav>
        </div>
    </div>
</template>

<script>
    import nav from '@/components/area/nav.vue'

    export default {
        name: 'App',
        components: {
            "v-nav": nav,
        },
        data() {
            return {
                
            }
        },
        methods: {
            hide() {
                this.mask = false;
                bus.$emit('hide');
            }
        },
        created() {
            //这里需要使用箭头函数，否则this错误
            bus.$on('show', () => {
                this.mask = true;
            })
        }
    }
</script>

<style lang="scss" type="text/css">
    //阿里图标
    @import url('http://at.alicdn.com/t/font_586765_srq6hpjhrmn.css');
    * {
        overflow: hidden;
        padding: 0;
    }

    html,
    body {
        margin: 0;
        height: 100%;
        font-family: KaiTi; //以1080P做设计稿，用其他的话太麻烦，还得换算
        font-size: calc(100vw/10.8);
    }

     ::-webkit-scrollbar {
        display: none;
    } //图标
    .iconfont {
        opacity: 0.6;
        transition: opacity 0.2s;
        vertical-align: middle;
        &.lg {
            font-size: 0.8rem;
        }
        &.sm {
            font-size: 0.6rem;
        }
        &.lg:hover,
        &.sm:hover {
            opacity: 1;
        }
        &.margin {
            margin: 0 .3rem;
        }
    }
    /*---------------主容器------------------*/

    #warp {
        height: 100%;
        #container {
            height: 100%; // transition: all 1s;
        }
    }
</style>
