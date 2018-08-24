
<template>
    <div id="container">
        <div class="enemy_side">
            <v-bg></v-bg>
        </div>
        <div class="our_side">
            
        </div>
    </div>
</template>

<script>

// import bus from '@/components/bus.js'
import Vue from 'vue'
import bg from '@/components/battleGround.vue'

export default {
    name: 'App',
    components: {
        "v-bg": bg,
    },
    data() {
        return {
            mask: false,
        }
    },
    methods: {

    },
    created() {
        //这里需要使用箭头函数，否则this错误

    }
}
</script>

<style lang="scss" type="text/css">
//阿里图标
// @import url('http://at.alicdn.com/t/font_586765_srq6hpjhrmn.css');

* {
  overflow: hidden;
  padding: 0;
}
html,
body {
  margin: 0;
  height: 100%;
  font-family: KaiTi;
  //以1080P做设计稿，用其他的话太麻烦，还得换算
  font-size: calc(100vw / 10.8);
}
::-webkit-scrollbar {
  display: none;
}
//图标
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
    margin: 0 0.3rem;
  }
}
/*---------------主容器------------------*/
#container {
  height: 100%;
  // transition: all 1s;
}
</style>
