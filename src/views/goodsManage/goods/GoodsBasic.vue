<template>
    <section class="p-page">
        <div class="goods-detail">
            <el-form :model="listForm" :rules="rules" ref="listForm" label-width="160px">
                <el-row :gutter="20" class="mt20">
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <PageHeader :pageName="basic"></PageHeader>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="商品名称" prop="goodsName">
                            <el-input size="small" v-model="listForm.goodsName" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="11" :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
                        <el-form-item label="商品分类" prop="goodsSort">
                            <div class="activity-place">
                                <el-select size="small" v-model="listForm.goodsSort" placeholder="请选择商品分类" clearable
                                           filterable>
                                    <el-option v-for="(item,index) in sortOptions"
                                               :key="index"
                                               :label="item.sortName"
                                               :value="item.id">
                                    </el-option>
                                </el-select>
                                <span class="add-description" @click="goAddSort()">去添加</span>
                            </div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2" :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="商品图片" prop="goodsImg">
                            <SingleUpload size="mini" v-model="listForm.goodsImg" :upload-type="70"></SingleUpload>
                            <span class="upload-description">尺寸750x750像素以上，大小2M以下 (可拖拽图片调整显示顺序 )</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <PageHeader :pageName="norm"></PageHeader>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="商品规范" prop="goodsNorm">
                            <el-radio-group v-model="listForm.goodsNorm">
                                <el-radio :label="1">单规格</el-radio>
                                <el-radio :label="2">多规格</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <div v-if="listForm.goodsNorm == 1">
                        <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <el-form-item label="商品编码" prop="goodsCode">
                                <el-input size="small" v-model="listForm.goodsCode"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <el-form-item label="商品价格" prop="goodsPrice">
                                <el-input size="small" v-model="listForm.goodsPrice"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <el-form-item label="商品划线价" prop="goodsCrossPrice">
                                <el-input size="small" v-model="listForm.goodsCrossPrice"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <el-form-item label="当前库存数量" prop="goodsAmount">
                                <el-input size="small" v-model="listForm.goodsAmount"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <el-form-item label="商品重量(Kg)" prop="goodsWeight">
                                <el-input size="small" v-model="listForm.goodsWeight"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <el-form-item label="库存计算方式" prop="amountMethod">
                                <el-radio-group v-model="listForm.amountMethod">
                                    <el-radio :label="1">下单减库存</el-radio>
                                    <el-radio :label="2">付款减库存</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                    </div>
                    <div v-if="listForm.goodsNorm == 2">
                        <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <el-form-item>
                                <div class="addNorm">
                                    <el-button v-if="flag == true" type="primary" size="small" @click="changeFlag()"
                                               plain>添加规格
                                    </el-button>
                                    <el-form class="addNorm-form" v-else ref="normForm" :model="normForm"
                                             label-width="60px">
                                        <el-form-item label="规格名">
                                            <el-input size="mini" v-model="normForm.normName"></el-input>
                                        </el-form-item>
                                        <el-form-item label="规格值">
                                            <el-input size="mini" v-model="normForm.normValue"></el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button size="mini" type="primary">确定</el-button>
                                            <el-button size="mini" @click="flag = true">取消</el-button>
                                        </el-form-item>
                                    </el-form>
                                </div>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <el-form-item label="库存计算方式" prop="amountMethod">
                                <el-radio-group v-model="listForm.amountMethod">
                                    <el-radio label="下单减库存"></el-radio>
                                    <el-radio label="付款减库存"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                    </div>

                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <PageHeader :pageName="detail"></PageHeader>
                    </el-col>
                    <el-col :span="20" :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
                        <el-form-item label="商品详情" prop="goodsDetail">
                            <Editor v-model="listForm.goodsDetail" class="editor" :is-clear="isClear"></Editor>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <PageHeader :pageName="other"></PageHeader>
                    </el-col>
                    <el-col :span="11" :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
                        <el-form-item label="运费模板" prop="goodsFare">
                            <div class="activity-place">
                                <el-select size="small" v-model="listForm.goodsFare" placeholder="请选择运费模板" clearable
                                           filterable>
                                    <el-option v-for="(item,index) in postalOptions"
                                               :key="index"
                                               :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                                <span class="add-description" @click="goAddTem()">去添加</span>
                            </div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="商品状态" prop="goodsState">
                            <el-radio-group v-model="listForm.goodsState">
                                <el-radio :label="1">上架</el-radio>
                                <el-radio :label="2">下架</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="初始销量" prop="initSalesVolume">
                            <el-input-number v-model="listForm.initSalesVolume" size="small" controls-position="right"
                                             :min="1" :max="1000"></el-input-number>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="商品排序" prop="goodsSequence">
                            <el-input-number v-model="listForm.goodsSequence" size="small" controls-position="right"
                                             :min="1" :max="1000"></el-input-number>
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
     * 商品新增&修改
     *
     *@date 2019-09-20
     *@author liuzhuang
     */

    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';
    //引入上传组件
    import SingleUpload from '@/components/upload/SingleUpload.vue'
    //引入富文本
    import Editor from '@/components/common/TheWangEditor.vue';
    // 引入校验
    //import GoodsAddValidate from '@/validate/goodsManage/GoodsAddValidate.js'

    export default {
        name: 'GoodsBasic',
        components: {
            PageHeader,
            SingleUpload,
            Editor
        },
        data() {
            return {
                basic: '基本信息',
                norm: '规格/库存',
                detail: '商品详情',
                other: '其他',
                // 富文本isClear
                isClear: false,
                flag: true,
                listForm: {
                    //商品名
                    goodsName: '',
                    //商品分类
                    goodsSort: '',
                    //商品图片
                    goodsImg: '',
                    //商品规范
                    goodsNorm: 1,
                    //商品编码
                    goodsCode: '',
                    //商品价格
                    goodsPrice: '',
                    //商品划线价
                    goodsCrossPrice: '',
                    //商品数量
                    goodsAmount: '',
                    //商品重量
                    goodsWeight: '',
                    //库存计算方式
                    amountMethod: 1,
                    //商品详情
                    goodsDetail: '',
                    //商品运费
                    goodsFare: '',
                    //商品状态
                    goodsState: 1,
                    //初始销量
                    initSalesVolume: '',
                    //商品排序
                    goodsSequence: '',
                },
                rules: {
                    //商品名
                    goodsName: [
                        {required: true, message: '请输入商品名称', trigger: 'blur'},
                    ],
                    //商品分类
                    goodsSort: [
                        {required: true, message: '请选择商品分类', trigger: 'change'},
                    ],
                    //商品图片
                    goodsImg: [
                        {required: true, message: '请上传商品图片', trigger: 'blur'},
                    ],
                    //商品规范
                    goodsNorm: [
                        {required: true, message: '请选择商品规范', trigger: 'change'},
                    ],
                    //商品编码
                    goodsCode: [
                        {required: true, message: '请输入商品编码', trigger: 'blur'},
                    ],
                    //商品价格
                    goodsPrice: [
                        {required: true, message: '请输入部商品价格', trigger: 'blur'},
                    ],
                    //商品划线价
                    goodsCrossPrice: [
                        {required: true, message: '请输入商品划线价', trigger: 'blur'},
                    ],
                    //商品数量
                    goodsAmount: [
                        {required: true, message: '请输入商品库存数量', trigger: 'blur'},
                    ],
                    //商品重量
                    goodsWeight: [
                        {required: true, message: '请输入商品重量', trigger: 'blur'},
                    ],
                    //库存计算方式
                    amountMethod: [
                        {required: true, message: '请输入选择库存计算方式', trigger: 'change'},
                    ],
                    //商品详情
                    goodsDetail: [
                        {required: true, message: '请输入商品详情', trigger: 'blur'},
                    ],
                    //商品运费
                    goodsFare: [
                        {required: true, message: '请选择运费模板', trigger: 'change'},
                    ],
                    //商品状态
                    goodsState: [
                        {required: true, message: '请选择商品状态', trigger: 'change'},
                    ],
                    //初始销量
                    initSalesVolume: [
                        {required: true, message: '请输入初始销量', trigger: 'blur'},
                    ],
                    //商品排序
                    goodsSequence: [
                        {required: true, message: '请输入商品排序', trigger: 'blur'},
                    ],
                },
                normForm: {
                    //规格名
                    normName: '',
                    //规格值
                    normValue: ''
                },
                sortOptions: [],
                postalOptions: [
                    {
                        label: '全国包邮',
                        value: 1
                    },
                    {
                        label: '不包邮',
                        value: 2
                    },
                ]
            }
        },
        methods: {
            /**
             * 单选按钮切换
             */
            changeFlag() {
                this.flag = false;
            },
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
            /**
             * 去添加分类
             */
            goAddSort() {
                this.$router.push({
                    path: '/goods/sortBasic',
                })
            },
            /**
             * 去添加运费模板
             */
            goAddTem() {
                this.$router.push({
                    path: '/setting/deliveryBasic',
                })
            }
        },
        mounted() {
            this.getSortList()
        }
    }
</script>
<style lang="scss" scoped>
    .goods-detail {
        padding: 10px 20px 13px;
    }

    .el-input {
        width: 85% !important;
    }

    .upload-description {
        color: #838fa1;
        font-size: 13px;
    }

    .add-description {
        cursor: pointer;
        margin-left: 10px;
        color: #0e90d2;
        font-size: 13px;
        line-height: 42px;
    }

    .addNorm {
        width: 85%;
        height: auto;
        border: 1px solid #e4e4e4;
        margin-top: 10px;
        padding: 20px;
        border-radius: 4px;
    }

    .addNorm-form {
        .el-input {
            width: 160px !important;
        }
    }

    .activity-place {
        display: flex;
        flex-direction: row;

        .el-select {
            width: 200px !important;

        }
    }

</style>