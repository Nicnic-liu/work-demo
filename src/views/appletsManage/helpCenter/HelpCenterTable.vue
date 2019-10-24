<template>
    <section>
        <el-table
                :data="tableData"
                stripe
                class="g-table-width"
                :header-cell-style="{'color': '#6d7279'}">
            <el-table-column
                    align="center"
                    prop="title"
                    label="标题"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="content"
                    label="内容">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="sort"
                    label="排序"
                    width="100">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="createTime"
                    label="添加时间"
                    width="150">
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="185">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" icon="el-icon-edit"
                               @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button type="danger" size="mini" icon="el-icon-delete"
                               @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </section>
</template>
<script>
    /**
     * 帮助中心table
     *
     *@date 2019-09-26
     *@author liuzhuang
     */
    export default {
        name: 'HelpCenterTable',
        data() {
            return {
                //表格数据
                tableData: [],
                //数据数
                total: null
            }
        },
        methods: {
            /**
             * 查询
             *
             * @param params
             * @returns {Promise<void>}
             */
            queryList() {
                this.axios.get('/jsonData/helps.json').then(res => {
                    this.tableData = res.data.list;
                    this.total = this.tableData.length;
                })
            },

            /**
             * 初始化table数据
             */
            initTable() {
                this.queryList();
            },
            /**
             * 帮助修改
             *
             * @param index
             * @param row
             */
            handleEdit(index, row) {
                this.$router.push({
                    path: '/applets/helpCenterBasic'
                })
            },
            /**
             * 帮助删除
             *
             * @param index
             * @param row
             */
            handleDelete(index, row) {
                this.$message.warning('暂无此功能');
            },
            /**
             * 帮助新增
             */
            handleAdd() {
                this.$router.push({
                    path: '/applets/helpCenterBasic'
                })
            }
        },
        mounted() {
        }
    }
</script>
<style scoped>

</style>