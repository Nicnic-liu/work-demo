<template>
    <section class="p-page">
        <div class="p-info">
            <PageHeader :pageName="pageName"></PageHeader>
            <div class="widget-body">
                <div class="widget-border">
                    <div class="widget-card card-blue">

                    </div>
                </div>
                <div class="widget-border">
                    <div class="widget-card card-red">

                    </div>
                </div>
                <div class="widget-border">
                    <div class="widget-card card-violet">

                    </div>
                </div>
                <div class="widget-border">
                    <div class="widget-card card-primary">

                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>

    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    /**
     * 首页
     *
     *@date 2019-09-17
     *@author liuzhuang
     */
    export default {
        name: 'Home',
        components: {
            PageHeader
        },
        data() {
            return {
                pageName: '商城统计'
            }
        }
    }
</script>

<style scoped>
    .p-info {
        padding: 0 0 13px 0px;
    }

    .widget-body {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .widget-border {
        width: 25%;
        padding-left: 10px;
        padding-right: 10px;
        position: relative;
    }

    .widget-card {
        padding: 12px 17px 12px 22px;
        min-height: 154px;
        color: #ffffff;
        margin-bottom: 20px;
    }
    .card-blue{
        background: linear-gradient(-125deg, #57bdbf, #2f9de2);
    }
    .card-red{
        background: linear-gradient(-125deg, #ff7d7d, #fb2c95);
    }
    .card-violet{
        background: linear-gradient(-113deg, #c543d8, #925cc3);
    }
    .card-primary{
        background: linear-gradient(-141deg, #ecca1b, #f39526);
    }
</style>