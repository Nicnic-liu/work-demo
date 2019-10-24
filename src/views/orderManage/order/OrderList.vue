<template>
    <section class="p-page">
        <PageHeader :pageName="pageName"></PageHeader>
        <OrderForm></OrderForm>
    </section>
</template>
<script>
    /**
     * 订单管理list
     *
     *@date 2019-09-22
     *@author liuzhuang
     */

    // 引入订单列表form
    import OrderForm from './OrderForm';
    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    export default {
        name: 'OrderList',
        components: {
            PageHeader,
            OrderForm
        },
        data() {
            return {
                pageName: '代发货订单'
            }
        },
        methods: {
            getPageName(){
                if (this.$route.query.sort) {
                    var str =''
                    switch (this.$route.query.sort) {
                        case '1':
                            str ="代发货订单";
                            break;
                        case '2':
                            str ="代收货订单";
                            break;
                        case '3':
                            str ="代付款订单";
                            break;
                        case '4':
                            str ="已完成订单";
                            break;
                        case '5':
                            str ="已取消订单";
                            break;
                        case '6':
                            str ="全部订单";
                            break;
                        default:
                            str = "";
                    }
                    this.pageName = str;
                }
            }
        },
        mounted() {
            this.getPageName(this.$route.query.sort)
        },

        watch: {
            $route(){
                this.getPageName(this.$route.query.sort)
            },
        }
    }
</script>
<style scoped>

</style>