<template>
    <section class="p-page">
        <div class="m-s">
            <el-row :gutter="20" class="mt20">
                <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <PageHeader :pageName="pageName"></PageHeader>
                </el-col>
                <el-col :span="10" :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
                    <div class="p-phone">
                        <div class="phone-top"></div>
                        <div @click="clickFun($event)">
                            <draggable  :options = "{animation:500}">
                                <TheInput></TheInput>
                                <TheInput></TheInput>
                                <TheInput></TheInput>
                                <TheInput></TheInput>
                            </draggable>
                        </div>
                    </div>
                </el-col>
                <el-col :span="14" :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
                    <div class="p-style">
                        <div v-if="staIn">
                            <TheInputStyle @inputStyleChange="inputStyleChange" :styles="inStyle"></TheInputStyle>
                        </div>
                    </div>
                </el-col>
                <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <div class="p-menu">
                        <div class="nav">
                            <div class="title">组件</div>
                            <div>
                                <el-button size="mini" @click="addInput()">搜索框</el-button>
                                <el-button size="mini">轮播图</el-button>
                            </div>
                        </div>
                        <div class="action">
                            <el-button size="mini" icon="el-icon-caret-top" type="info" plain>返回顶部
                            </el-button>
                            <el-button size="mini" type="primary">保存页面</el-button>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>
</template>
<script>
    /**
     * 首页设计
     *
     *@date 2019-09-26
     *@author liuzhuang
     */

    import TheInput from './module/input'
    import TheInputStyle from './moduleStyle/inputStyle'
    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';
    import draggable from 'vuedraggable'

    export default {
        name: 'HomeDesign',
        components: {
            PageHeader,
            TheInput,
            TheInputStyle,
            draggable
        },
        data() {
            return {
                pageName: '首页设计',
                backToTop: false,
                input4: '',
                staIn: false,
                inputForm: {
                    placeholder: '',
                    inputStyle: '',
                    textStyle: ''
                },
                tar: '',
                inStyle: {},
            }
        },
        methods: {
            /**
             * 点击获取dom
             *
             * @param e
             */
            clickFun(e) {
                if (e.target.getAttribute('data-num') == 21) {
                    this.staIn = true;
                    this.tar = e.target;
                    this.inStyle = {
                        x: e.target.placeholder,
                        y: e.target.style.borderRadius,
                        z: e.target.style.textAlign
                    }
                }
            },
            /**
             * 输入框样式修改
             *
             * @param data
             */
            inputStyleChange(data) {
                this.tar.placeholder = data[0];
                this.tar.style.borderRadius = data[1];
                this.tar.style.textAlign = data[2];
            },
            /**
             * 添加输入框
             */
            addInput() {
                console.log(this.tar.parentNode.parentNode.parentNode)
                var li = document.createElement("li");
                li.appendChild(document.createTextNode("lalala"))
                this.tar.parentNode.parentNode.parentNode.appendChild(li)
            },
        },
    }
</script>
<style lang="scss" scoped>
    .p-phone {
        width: 330px;
        height: 586px;
        border-radius: 3px;
        margin-top: 10px;
        margin-bottom: 160px;
        min-height: 520px;
        border: 1px solid #ddd;
        position: relative;
    }

    .p-style {
        width: 496px;
        height: auto;
        min-height: 100px;
        background: #fdfdfd;
        padding: 15px 10px;
        margin-left: 18px;
        border: 1px solid #ddd;
        border-radius: 2px;
        margin-top: 55px;
        margin-bottom: 260px;

        .el-input {
            width: 80%;
        }
    }

    .p-menu {
        width: 840px;
        height: auto;
        background: #fdfdfd;
        margin-right: -455px;
        border: 1px solid #ddd;
        border-radius: 3px;
        position: fixed;
        bottom: 15px;
        right: 50%;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
        z-index: 999;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        user-select: none;
    }

    .nav {
        padding: 10px 24px;
        border-bottom: 1px dotted #ddd;
        position: relative;
        display: flex;
        flex-direction: column;
    }

    .title {
        font-size: 12px;
        color: #999;
        margin-bottom: 10px;
    }

    .action {
        padding: 10px;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .phone-top {
        width: 100%;
        height: 66px;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url(../../../../assets/phone-top.png);
        cursor: pointer;
    }
</style>