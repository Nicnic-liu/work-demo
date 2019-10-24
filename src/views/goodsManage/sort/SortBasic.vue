<template>
    <section class="p-page">
        <div class="goods-detail">
            <el-form :model="listForm" :rules="rules" ref="listForm" label-width="16.6%">
                <el-row :gutter="20" class="mt20">
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <PageHeader :pageName="basic"></PageHeader>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="分类名称" prop="sortName">
                            <el-input size="small" v-model="listForm.sortName" clearable=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="上级分类" prop="supSort">
                            <el-select size="small" v-model="listForm.supSort" placeholder="请选择上级分类" clearable
                                       filterable>
                                <el-option v-for="(item,index) in sortOptions"
                                           :key="index"
                                           :label="item.sortName"
                                           :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="分类图片" prop="sortImg">
                            <SingleUpload size="mini" v-model="listForm.sortImg" :upload-type="70"></SingleUpload>
                            <span class="upload-description">尺寸150x150像素以上，大小2M以下</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="分类排序" prop="sortRang">
                            <el-input-number v-model="listForm.sortRang" size="small" controls-position="right" :min="1"
                                             :max="1000"></el-input-number>
                            <br>
                            <span class="upload-description">数字越小越靠前</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item>
                            <el-button type="primary" size="small" @click="addGoods('listForm')">提交</el-button>
                            <el-button size="small">返回</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </section>
</template>
<script>
    /**
     * 类别新增
     *
     *@date 2019-09-22
     *@author liuzhuang
     */

    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';
    //引入上传组件
    import SingleUpload from '@/components/upload/SingleUpload.vue'

    export default {
        name: 'SortBasic',
        components: {
            PageHeader,
            SingleUpload
        },
        data() {
            return {
                basic: '添加商品分类',
                listForm: {
                    //类名
                    sortName: '',
                    //上级分类
                    supSort: '',
                    //商品图片
                    sortImg: '',
                    //分类排序
                    sortRang: null,
                },
                rules: {
                    //类名
                    sortName: [
                        {required: true, message: '请输入类别名称', trigger: 'blur'},
                    ],
                    //上级分类
                    supSort: [
                        {required: true, message: '请选择上级分类', trigger: 'change'},
                    ],
                    //排序
                    sortRang: [
                        {required: true, message: '请选择商分类排序', trigger: 'change'},
                    ],
                },
                sortOptions: [],
            }
        },
        methods: {
            /**
             * 商品分类下拉数据
             */
            getSortList() {
                this.axios.get('/jsonData/sorts.json').then(res => {
                    let list = res.data.list;
                    let data = [];
                    for (let i = 0; i < list.length; i++) {
                        if (list[i].sortChildren.length == 0) {
                            data.push(list[i]);
                        } else {
                            data.push(list[i]);
                            for (let j = 0; j < list[i].sortChildren.length; j++) {
                                data.push(list[i].sortChildren[j]);
                            }
                        }
                    }
                    let param = {
                        id: 0,
                        sortName: "顶级分类",
                        sortChildren: [],
                        rangeNo: 1,
                        addTime: "2019-06-55 21:52:41"
                    }
                    data.splice(0, 0, param);
                    this.sortOptions = data;
                })
            },
            /**
             * 提交
             *
             * @param formName
             */
            addGoods(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        },
        mounted() {
            this.getSortList();
            if (this.$route.query.id) {
                this.basic = '修改商品分类'
            }
        }
    }
</script>
<style scoped>
    .el-input {
        width: 85% !important;
    }

    .upload-description {
        color: #838fa1;
        font-size: 13px;
    }

    .el-input__inner {

        width: 1000px;
    }

</style>