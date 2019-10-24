<template>
    <section class="p-page">
        <div class="m-s">
            <el-form :model="listForm" ref="listForm" label-width="250px">
                <el-row :gutter="20" class="mt20">
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <PageHeader :pageName="pageName"></PageHeader>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="数据缓存" prop="checkList">
                            <el-checkbox-group v-model="listForm.checkList">
                                <el-checkbox :label="1">商城设置</el-checkbox>
                                <el-checkbox :label="2">商品分类</el-checkbox>
                                <el-checkbox :label="3">小程序设置</el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </el-col>
                    <el-col v-if="flag == true" :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="强制模式" prop="forceMode">
                            <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <el-radio-group v-model="listForm.forceMode">
                                    <el-radio :label="0">否</el-radio>
                                    <el-radio :label="1">是</el-radio>
                                </el-radio-group>
                            </el-col>
                            <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                                <span class="danger-description">此操作将会强制清空缓存目录，包含用户授权登录状态、用户购物车数据，仅允许在开发环境中使用</span>
                            </el-col>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item>
                            <el-link type="primary" @click="changeMode()" :underline="false">{{flag ==
                                false?'进入强制模式':'取消强制模式'}}
                            </el-link>
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
     * 清理缓存
     *
     *@date 2019-09-25
     *@author liuzhuang
     */

    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    export default {
        name: 'CleanCacheForm',
        components: {
            PageHeader
        },
        data() {
            return {
                pageName: '清理缓存',
                listForm: {
                    checkList: [1, 2, 3],
                    forceMode: 0
                },
                flag: false
            }
        },
        methods: {
            /**
             * 进入强制模式
             */
            changeMode() {
                this.flag = !this.flag;
            }
        },
        mounted() {
        }
    }
</script>
<style scoped>
    .danger-description {
        color: red;
        font-size: 13px;
    }
</style>