<template>
    <section class="f-form">
        <OrderTable ref="listTable"></OrderTable>
    </section>
</template>
<script>
    /**
     * 订单管理form
     *
     *@date 2019-09-22
     *@author liuzhuang
     */

    import OrderTable from "./OrderTable";

    export default {
        name: 'OrderForm',
        components: {
            OrderTable
        },
        data() {
            return {}
        },
        methods: {},
        mounted() {
            this.$refs.listTable.initTable();
        }
    }
</script>
<style scoped>

</style>