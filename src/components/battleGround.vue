<template>
    <div @click="ss">
        {{test}}
    </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from 'vuex'
export default {
    name: "bg",
    computed: mapState([
        'count', 'test'
    ]),
    methods:{
        ss(){
            this.change('test123');
        },
        ...mapMutations([
            'change'
        ]),
    }
};
</script>

<style scoped>
</style>