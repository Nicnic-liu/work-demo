<template>
    <section class="p-page">
        <div class="m-s">
            <el-row :gutter="20" class="mt20">
                <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <PageHeader :pageName="pageName"></PageHeader>
                </el-col>
                <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <div class="link-list">
                        <div class="link-item">
                            <span>商城首页</span>
                            <div class="link-item-c">地址：<span>pages/index/index</span></div>
                        </div>
                    </div>
                    <div class="link-list">
                        <div class="link-item">
                            <span>分类页面</span>
                            <div class="link-item-c">地址：<span>pages/category/index</span></div>
                        </div>
                    </div>
                    <div class="link-list">
                        <div class="link-item">
                            <span>搜索页</span>
                            <div class="link-item-c">地址：<span>pages/search/index</span></div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>
</template>
<script>
    /**
     * 页面链接
     *
     *@date 2019-09-26
     *@author liuzhuang
     */

    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    export default {
        name: 'PageLink',
        components: {
            PageHeader
        },
        data() {
            return {
                pageName: '页面链接',
            }
        },
        methods: {},
        mounted() {
        }
    }
</script>
<style lang="scss" scoped>
    .link-list{
        padding-bottom: 10px;
    }
    .link-item{
        width: auto;
        height: 70px;
        position: relative;
        padding: 4px 20px;
        border-bottom: 1px solid #eeeeee;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        span{
            font-size: 14px;
            color: #259fdc;
        }
    }
    .link-item-c{
        display: flex;
        flex-direction: row;
        color: #333333;
        font-size: 12px;
        span{
            color: #4db14d !important;
            font-size: 13px;
        }
    }
</style>