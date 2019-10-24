<template>
    <section class="f-form">
        <el-form :model="listForm" ref="listForm" class="el-form--inline">
            <el-row class="f-tac" type="flex" justify="start">
                <el-form-item>
                    <el-button icon="el-icon-plus" type="success" size="mini" @click="addGoodsSort()">新增</el-button>
                </el-form-item>
            </el-row>
        </el-form>
        <SortTable ref="listTable" :attribute="{'listForm': listForm}"></SortTable>
    </section>
</template>
<script>
    /**
     * 商品分类form
     *
     *@date 2019-09-19
     *@author liuzhuang
     */

    import SortTable from './SortTable.vue'

    export default {
        name: 'SortForm',
        components: {
            SortTable
        },
        data() {
            return {
                //表单
                listForm: {}
            }
        },
        methods: {
            /**
             * 新增
             */
            addGoodsSort() {
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