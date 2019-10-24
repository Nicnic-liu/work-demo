<template>
    <section class="p-page">
        <div class="m-s">
            <el-form :model="listForm" :rules="rule" ref="listForm" label-width="250px">
                <el-row :gutter="20" class="mt20">
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <PageHeader :pageName="pageName"></PageHeader>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="AccessKeyId" prop="keyId">
                            <el-input size="small" v-model="listForm.keyId" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="AccessKeySecret " prop="keySecret">
                            <el-input size="small" v-model="listForm.keySecret" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="短信签名 " prop="messageName">
                            <el-input size="small" v-model="listForm.messageName" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <PageHeader :pageName="pageName2"></PageHeader>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="是否开启短信提醒 " prop="messageStatus">
                            <el-radio-group v-model="listForm.messageStatus">
                                <el-radio :label="1">开启</el-radio>
                                <el-radio :label="0">关闭</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="模板ID Template Code" prop="temId">
                            <el-input size="small" v-model="listForm.temId" clearable></el-input>
                            <div>
                                <span class="description">例如：SMS_139800030</span>
                            </div>
                            <div>
                                <span class="description">模板内容：您有一条新订单，订单号为：${order_no}，请注意查看。</span>
                            </div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="接收手机号 " prop="mobile">
                            <el-input size="small" v-model="listForm.mobile" clearable></el-input>
                            <div>
                                <span class="description">接收测试：  </span>
                                <el-link :underline="false" @click="sendMessage()" type="primary">点击发送</el-link>
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
     * 短信设置
     *
     *@date 2019-09-25
     *@author liuzhuang
     */

    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    export default {
        name: 'MessageSettingForm',
        components: {
            PageHeader
        },
        data() {
            return {
                pageName: '短信通知（ 阿里云短信 )',
                pageName2: '新付款订单提醒',
                listForm: {
                    keyId: '',
                    keySecret: '',
                    messageName: '',
                    messageStatus: 1,
                    temId: '',
                    mobile: ''
                },
                rule: {
                    keyId: [
                        {required: true, message: '请输入keyId', trigger: 'blur'},
                    ],
                    keySecret: [
                        {required: true, message: '请输入keySecret', trigger: 'blur'},
                    ],
                    messageName: [
                        {required: true, message: '请输入短信签名', trigger: 'blur'},
                    ],
                    messageStatus: [
                        {required: true, message: '请选择是否开启短信提醒', trigger: 'change'},
                    ],
                    temId: [
                        {required: true, message: '请输入模板ID', trigger: 'blur'},
                    ],
                    mobile: [
                        {required: true, message: '请输入接收手机号', trigger: 'blur'},
                    ],
                }
            }
        },
        methods: {
            /**
             * 提交
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
            sendMessage() {
                this.$message.warning('暂无此功能！');
            }
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