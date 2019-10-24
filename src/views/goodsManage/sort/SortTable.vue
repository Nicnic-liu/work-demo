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
                    label="分类ID"
                    width="70">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="sortName"
                    :formatter="sortMoment"
                    label="分类名称">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="rangeNo"
                    label="分类排序">
            </el-table-column>
            <el-table-column
                    prop="addTime"
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
     * 商品分类table
     *
     *@date 2019-09-19
     *@author liuzhuang
     */
    //引入分页
    import Pagination from '@/components/common/Pagination.vue'

    export default {
        name: 'SortTable',
        components: {
            Pagination
        },
        data() {
            return {
                //表格数据
                tableData: [],
                //数据数
                total: null,
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
                this.axios.get('/jsonData/sorts.json').then(res => {
                    this.dataMoment(res.data.list);
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
                    path: '/goods/sortBasic',
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
                    path: '/goods/sortBasic'
                })
            },
            sortMoment(row, column, cellValue, index) {
                if ("sortChildren" in row) {
                    return cellValue;
                } else {
                    return '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '--' + cellValue;
                }
            },
            dataMoment(list) {
                console.log(list)
                let data = [];
                for (let i = 0; i < list.length; i++) {
                    if (list[i].sortChildren.length == 0) {
                        data.push(list[i]);
                    } else {
                        data.push(list[i]);
                        for (let j = 0; j < list[i].sortChildren.length; j++) {
                            data.push(list[i].sortChildren[j]);
                        }
                    }
                }
                this.tableData = data;
            }

        },
        mounted() {
        }
    }
</script>
<style scoped>
</style>