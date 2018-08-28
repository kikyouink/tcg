<template>
    <div id="nav">
        <v-tab></v-tab>
    </div>
</template>

<script>
    import tab from '@/components/tools/tab.vue'

    export default {
        name: 'nav',
        components: {
            "v-tab": tab,
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
    
</style>
