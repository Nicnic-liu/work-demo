<template>
    <section class="f-form">
        <el-form :model="listForm" ref="listForm" class="el-form--inline">
            <el-row class="f-tac" type="flex" justify="start">
                <el-form-item>
                    <el-button icon="el-icon-plus" type="success" size="mini" @click="addDelivery()">新增</el-button>
                </el-form-item>
            </el-row>
        </el-form>
        <DeliverySettingTable ref="listTable" :attribute="{'listForm': listForm}"></DeliverySettingTable>
    </section>
</template>
<script>
    /**
     * 配送设置form
     *
     *@date 2019-09-25
     *@author liuzhuang
     */

    import DeliverySettingTable from './DeliverySettingTable.vue'

    export default {
        name: 'DeliverySettingForm',
        components: {
            DeliverySettingTable
        },
        data() {
            return {
                // 表单
                listForm: {}
            }
        },
        methods: {
            addDelivery() {
                this.$refs.listTable.handleAdd();
            }
        },
        mounted() {
            this.$refs.listTable.initTable();
        }
    }
</script>
<style scoped>

</style>