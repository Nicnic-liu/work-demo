<template>
    <section class="p-page">
        <div class="m-s">
            <el-row :gutter="20" class="mt20">
                <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <PageHeader :pageName="pageName"></PageHeader>
                </el-col>
                <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table
                            :data="serverTableData"
                            size="small"
                            style="width: 100%">
                        <el-table-column
                                align="center"
                                prop="label"
                                label="参数">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="value"
                                label="值">
                        </el-table-column>
                    </el-table>
                </el-col>
                <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <PageHeader :pageName="pageName2"></PageHeader>
                </el-col>
                <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table
                            :data="phpVersionTableData"
                            size="small"
                            :cell-style="changeCellStyle"
                            style="width: 100%">
                        <el-table-column
                                align="center"
                                prop="option"
                                label="选项">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="demand"
                                label="要求">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="status"
                                :formatter="stateMoment"
                                label="状态">
                        </el-table-column>
                    </el-table>
                </el-col>
                <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <PageHeader :pageName="pageName3"></PageHeader>
                </el-col>
                <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <el-table
                            :data="permissionTableData"
                            size="small"
                            :cell-style="changeCellStyle"
                            style="width: 100%">
                        <el-table-column
                                align="center"
                                prop="label"
                                label="名称">
                        </el-table-column>
                        <el-table-column
                                prop="value"
                                label="路径"
                                width="500">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="status"
                                :formatter="stateMoment"
                                label="状态">
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </div>
    </section>
</template>
<script>
    /**
     * 环境监测
     *
     *@date 2019-09-25
     *@author liuzhuang
     */
    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    export default {
        name: 'DetectCondition',
        components: {
            PageHeader
        },
        data() {
            return {
                pageName: '服务器信息',
                pageName2: 'PHP环境要求',
                pageName3: '目录权限监测',
                serverTableData: [],
                phpVersionTableData: [],
                permissionTableData: [],
            }
        },
        methods: {
            /**
             * 搜索
             */
            queryList() {
                this.axios.get('/jsonData/condition.json').then(res => {
                    this.serverTableData = res.data.list.serverInfo;
                    this.phpVersionTableData = res.data.list.phpVersion;
                    this.permissionTableData = res.data.list.contentPermission;
                })
            },

            /**
             * 状态格式化
             *
             * @param row
             * @param column
             * @param cellValue
             * @param index
             */
            stateMoment(row, column, cellValue, index) {
                switch (cellValue) {
                    case 0:
                        return '✖';
                    case 1:
                        return '✔';
                }
            },
            /**
             * 状态样式
             *
             * @param row
             * @param column
             * @param rowIndex
             * @param columnIndex
             * @returns {string}
             */
            changeCellStyle({row, column, rowIndex, columnIndex}) {
                if (columnIndex == 2) {
                    return 'color:#4db14d';
                }
            }
        },
        mounted() {
            this.queryList()
        }
    }
</script>
<style scoped>
    .el-table {
        margin-bottom: 45px;
    }
</style>