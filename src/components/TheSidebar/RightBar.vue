<template>
    <section>
        <div class="nav-menus">
            <div class="p-title">{{subBarList[0].parentName}}</div>
            <el-menu :default-active="activeIndex" menu-trigger="click" router text-color="#000000">
                <div v-for="(item,index) in subBarList" :key="index">
                    <el-menu-item :index="item.route" v-if="(!item.children)" @click="linkRoute()">
                        {{item.name}}
                    </el-menu-item>

                    <el-submenu :index="item.route" v-else>
                        <template slot="title">
                            <span>{{item.name}}</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item
                                    v-for="(subV, subI) in item.children"
                                    :index="subV.route"
                                    :key="subI"
                            >{{subV.name}}
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </div>
            </el-menu>
        </div>
    </section>
</template>
<script>
    /**
     * 子级菜单
     *
     *@date 2019-09-24
     *@author liuzhuang
     */
    export default {
        name: 'RightBar',
        props: {
            // 右侧菜单列表
            subBarList: Array
        },
        computed: {
            /**
             * 监视当前路由
             * @returns {string}
             */
            activeIndex() {
                return this.$route.path;
            },

        },
        data() {
            return {}
        },
        mounted() {
        },
        methods: {
            linkRoute() {

            }
        },
        watch: {}
    }
</script>
<style lang="scss" scoped>

    .el-menu {
        width: 120px;
        height: 80%;
        position: absolute;
        border-bottom: 0px solid #f5f5f5;
        border-right: solid 0px #e6e6e6;

        li {
            width: 120px;
        }

        text-align: center;
    }

    .el-menu-item {
        min-width: 120px;
    }

    .nav-menus {
        flex: 1;
    }

    .el-menu-item.is-active {
        color: #000000;
        border-bottom: 0px solid #f5f5f5;
        background-color: #f5f5f5 !important;
    }

    .el-menu-item.is-active:hover {
        background-color: #f5f5f5 !important;
    }

    .el-menu-item:hover {
        background-color: #f5f5f5 !important;
    }

    .el-menu-item {
        line-height: 40px !important;
        height: 40px !important;
    }

    .p-title {
        color: #000000;
        height: 60px;
        line-height: 60px;
        font-size: 14px;

        text-align: center;
    }

    .el-submenu.is-active {
        color: #000000;
        border: 0px !important;
        background-color: #f5f5f5 !important;
    }

    .el-submenu.is-active:focus {
        color: #000000;
        border: 0px !important;
        background-color: #f5f5f5 !important;
    }

    .el-submenu.is-active:hover {
        background-color: #ffffff !important;
    }

</style>