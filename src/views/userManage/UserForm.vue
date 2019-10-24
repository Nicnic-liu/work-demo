<template>
    <section class="f-form">
        <UserTable ref="listTable"></UserTable>
    </section>
</template>
<script>
    /**
     * 用户列表form
     *
     *@date 2019-09-23
     *@author liuzhuang
     */

    //引入用户列表table
    import UserTable from './UserTable'

    export default {
        name: 'UserForm',
        components: {
            UserTable
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