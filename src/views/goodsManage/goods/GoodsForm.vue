<template>
    <section class="f-form">
        <el-form :model="listForm" ref="listForm" class="el-form--inline">
            <el-row class="f-tac" type="flex" justify="start">
                <el-form-item>
                    <el-button icon="el-icon-plus" type="success" size="mini" @click="addGoods()">新增</el-button>
                </el-form-item>
            </el-row>
        </el-form>
        <GoodsTable ref="listTable" :attribute="{'listForm': listForm}"></GoodsTable>
    </section>
</template>
<script>
    /**
     * 商品列表form
     *
     *@date 2019-09-19
     *@author liuzhuang
     */

    import GoodsTable from './GoodsTable.vue';

    export default {
        name: 'GoodsForm',
        components: {
            GoodsTable
        },
        data() {
            return {
                // 表单
                listForm: {}
            }
        },
        methods: {
            /**
             * 新增
             */
            addGoods() {
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