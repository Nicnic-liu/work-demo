<template>
    <section>
        <div class="header">
            <div class="r-f">
                <transition name="bounce">
                    <div v-if="isShow" class="sidebar-nav-heading"><span class="sidebar-nav-heading-text">免费版演示</span>
                    </div>
                </transition>
                <span class="refresh">
                    <i @click="changeState()" style="cursor:pointer;" class="el-icon-s-fold"></i>
                    <i @click="refresh()" style="cursor:pointer;" class="el-icon-refresh-right"></i>
                </span>
            </div>

            <div>
                <el-link type="success" class="g-user-name" @click="goUserDetail()">{{userName}}</el-link>
                <img src="../assets/logo.jpg" alt="" class="user-img">
                <el-button class="b-btn" size="mini" type="danger" @click="logout()">退出</el-button>
            </div>
        </div>
    </section>
</template>
<script>
    /**
     * 头部组件
     *
     *@date 2019-09-13
     *@author liuzhuang
     */
    // 引入Vuex
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'TheHeader',
        data() {
            return {
                userName: 'lz'
            }
        },
        computed: {
            ...mapState({  //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
                isShow: state => state.navigation.showLeftBar //注意这些与上面的区别就是state.footerStatus,
                //里面定义的showFooter是指footerStatus.js里state的showFooter
            }),
        },
        methods: {
            /**
             * 登出
             *
             */
            logout() {

                this.$confirm('此操作将退出系统, 是否继续?', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    this.$message.success('登出成功！');
                    this.reState();
                    this.$router.push({
                        path: './'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            },

            /**
             * 去用户详情
             *
             */
            goUserDetail() {
                this.$message.success('哈哈哈');
            },
            /**
             * 页面刷新
             */
            refresh() {
                location.reload()
            },
            ...mapActions('navigation', [ //collection是指modules文件夹下的collection.js
                'changeState',  //collection.js文件中的actions里的方法，在上面的@click中执行并传入实参
                'reState'
            ]),
        },
        mounted() {
        }
    }
</script>
<style scoped lang="scss">
    .header {
        width: 100%;
        z-index: 20;
        height: 50px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        background-color: #ffffff;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .r-f {
        width: 300px;
        display: flex;
        flex-direction: row;
    }

    .refresh {
        padding: 15px 10px 15px 10px;
        width: 100px;
        height: 50px;
        display: flex;
        justify-content: space-around;

        i {
            font-size: 20px;
            font-style: normal;
        }
    }

    .sidebar-nav-heading {
        width: 160px;
        height: 51px;
        background-color: #545c64;
        font-size: 15px;
        font-weight: 500;
        color: #fff;

    }

    .sidebar-nav-heading-text {
        margin-top: 15px;
        line-height: 55px;
        margin-left: 17px;
    }


    .b-btn {
        position: relative;
        top: -15px;
        margin-bottom: 20px;
        margin-right: 20px;
    }

    .g-user-name {
        margin-right: 30px;
        margin-bottom: 24px;
    }

    .user-img {
        margin-top: 5px;
        margin-right: 20px;
        width: 40px;
        height: 40px;
        border-radius: 25px;
    }


</style>
