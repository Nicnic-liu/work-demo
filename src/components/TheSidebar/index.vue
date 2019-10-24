<template>
    <section class="nav">
        <div class="nav-container">
            <LeftBar @getBub="getBubList"></LeftBar>
        </div>
        <div v-if="subState" class="nav-container2">
            <RightBar :subBarList="subList"></RightBar>
        </div>
    </section>
</template>
<script>
    /**
     * 左侧菜单
     *
     *@date 2019-09-24
     *@author liuzhuang
     */
    //引入左侧菜单
    import LeftBar from './LeftBar.vue'
    //引入右侧菜单
    import RightBar from './RightBar.vue'

    export default {
        name: 'index',
        components: {
            LeftBar,
            RightBar
        },
        data() {
            return {
                subList: [],
                subState: false,
            }
        },
        mounted() {

        },
        methods: {
            /**
             * 改变右侧菜单
             *
             * @param data
             * @returns {boolean}
             */
            getBubList(data) {
                this.subState = false;
                if (!(data.length > 0)) {
                    return false;
                }
                //异步重新渲染dom
                this.$nextTick(() => {
                    this.subList = data;
                    this.subState = true;
                });
            }
        },
    }
</script>
<style lang="scss" scoped>

    .nav {
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: row;
        position: relative;
    }

    .nav-container {
        width: 161px;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .nav-container2 {
        width: 120px;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
</style>