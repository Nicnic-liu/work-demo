<template>
    <section class="p-page">
        <div class="m-s">
            <el-form :model="listForm" :rules="rule" ref="listForm" label-width="250px">
                <el-row :gutter="20" class="mt20">
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <PageHeader :pageName="pageName"></PageHeader>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="未支付订单" prop="unpaid">
                            <el-input-number size="small" v-model="listForm.unpaid" controls-position="right"
                                             :min="0" :max="30"></el-input-number>
                            <span class="day-des">天后自动关闭</span>
                            <div>
                                <span class="description">订单下单未付款，n天后自动关闭，设置0天不自动关闭</span>
                            </div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="已发货订单" prop="shipped">
                            <el-input-number size="small" v-model="listForm.shipped" controls-position="right"
                                             :min="0" :max="15"></el-input-number>
                            <span class="day-des">天后自动确认收货</span>
                            <div>
                                <span class="description">如果在期间未确认收货，系统自动完成收货，设置0天不自动收货</span>
                            </div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <PageHeader :pageName="pageName2"></PageHeader>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="运费组合策略">
                            <el-radio v-model="listForm.radio" :label="1">叠加</el-radio>
                            <div>
                                <span class="description">订单中的商品有多个运费模板时，将每个商品的运费之和订为订单总运费</span>
                            </div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item>
                            <el-radio v-model="listForm.radio" :label="2">以最低运费结算</el-radio>
                            <div>
                                <span class="description">订单中的商品有多个运费模板时，取订单中运费最少的商品的运费计为订单总运费</span>
                            </div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item>
                            <el-radio v-model="listForm.radio" :label="3">以最高运费结算</el-radio>
                            <div>
                                <span class="description">订单中的商品有多个运费模板时，取订单中运费最多的商品的运费计为订单总运费</span>
                            </div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item>
                            <el-button type="primary" size="small" @click="submitSetting('listForm')">提交</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </section>
</template>
<script>
    /**
     * 交易设置
     *
     *@date 2019-09-25
     *@author liuzhuang
     */

    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    export default {
        name: 'DealSettingForm',
        components: {
            PageHeader
        },
        data() {
            return {
                pageName: '订单流程设置',
                pageName2: '运费设置',
                listForm: {
                    unpaid: '',
                    shipped: '',
                    radio: 1,
                },
                rule: {
                    unpaid: [
                        {required: true, message: '请输入未支付订单数', trigger: 'blur'},
                    ],
                    shipped: [
                        {required: true, message: '请输入已发货订单数', trigger: 'blur'},
                    ],
                }
            }
        },
        methods: {
            /**
             * 提交设置
             *
             * @param formName
             */
            submitSetting(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log(this.listForm)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        },
        mounted() {
        }
    }
</script>
<style scoped>
    .el-input {
        width: 85% !important;
    }

    .el-form-item {
        margin-bottom: 15px !important;
    }

    .description {
        color: #838fa1;
        font-size: 13px;
    }

    .day-des {
        margin-left: 10px;
        font-size: 14px;
        color: #656565;
    }
</style>