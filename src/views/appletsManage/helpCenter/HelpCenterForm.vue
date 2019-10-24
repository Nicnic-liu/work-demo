<template>
    <section class="f-form">
        <el-form :model="listForm" ref="listForm" class="el-form--inline">
            <el-row class="f-tac" type="flex" justify="start">
                <el-form-item>
                    <el-button icon="el-icon-plus" type="success" size="mini" @click="addHelps()">新增</el-button>
                </el-form-item>
            </el-row>
        </el-form>
        <HelpCenterTable ref="listTable" :attribute="{'listForm': listForm}"></HelpCenterTable>
    </section>
</template>
<script>
    /**
     * 帮助中心form
     *
     *@date 2019-09-19
     *@author liuzhuang
     */

    import HelpCenterTable from './HelpCenterTable.vue';
    export default {
        name: 'HelpCenterForm',
        components:{
            HelpCenterTable
        },
        data() {
            return {
                // 表单
                listForm: {}
            }
        },
        methods:{
            /**
             * 新增
             */
            addHelps() {
                this.$refs.listTable.handleAdd();
            }
        },
        mounted(){
            this.$refs.listTable.initTable();
        }
    }
</script>
<style scoped>

</style>