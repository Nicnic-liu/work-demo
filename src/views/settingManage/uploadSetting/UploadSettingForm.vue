<template>
    <section class="p-page">
        <div class="m-s">
            <el-form :model="listForm" ref="listForm" label-width="250px">
                <el-row :gutter="20" class="mt20">
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <PageHeader :pageName="pageName"></PageHeader>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="默认上传方式 " prop="uploadMethod">
                            <el-radio-group v-model="listForm.uploadMethod">
                                <el-radio :label="1">本地(不推荐)</el-radio>
                                <el-radio :label="2">七牛云存储</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <div v-if="listForm.uploadMethod == 2">
                        <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <el-form-item label="存储空间名称 Bucket" prop="storageName">
                                <el-input size="small" v-model="listForm.storageName" clearable></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <el-form-item label="ACCESS_KEY AK" prop="accessKey">
                                <el-input size="small" v-model="listForm.accessKey" clearable></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <el-form-item label="SECRET_KEY SK" prop="secretKey">
                                <el-input size="small" v-model="listForm.secretKey" clearable></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <el-form-item label="空间域名 Domain" prop="domainName">
                                <el-input size="small" v-model="listForm.domainName" clearable></el-input>
                                <div>
                                    <span class="description">例如：http://static.cloud.com</span>
                                </div>
                            </el-form-item>
                        </el-col>
                    </div>
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
     * 上传设置
     *
     *@date 2019-09-25
     *@author liuzhuang
     */

    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    export default {
        name: 'UploadSettingForm',
        components: {
            PageHeader
        },
        data() {
            return {
                pageName: '文件上传设置',
                listForm: {
                    uploadMethod: 1,
                    storageName: '',
                    accessKey: '',
                    secretKey: '',
                    domainName: '',
                },
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
        },
        mounted() {
        },
        watch: {
            'listForm.uploadMethod'(val) {
                if (val == 1) {
                    this.listForm = {
                        uploadMethod: 1,
                        storageName: '',
                        accessKey: '',
                        secretKey: '',
                        domainName: '',
                    }
                }
            }
        }
    }
</script>
<style scoped>
    .el-input {
        width: 85% !important;
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