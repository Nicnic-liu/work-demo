<template>
    <section class="p-page">
        <PageHeader :pageName="pageName"></PageHeader>
        <GoodsForm></GoodsForm>
    </section>
</template>
<script>
    /**
     * 商品列表list
     *
     *@date
     *@author liuzhuang
     */

    // 引入商品列表form
    import GoodsForm from './GoodsForm';
    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    export default {
        name: 'GoodsList',
        components: {
            GoodsForm,
            PageHeader
        },
        data() {
            return {
                pageName: '出售中的商品'
            }
        },
        methods: {},
        mounted() {
        }
    }
</script>
<style scoped>
</style>