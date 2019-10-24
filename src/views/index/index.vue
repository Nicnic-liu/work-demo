<template>
    <el-container id="app-container">
        <el-header style="height: 51px;">
            <Header></Header>
        </el-header>

        <el-container>
            <transition name="bounce">
                <el-aside v-if="isShow" style="width: auto; text-align: start">
                    <leftBar/>
                </el-aside>
            </transition>
            <el-container style="width: 100%;position: relative">
                <el-main style="background: #f2f2f2;padding: 15px;width: 100%;position: absolute">
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
    /**
     * Home
     *
     *@date 2019-09-16
     *@author liuzhuang
     */
    //引入侧边栏
    import leftBar from "@/components/TheSidebar/index.vue";
    // 引入头部
    import Header from '@/components/TheHeader';
    //引入vuex
    import {mapState, mapGetters, mapActions} from 'vuex';

    export default {
        name: 'home',
        components: {
            leftBar,
            Header
        },
        computed: {
            ...mapState({  //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
                isShow: state => state.navigation.showLeftBar
            }),
        },
        mounted() {
        }
    };
</script>
<style scoped>
    #app-container {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .el-main {
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }

    /* 侧边栏样式 */
    .el-aside {
        width: auto;
        height: 100%;
        background-color: #ffffff;
        color: #fff;
        text-align: center;
    }

    .el-header {
        padding: 0 !important;
    }
</style>