<template>
    <section>
        <section class="p-page">
            <PageHeader :pageName="pageName"></PageHeader>
            <UserForm></UserForm>
        </section>
    </section>

</template>
<script>
    /**
     * 用户列表list
     *
     *@date 2019-09-23
     *@author liuzhuang
     */

    // 引入用户列表form
    import UserForm from './UserForm';
    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    export default {
        name: 'UserList',
        components: {
            UserForm,
            PageHeader
        },
        data() {
            return {
                pageName: '用户列表'
            }
        },
        methods: {},
        mounted() {
        }
    }
</script>
<style scoped>

</style>