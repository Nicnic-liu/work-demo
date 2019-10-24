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
                    label="商品ID"
                    width="70">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="img"
                    label="商品图片"
                    width="80">
                <template slot-scope="scope">
                    <img style="width: 50px;height: 50px" :src="scope.row.img"/>
                </template>
            </el-table-column>
            <el-table-column
                    prop="goodsName"
                    label="商品名称"
                    width="240">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="sortName"
                    label="商品分类">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="saleVolume"
                    label="实际销量"
                    width="80">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="rangeNo"
                    label="商品排序"
                    width="80">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="stateName"
                    label="商品状态"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="addTime"
                    label="添加时间"
                    width="145">
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
     * 商品列表table
     *
     *@date 2019-09-19
     *@author liuzhuang
     */
    //引入分页
    import Pagination from '@/components/common/Pagination.vue'

    export default {
        name: 'GoodsTable',
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
                this.axios.get('/jsonData/goods.json').then(res => {
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
                    path: '/goods/goodsBasic'
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
                    path: '/goods/goodsBasic'
                })
            }
        },
        mounted() {
        }
    }
</script>
<style scoped>

</style>