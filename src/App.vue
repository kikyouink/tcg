<template>
    <div id="warp">
        <i class="lg iconfont icon-smile" @click="smile()"></i>
        <i class="lg iconfont icon-back" @click="back()"></i>
        <router-view></router-view>
        <!-- <v-dialog></v-dialog> -->
    </div>
</template>

<script>
    import dialog from '@/components/dialog.vue';
    import {
        mapState,
        mapMutations,
        mapActions
    } from 'vuex';
    export default {
        name: 'App',
        components: {
            "v-dialog": dialog,
            "v-alert": alert,
        },
        data() {
            return {
                version: '0.2-alpha',
                author: 'SAI',
                date: '2018-08-31',
                location: 'Nan Jing',
            }
        },
        mounted() {
            // console.clear();
            window.game = this;
            this.init();
        },
        computed: {
        },
        methods: {
            init() {
                this.log();
            },
            source(val) {
                return JSON.parse(JSON.stringify(val));
            },
            log() {
                console.log('版本:' + this.version);
                console.log('作者:' + this.author);
                console.log('日期:' + this.date + ' ' + this.location);
            },
            back() {
                this.$router.back();
            },
            smile() {
                this.$router.push('user');
            },
            restart() {
                console.log('See you again!');
                location.reload();
            },
            exit() {
                console.log('See you again!')
            }
        },
    }
</script>

<style lang="scss">
    //阿里图标
    @import url("http://at.alicdn.com/t/font_818705_gn1suc59ah.css");
    @import "../static/scss/animation.scss";
    @import "../static/scss/ui.scss";

    /*---------------主容器------------------*/
    #warp {
        height: 100%;
        background: url(../static/img/bg/chengdu.png) no-repeat center bottom;
        background-size: cover;
    }
</style>
