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
                    label="用户ID"
                    width="70">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="userAvatar"
                    label="微信头像">
                <template slot-scope="scope">
                    <img style="width: 70px;height: 70px" :src="scope.row.userAvatar"/>
                </template>
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="userName"
                    label="微信昵称">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="sex"
                    :formatter="sexMoment"
                    label="性别">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="country"
                    label="国家">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="province"
                    label="省份">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="city"
                    label="城市">
            </el-table-column>
            <el-table-column
                    prop="createTime"
                    label="注册时间"
                    width="145">
            </el-table-column>
        </el-table>
        <Pagination :total="total"></Pagination>
    </section>
</template>
<script>
    /**
     * 用户列表table
     *
     *@date 2019-09-23
     *@author liuzhuang
     */

    //引入分页
    import Pagination from '@/components/common/Pagination.vue'

    export default {
        name: 'UserTable',
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
                this.axios.get('/jsonData/users.json').then(res => {
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
             * 性别格式化
             *
             * @param row
             * @param column
             * @param cellValue
             * @param index
             */
            sexMoment(row, column, cellValue, index) {
                switch (cellValue) {
                    case 0:
                        return '女';
                    case 1:
                        return '男';
                    default:
                        return '';
                }
            }
        },
        mounted() {
        }
    }
</script>
<style scoped>

</style>