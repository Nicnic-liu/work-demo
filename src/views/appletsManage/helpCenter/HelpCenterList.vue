<template>
    <section class="p-page">
        <PageHeader :pageName="pageName"></PageHeader>
        <HelpCenterForm></HelpCenterForm>
    </section>
</template>
<script>
    /**
     * 帮助中心列表list
     *
     *@date 2019-09-26
     *@author liuzhuang
     */

    // 引入商品列表form
    import HelpCenterForm from './HelpCenterForm';
    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    export default {
        name: 'HelpCenterList',
        components: {
            HelpCenterForm,
            PageHeader
        },
        data() {
            return {
                pageName: '帮助中心'
            }
        },
        methods: {},
        mounted() {
        }
    }
</script>
<style scoped>
</style>