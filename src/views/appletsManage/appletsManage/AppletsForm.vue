<template>
    <section class="p-page">
        <div class="m-s">
            <el-form :model="listForm" :rules="rule" ref="listForm" label-width="250px">
                <el-row :gutter="20" class="mt20">
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <PageHeader :pageName="pageName"></PageHeader>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="AppID 小程序ID" prop="appId">
                            <el-input size="small" v-model="listForm.appId" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="AppSecret 小程序密钥 " prop="appSecret">
                            <el-input size="small" v-model="listForm.appSecret" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <PageHeader :pageName="pageName2"></PageHeader>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="微信支付商户号 MCHID" prop="mchId">
                            <el-input size="small" v-model="listForm.mchId" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="微信支付密钥 APIKEY" prop="apiKey">
                            <el-input size="small" v-model="listForm.apiKey" clearable></el-input>
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
     * 小程序设置
     *
     *@date 2019-09-26
     *@author liuzhuang
     */

    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    export default {
        name: '',
        components: {
            PageHeader
        },
        data() {
            return {
                pageName: '小程序设置',
                pageName2: '微信支付设置',
                listForm: {
                    appId: '',
                    appSecret: '',
                    mchId: '',
                    apiKey: ''
                },
                rule: {
                    appId: [
                        {required: true, message: '请输入AppID', trigger: 'blur'},
                    ],
                    appSecret: [
                        {required: true, message: '请输入AppSecret ', trigger: 'blur'},
                    ],
                    mchId: [
                        {required: true, message: '请输入微信支付商户号', trigger: 'blur'},
                    ],
                    apiKey: [
                        {required: true, message: '请输入微信支付密钥', trigger: 'blur'},
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
</style>