<template>
    <div class="nav-container">
        <div class="sidebar-nav-heading"><span class="sidebar-nav-heading-text">免费版演示</span></div>
        <div class="nav-menus">
            <el-menu
                    :default-active="activeIndex"
                    background-color="#545c64"
                    text-color="#d3d3d3"
                    router
                    active-text-color="#ffffff">
                <div v-for="(v,i) in navData" :key="i">
                    <el-menu-item :index="v.route" @click="linkRoute(v)">
                        <i :class="v.icon"></i>
                        <span slot="title">{{v.name}}</span>
                    </el-menu-item>
                </div>
            </el-menu>

        </div>

    </div>
</template>
<script>
    /**
     * 左侧菜单栏
     *
     *@date 2019-09-13
     *@author liuzhuang
     */
    import "./index.scss";

    export default {
        name: 'leftBar',
        data() {
            return {
                navData: [
                    {
                        name: "首页",
                        menuIndex: "1",
                        icon: 'el-icon-s-home',
                        route: "/home",
                    },
                    {
                        name: "商品管理",
                        menuIndex: "2",
                        icon: 'el-icon-present',
                        route: '/goods',
                    },
                    {
                        name: "订单管理",
                        menuIndex: "3",
                        icon: 'el-icon-tickets',
                        route: "/orders",
                    },
                    {
                        name: "用户管理",
                        menuIndex: "4",
                        icon: 'el-icon-user',
                        route: '/userList',
                    },
                    {
                        name: "小程序",
                        menuIndex: "5",
                        icon: 'el-icon-eleme',
                        route: "/applets",
                    },
                    {
                        name: "应用中心",
                        menuIndex: "6",
                        icon: 'el-icon-menu',
                        route: '/appCenter',
                    },
                    {
                        name: "设置",
                        menuIndex: "7",
                        icon: 'el-icon-setting',
                        route: '/setting',
                    },
                ],
                activeIndex: "1"
            };
        },
        mounted() {
            this.setCurrentRoute(this.$router.history.current.path)
        },
        methods: {
            linkRoute(v) {
                this.$router.push({path: v.route});
                this.activeIndex = v.route
            },
            setCurrentRoute(path) {
                if (path.indexOf("/home") > -1) {
                    this.activeIndex = "/home";
                    return
                }
                if (path.indexOf("/goods") > -1) {
                    this.activeIndex = "/goods";
                    return
                }
                if (path.indexOf("/orders") > -1) {
                    this.activeIndex = "/orders";
                    return
                }
                if (path.indexOf("/userList") > -1) {
                    this.activeIndex = "/userList";
                    return
                }
                if (path.indexOf("/applets") > -1) {
                    this.activeIndex = "/applets";
                    return
                }
                if (path.indexOf("/appCenter") > -1) {
                    this.activeIndex = "/appCenter";
                    return
                }
                if (path.indexOf("/setting") > -1) {
                    this.activeIndex = "/setting";
                    return
                }
            },
        },
        watch: {
            $route(currentRoute) {
                this.setCurrentRoute(currentRoute.path)
            }
        }
    };
</script>
<style lang="scss" scoped>

    .el-menu-item.is-active {
        background-color: #009688 !important;
    }

    .el-menu-item.is-active:hover {
        background-color: #009688 !important;
        border-left: 0px solid #009688;
    }

    .el-menu-item:hover {
        color: #ffffff !important;
        background-color: #545c64 !important;
        border-left: 4px solid #009688;

        i {
            color: #ffffff !important;
        }
    }

    .el-menu-item {
        line-height: 50px !important;
        height: 50px !important;
        margin-top: 5px !important;
    }
</style>

