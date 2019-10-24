<template>
    <section class="p-page">
        <div class="m-s">
            <el-form :model="listForm" :rules="rule" ref="listForm" label-width="240px">
                <el-row :gutter="20" class="mt20">
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <PageHeader :pageName="pageName"></PageHeader>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="小程序标题" prop="title">
                            <el-input size="small" placeholder="请输入标题" v-model="listForm.title" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="顶部导航文字颜色" prop="textColor">
                            <el-radio-group v-model="listForm.textColor">
                                <el-radio :label="1">黑色</el-radio>
                                <el-radio :label="2">白色</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="顶部导航背景色" prop="navColor">
                            <el-color-picker v-model="listForm.navColor"></el-color-picker>
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
     * 导航设置
     *
     *@date 2019-09-26
     *@author liuzhuang
     */

    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    export default {
        name: 'NavSetting',
        components: {
            PageHeader
        },
        data() {
            return {
                pageName: '顶部导航设置',
                listForm: {
                    title: '',
                    textColor: 1,
                    navColor: '#59ed12'
                },
                rule: {
                    title: [
                        {required: true, message: '请输入标题', trigger: 'blur'},
                    ],
                    textColor: [
                        {required: true, message: '请选择导航文字颜色', trigger: 'change'},
                    ],
                    navColor: [
                        {required: true, message: '请选择导航背景颜色', trigger: 'change'},
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