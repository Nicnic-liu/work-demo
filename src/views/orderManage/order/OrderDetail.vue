<template>
    <section class="p-page">
        <div class="o-page">
            <el-steps :active="orderMoment(orderDetail.orderState)" finish-status="success" align-center>
                <el-step title="下单时间" :description="orderDetail.createTime"></el-step>
                <el-step title="付款" :description="orderDetail.paymentTime"></el-step>
                <el-step title="发货" :description="orderDetail.shipTime"></el-step>
                <el-step title="收货" :description="orderDetail.receiptTime"></el-step>
                <el-step title="完成" :description="orderDetail.completeTime"></el-step>
            </el-steps>
            <div class="header">
                <PageHeader :pageName="pageName"></PageHeader>
            </div>
            <el-table
                    :data="basic"
                    border
                    :header-cell-style="{'color': '#000000'}"
                    style="width: 100%">
                <el-table-column
                        align="center"
                        prop="orderNo"
                        label="订单号">
                </el-table-column>
                <el-table-column
                        align="center"
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
                        label="交易状态">
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
            </el-table>
            <div class="header">
                <PageHeader :pageName="goodsInfo"></PageHeader>
            </div>
            <el-table
                    :data="basic"
                    border
                    :header-cell-style="{'color': '#000000'}"
                    style="width: 100%">
                <el-table-column
                        align="center"
                        label="商品信息"
                        width="380">
                    <div class="order-info" slot-scope="scope">
                        <img :src="scope.row.img"/>
                        <span>{{scope.row.goodsName}}</span>
                    </div>
                </el-table-column>
                <el-table-column
                        align="center"
                        label="商品编码">
                    <template slot-scope="scope">
                        --
                    </template>
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="weight"
                        label="重量(Kg)">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="price"
                        label="单价">
                </el-table-column>
                <el-table-column
                        align="center"
                        label="购买数量">
                    <template slot-scope="scope">
                        <span>x{{scope.row.saleAmount}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        align="center"
                        label="商品总价">
                    <template slot-scope="scope">
                        <span>￥{{parseInt(scope.row.price) * parseInt(scope.row.saleAmount)}}</span>
                    </template>
                </el-table-column>
            </el-table>
            <div class="amount-price">
                <span>总计金额:￥{{parseInt(orderDetail.price) * parseInt(orderDetail.saleAmount) + parseInt(orderDetail.fare)}}</span>
            </div>
            <div class="header">
                <PageHeader :pageName="receiptInfo"></PageHeader>
            </div>
            <el-table
                    :data="basic"
                    border
                    :header-cell-style="{'color': '#000000'}"
                    style="width: 100%">
                <el-table-column
                        prop="receiver"
                        align="center"
                        label="收货人">
                </el-table-column>
                <el-table-column
                        prop="phone"
                        align="center"
                        label="收货电话">
                </el-table-column>
                <el-table-column
                        prop="address"
                        align="center"
                        label="收货地址">
                </el-table-column>
            </el-table>
        </div>
    </section>
</template>
<script>
    /**
     * 订单详情
     *
     *@date 2019-09-22
     *@author liuzhuang
     */

    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    export default {
        name: 'OrderDetail',
        components: {
            PageHeader
        },
        data() {
            return {
                pageName: '基本信息',
                goodsInfo: '商品信息',
                receiptInfo: '收货信息',
                orderDetail: {},
                basic: []
            }
        },
        methods: {
            /**
             * 订单状态格式化
             *
             * @param val
             * @returns {number|*}
             */
            orderMoment(val) {
                if (val == 3) {
                    return 5;
                } else {
                    return val + 1;
                }
            }
        },
        mounted() {
            if (this.$route.query.detail) {
                this.orderDetail = this.$route.query.detail;
                this.basic.push(this.orderDetail);
            }
        }
    }
</script>
<style scoped>
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

    .amount-price {
        width: 99.8%;
        height: 40px;
        border-left: 1px solid #EBEEF5;
        border-right: 1px solid #EBEEF5;
        border-bottom: 1px solid #EBEEF5;
        align-items: end;
        text-align: end;
        font-size: 14px;
    }

    .amount-price span {
        line-height: 40px;
        color: #333333;
        margin-right: 10px;
    }

    .header {
        margin-top: 40px;
    }

    .o-page {
        margin: 40px 0 40px 0;
    }
</style>