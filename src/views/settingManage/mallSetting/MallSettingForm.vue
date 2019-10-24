<template>
    <section class="p-page">
        <div class="m-s">
            <el-form :model="listForm" :rules="rule" ref="listForm" label-width="250px">
                <el-row :gutter="20" class="mt20">
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <PageHeader :pageName="pageName"></PageHeader>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="商城名称" prop="mallName">
                            <el-input size="small" v-model="listForm.mallName" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="是否显示首页公告" prop="radio">
                            <el-radio-group v-model="listForm.radio">
                                <el-radio :label="1" disabled>开启</el-radio>
                                <el-radio :label="2" disabled>关闭</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="首页公告内容" prop="">
                            <el-input size="small" v-model="listForm.detail" clearable></el-input>
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
     * 商城设置
     *
     *@date 2019-09-25
     *@author liuzhuang
     */

    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    export default {
        name: 'MallSettingForm',
        components: {
            PageHeader
        },
        data() {
            return {
                pageName: '商城设置',
                listForm: {
                    mallName: '',
                    radio: 2,
                    detail: ''
                },
                rule: {
                    mallName: [
                        {required: true, message: '请输入商城名称', trigger: 'blur'},
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