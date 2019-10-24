<template>
    <section class="p-page">
        <PageHeader :pageName="pageName"></PageHeader>
        <DeliverySettingForm></DeliverySettingForm>
    </section>
</template>
<script>
    /**
     * 配送设置list
     *
     *@date 2019-09-25
     *@author liuzhuang
     */

    // 引入商品列表form
    import DeliverySettingForm from './DeliverySettingForm';
    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    export default {
        name: 'DeliverySettingList',
        components: {
            DeliverySettingForm,
            PageHeader
        },
        data() {
            return {
                pageName: '运费模板'
            }
        },
        methods: {},
        mounted() {
        }
    }
</script>
<style scoped>

</style>