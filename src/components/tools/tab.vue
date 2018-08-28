<template>
    <!-- 图标文字结合 -->
    <div class="tab">
        <router-link v-for="item in items" :key="item.id" :to="item.link" :class="['lg iconfont ' + item.icon]" @click="light(index)">
            {{item.text}}
        </router-link>
    </div>
</template>
<script>
    export default {
        name: 'tab',
        props:{
            items:object
        },
        data() {
            return {

            }
        },
        computed: mapState([
            // 映射 this.count 为 store.state.count
            'count'
        ])
        methods: {
            light(index) {
                this.changeLight = index;
            }
        }
    }
</script>
<style lang="scss">
    .tab {
        display: flex;
        justify-content: space-around;
        align-items: center;
        a {
            text-decoration: none;
            line-height: 100%;
            color: white;
            margin: .35rem;
            opacity: 0.6;
            
            &.light {
                opacity: 1;
            }
        }
    }
</style>
