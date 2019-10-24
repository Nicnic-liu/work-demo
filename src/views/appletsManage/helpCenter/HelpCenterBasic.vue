<template>
    <section class="p-page">
        <div class="m-s">
            <el-form :model="listForm" :rules="rule" ref="listForm" label-width="160px">
                <el-row :gutter="20" class="mt20">
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <PageHeader :pageName="pageName"></PageHeader>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="标题" prop="title">
                            <el-input size="small" placeholder="请输入标题" v-model="listForm.title" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="内容" prop="content">
                            <el-input
                                    type="textarea"
                                    :rows="2"
                                    placeholder="请输入帮助内容"
                                    v-model="listForm.content">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="排序" prop="sort">
                            <el-input-number size="small" v-model="listForm.sort" controls-position="right" :min="0"
                                             :max="150"></el-input-number>
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
     * 帮助新增
     *
     *@date 2019-09-26
     *@author liuzhuang
     */

    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    export default {
        name: 'HelpCenterBasic',
        components: {
            PageHeader
        },
        data() {
            return {
                pageName: '添加帮助',
                listForm: {
                    title: '',
                    content: '',
                    sort: ''
                },
                rule: {
                    title: [
                        {required: true, message: '请输入标题', trigger: 'blur'},
                    ],
                    content: [
                        {required: true, message: '请输入帮助内容', trigger: 'blur'},
                    ],
                    sort: [
                        {required: true, message: '请输入排序数', trigger: 'change'},
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

    .el-textarea {
        width: 85% !important;
    }
</style>