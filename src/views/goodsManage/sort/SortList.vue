<template>
    <section class="p-page">
        <PageHeader :pageName="pageName"></PageHeader>
        <SortForm></SortForm>
    </section>
</template>
<script>
    /**
     * 商品列表分类
     *@date 2019-09-19
     *@author liuzhuang
     */

    // 引入商品分类form
    import SortForm from './SortForm';
    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    export default {
        name: 'SortList',
        components: {
            SortForm,
            PageHeader
        },
        data() {
            return {
                pageName: '商品分类'
            }
        },
        methods: {},
        mounted() {
        }
    }
</script>
<style scoped>
</style>