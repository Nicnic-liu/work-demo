<template>
    <section>
        <el-table
                :data="tableData"
                stripe
                border
                class="g-table-width"
                :header-cell-style="{'color': '#6d7279'}">
            <el-table-column
                    prop="id"
                    label="商品信息"
                    width="380">
                <div class="order-info" slot-scope="scope">
                    <img :src="scope.row.img"/>
                    <span>{{scope.row.goodsName}}</span>
                </div>
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="saleVolume"
                    label="单价/数量">
                <template slot-scope="scope">
                    <div>￥{{scope.row.price}}</div>
                    <span>x{{scope.row.saleAmount}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="goodsName"
                    label="实付款">
                <template slot-scope="scope">
                    <div>￥{{parseInt(scope.row.price) * parseInt(scope.row.saleAmount) + parseInt(scope.row.fare)}}
                    </div>
                    <span>(含运费：￥{{scope.row.fare}})</span>
                </template>
            </el-table-column>
            <el-table-column
                    align="center"
                    label="买家">
                <template slot-scope="scope">
                    <div>{{scope.row.saleUserName}}</div>
                    <span>(用户id：{{scope.row.saleUserId}})</span>
                </template>
            </el-table-column>
            <el-table-column
                    align="center"
                    label="交易状态"
                    width="180">
                <template style="display: flex;flex-direction: column" slot-scope="scope">
                    <div>
                        <span>付款状态:</span>
                        <span :class="scope.row.orderState >=1?'order-state':'un-order-state'">{{scope.row.orderState >=1?'已付款':'待付款'}}</span>
                    </div>
                    <div>
                        <span>发货状态:</span>
                        <span :class="scope.row.orderState >=2?'order-state':'un-order-state'">{{scope.row.orderState >=2?'已发货':'待发货'}}</span>
                    </div>
                    <div>
                        <span>收获状态:</span>
                        <span :class="scope.row.orderState >=3?'order-state':'un-order-state'">{{scope.row.orderState >=3?'已收货':'待收获'}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                    align="center"
                    label="操作"
                    width="110">
                <template slot-scope="scope">
                    <el-button size="mini" type="success" @click="handleDetail(scope.$index, scope.row)" plain>订单详情
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <Pagination :total="total"></Pagination>
    </section>
</template>
<script>
    /**
     * 订单管理table
     *
     *@date 2019-09-22
     *@author liuxhuang
     */

    //引入分页
    import Pagination from '@/components/common/Pagination.vue'

    export default {
        name: 'OrderTable',
        components: {
            Pagination
        },
        data() {
            return {
                //表格数据
                tableData: [],
                //数据数
                total: null,
                sortId: ''
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
                this.axios.get('/jsonData/orders.json').then(res => {
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
             * 商品详情
             *
             * @param index
             * @param row
             */
            handleDetail(index, row) {
                this.$router.push({
                    path: '/orders/orderDetail',
                    query: {
                        detail: row,
                        id:this.$route.query.id
                    }
                })
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
            if (this.$route.query.id) {
                this.sortId = this.$route.query.id;
            }
        },
        watch: {
            $route() {
                this.sortId = this.$route.query.id
            },
        }
    }
</script>
<style lang="scss" scoped>
    .order-info {
        float: left;
    }

    .order-info img {
        width: 70px;
        height: 70px;
        float: left
    }

    .order-info span {
        font-size: 13px;
        line-height: 15px;
        margin-left: 5px
    }

    .order-state {
        background-color: #5eb95e;
        color: #FFFFFF;
        margin-left: 10px;
        padding: 2px 5px 2px 5px;
        font-size: 12px;
    }

    .un-order-state {
        background-color: #999;
        color: #FFFFFF;
        margin-left: 10px;
        padding: 2px 5px 2px 5px;
        font-size: 12px;
    }
</style>