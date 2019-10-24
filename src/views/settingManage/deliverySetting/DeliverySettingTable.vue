<template>
    <section>
        <el-table
                :data="tableData"
                stripe
                class="g-table-width"
                :header-cell-style="{'color': '#6d7279'}">
            <el-table-column
                    align="center"
                    prop="id"
                    label="模板ID">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="templateName"
                    label="模板名称">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="billingMethodName"
                    label="计费方式">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="sortNo"
                    label="排序">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="createTime"
                    label="添加时间">
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
        <Pagination :total="total"></Pagination>
    </section>
</template>
<script>
    /**
     * 配送设置table
     *
     *@date 2019-09-25
     *@author liuzhuang
     */
    //引入分页
    import Pagination from '@/components/common/Pagination.vue'

    export default {
        name: 'DeliverySettingTable',
        components: {
            Pagination
        },
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
                this.axios.get('/jsonData/delivery.json').then(res => {
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
             * 商品修改
             *
             * @param index
             * @param row
             */
            handleEdit(index, row) {
                this.$router.push({
                    path: '/setting/deliveryBasic',
                    query: {
                        id: row.id
                    }
                })
            },
            /**
             * 商品删除
             *
             * @param index
             * @param row
             */
            handleDelete(index, row) {
                this.$message.warning('暂无此功能');
            },
            /**
             * 商品新增
             */
            handleAdd() {
                this.$router.push({
                    path: '/setting/deliveryBasic'
                })
            }
        },
        mounted() {
        }
    }
</script>
<style scoped>

</style>