<template>
    <section>
        <div class="nav-menus">
            <el-menu
                    :default-active="activeIndex"
                    background-color="#545c64"
                    text-color="#d3d3d3"
                    active-text-color="#ffffff">
                <div v-for="(v,i) in navData" :key="i">
                    <el-menu-item :index="v.menuIndex" @click="linkRoute(v)">
                        <i :class="v.icon"></i>
                        <span slot="title">{{v.name}}</span>
                    </el-menu-item>
                </div>
            </el-menu>

        </div>
    </section>
</template>
<script>
    /**
     * 父级菜单
     *
     *@date 2019-09-24
     *@author liuzhuang
     */
    export default {
        name: '',
        data() {
            return {
                navData: [
                    {
                        name: "首页",
                        menuIndex: "1",
                        icon: 'el-icon-s-home',
                        route: "/homePage",
                        subBarList: []
                    },
                    {
                        name: "商品管理",
                        menuIndex: "2",
                        icon: 'el-icon-present',
                        route: '/goods/goodsList',
                        subBarList: [
                            {
                                parentName: '商品管理',
                                name: '商品列表',
                                route: '/goods/goodsList'
                            },
                            {
                                parentName: '商品管理',
                                name: '商品分类',
                                route: '/goods/sortList'
                            }
                        ]
                    },
                    {
                        name: "订单管理",
                        menuIndex: "3",
                        icon: 'el-icon-tickets',
                        route: "/orders/orderList",
                        subBarList: [
                            {
                                parentName: '订单管理',
                                name: '待发货',
                                route: '/orders/orderList'
                            },
                            {
                                parentName: '订单管理',
                                name: '待收货',
                                route: '/orders/orderList' + '?' + 'sort=2'
                            },
                            {
                                parentName: '订单管理',
                                name: '待付款',
                                route: '/orders/orderList' + '?' + 'sort=3'
                            },
                            {
                                parentName: '订单管理',
                                name: '已完成',
                                route: '/orders/orderList' + '?' + 'sort=4'
                            },
                            {
                                parentName: '订单管理',
                                name: '已取消',
                                route: '/orders/orderList' + '?' + 'sort=5'
                            },
                            {
                                parentName: '订单管理',
                                name: '全部订单',
                                route: '/orders/orderList' + '?' + 'sort=6'
                            },
                        ]
                    },
                    {
                        name: "用户管理",
                        menuIndex: "4",
                        icon: 'el-icon-user',
                        route: '/userList',
                        subBarList: []
                    },
                    {
                        name: "小程序",
                        menuIndex: "5",
                        icon: 'el-icon-eleme',
                        route: "/applets/setting",
                        subBarList: [
                            {
                                parentName: '小程序',
                                name: '小程序设置',
                                route: '/applets/setting'
                            },
                            {
                                parentName: '小程序',
                                name: '页面管理',
                                route: '/applets/homeDesign',
                                children: [
                                    {
                                        parentName: '设置',
                                        name: '首页设计',
                                        route: '/applets/homeDesign'
                                    },
                                    {
                                        parentName: '设置',
                                        name: '页面链接',
                                        route: '/applets/pageLink'
                                    },
                                ]
                            },
                            {
                                parentName: '小程序',
                                name: '帮助中心',
                                route: '/applets/helpCenterList'
                            },
                            {
                                parentName: '小程序',
                                name: '导航设置',
                                route: '/applets/navSetting'
                            }
                        ]
                    },
                    {
                        name: "应用中心",
                        menuIndex: "6",
                        icon: 'el-icon-menu',
                        route: '/appCenter',
                        subBarList: []
                    },
                    {
                        name: "设置",
                        menuIndex: "7",
                        icon: 'el-icon-setting',
                        route: '/setting/mall',
                        subBarList: [
                            {
                                parentName: '设置',
                                name: '商城设置',
                                route: '/setting/mall'
                            },
                            {
                                parentName: '设置',
                                name: '交易设置',
                                route: '/setting/deal'
                            },
                            {
                                parentName: '设置',
                                name: '配送设置',
                                route: '/setting/deliveryList'
                            },
                            {
                                parentName: '设置',
                                name: '短信设置',
                                route: '/setting/message'
                            },
                            {
                                parentName: '设置',
                                name: '上传设置',
                                route: '/setting/upload'
                            },
                            {
                                parentName: '设置',
                                name: '其他',
                                route: '/setting/other/cleanCache',
                                children: [
                                    {
                                        parentName: '设置',
                                        name: '清理缓存',
                                        route: '/setting/other/cleanCache'
                                    },
                                    {
                                        parentName: '设置',
                                        name: '环境监测',
                                        route: '/setting/other/detect'
                                    },
                                ]
                            },
                        ]
                    },
                ],
                activeIndex: "1"
            }
        },
        mounted() {
            this.setCurrentRoute(this.$router.history.current.path);
            this.getSub(this.$router.history.current.path);
        },
        methods: {
            /**
             * 整理数据格式
             *
             * @param val
             */
            getSub(val) {
                let obj = {}
                for (let i = 0; i < this.navData.length; i++) {
                    if (this.navData[i].route.indexOf(val.slice(0, 5)) > -1) {
                        obj.route = val;
                        obj.subBarList = this.navData[i].subBarList;
                    }
                }
                this.linkRoute(obj)
            },
            /**
             * 选中状态
             *
             * @param path
             */
            setCurrentRoute(path) {
                if (path.indexOf("/homePage") > -1) {
                    this.activeIndex = "1";
                    return
                }
                if (path.indexOf("/goods") > -1) {
                    this.activeIndex = "2";
                    return
                }
                if (path.indexOf("/orders") > -1) {
                    this.activeIndex = "3";
                    return
                }
                if (path.indexOf("/userList") > -1) {
                    this.activeIndex = "4";
                    return
                }
                if (path.indexOf("/applets") > -1) {
                    this.activeIndex = "5";
                    return
                }
                if (path.indexOf("/appCenter") > -1) {
                    this.activeIndex = "6";
                    return
                }
                if (path.indexOf("/setting") > -1) {
                    this.activeIndex = "7";
                    return
                }
            },
            /**
             * 路由跳转、并向右侧菜单传值
             *
             * @param v
             */
            linkRoute(v) {
                this.setCurrentRoute(v.route);
                this.$emit('getBub', v.subBarList);
                this.$router.push({path: v.route});
            },
        },
        watch: {
            $route(currentRoute) {
                this.setCurrentRoute(currentRoute.path);
            }
        }
    }
</script>
<style lang="scss" scoped>

    .el-menu {
        width: 160px;
        height: 100%;
        position: absolute;
        border-bottom: 0px solid #f5f5f5;

        li {
            width: 160px;
        }
    }

    .nav-menus {
        flex: 1;
    }

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