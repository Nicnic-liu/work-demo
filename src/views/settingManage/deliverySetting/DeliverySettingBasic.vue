<template>
    <section class="p-page">
        <div class="m-s">
            <el-form :model="listForm" ref="listForm" label-width="160px">
                <el-row :gutter="20" class="mt20">
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <PageHeader :pageName="pageName"></PageHeader>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="模板名称" prop="temName">
                            <el-input size="small" v-model="listForm.temName" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="计费方式" prop="billMethod">
                            <el-radio-group v-model="listForm.billMethod">
                                <el-radio :label="1">按件数</el-radio>
                                <el-radio :label="2">按重量</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="配送区域及运费" prop="goodsName">
                            <div class="table-c">
                                <table width="90%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td width="40%">可配送区域</td>
                                        <td width="15%">{{listForm.billMethod == 1?'首件 (个)':'首重 (Kg)'}}</td>
                                        <td width="15%">运费 (元)</td>
                                        <td width="15%">{{listForm.billMethod == 1?'续件 (个)':'续重 (Kg)'}}</td>
                                        <td width="15%">续费 (元)</td>
                                    </tr>
                                    <tr v-if="flag == true" v-for="(item,index) in listForm.region ">
                                        <td>
                                            {{checkedCities.length ==
                                            cityList.length?'全国':formatCityName(item.citys)}}
                                        </td>
                                        <td>
                                            <el-input-number size="small" v-model="item.A"
                                                             controls-position="right" :min="1"
                                                             :max="150"></el-input-number>
                                        </td>
                                        <td>
                                            <el-input-number size="small" v-model="item.B"
                                                             controls-position="right" :min="1"
                                                             :max="150"></el-input-number>
                                        </td>
                                        <td>
                                            <el-input-number size="small" v-model="item.C"
                                                             controls-position="right" :min="1"
                                                             :max="150"></el-input-number>
                                        </td>
                                        <td>
                                            <el-input-number size="small" v-model="item.D"
                                                             controls-position="right" :min="1"
                                                             :max="150"></el-input-number>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="5" style="text-align: start;padding-left: 10px">
                                            <el-button size="mini" icon="el-icon-location-outline" @click="changeFlag()"
                                                       type="info" plain>
                                                点击添加可配送区域和运费
                                            </el-button>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <el-form-item label="排序" prop="sort">
                            <el-input-number size="small" v-model="listForm.sort" controls-position="right" :min="1"
                                             :max="150"></el-input-number>
                            <div>
                                <span class="description">数字越小越靠前</span>
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
        <el-dialog title="选择可配送区域" width="60%" :visible.sync="deliveryAddressVisible">
            <el-row :gutter="20" class="mt20">
                <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <div class="del-header">
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll"
                                     @change="handleCheckAllChange">全国
                        </el-checkbox>
                        <el-link :underline="false">清空</el-link>
                    </div>
                </el-col>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <template v-for="(item,index) in cityList">
                        <el-col :span="6" :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                            <div class="del-city">
                                <el-checkbox :label="item.id" :key="item.id">{{item.areaname}}</el-checkbox>
                            </div>
                        </el-col>
                    </template>
                </el-checkbox-group>
            </el-row>
            <div slot="footer" class="dialog-footer">
                <el-button @click="deliveryAddressVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitCity()">确 定</el-button>
            </div>
        </el-dialog>
    </section>
</template>
<script>
    /**
     * 运费模板新增
     *
     *@date 2019-09-27
     *@author liuzhuang
     */

    // 引入页头组件
    import PageHeader from '@/components/common/PageHeader.vue';

    export default {
        name: 'DeliverySettingBasic',
        components: {
            PageHeader
        },
        data() {
            return {
                listForm: {
                    temName: '',
                    billMethod: 1,
                    sort: '',
                    region: [],
                },
                //选中的城市
                checkedCities: [],
                isIndeterminate: true,
                checkAll: false,
                //配送区域状态
                flag: false,
                //页头名称
                pageName: '',
                //模态框
                deliveryAddressVisible: false,
                //城市列表
                cityList: []
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
            /**
             * 显示编辑
             */
            changeFlag() {
                this.deliveryAddressVisible = true;
                this.checkedCities = [];
            },
            /**
             * 获取城市数据
             */
            getCityList() {
                this.axios.get('/jsonData/citys.json').then(res => {
                    this.cityList = res.data.info;
                })
            },
            /**
             * 全选
             *
             * @param val
             */
            handleCheckAllChange(val) {
                let arr = [];
                for (let i = 0; i < this.cityList.length; i++) {
                    arr.push(this.cityList[i].id);
                }
                this.checkedCities = val ? arr : [];
                this.isIndeterminate = false;
            },
            /**
             * 选择城市change
             *
             * @param value
             */
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cityList.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cityList.length;
            },
            /**
             * 确认选择的城市
             */
            submitCity() {
                this.deliveryAddressVisible = false;
                if (!this.checkedCities.length > 0) {
                    return false;
                }
                this.flag = true;
                let cityName = [];
                for (let i = 0; i < this.cityList.length; i++) {
                    for (let j = 0; j < this.checkedCities.length; j++) {
                        if (this.cityList[i].id == this.checkedCities[j]) {
                            cityName.push({name: this.cityList[i].areaname, id: this.cityList[i].id})
                        }
                    }
                }
                this.listForm.region.push({citys: cityName});
            },
            /**
             *格式化城市文字
             */
            formatCityName(val) {
                let str = '';
                for (let i = 0; i < val.length; i++) {
                    str = str + val[i].name + ' ';
                }
                return str;
            }
        },
        mounted() {
            this.getCityList()
            if (this.$route.query.id) {
                this.pageName = '编辑运费模版'
            } else {
                this.pageName = '新增运费模版'
            }
        }
    }
</script>
<style lang="scss" scoped>

    .el-input {
        width: 85% !important;
    }

    .description {
        color: #838fa1;
        font-size: 13px;
    }

    .table-c table {
        border-right: 1px solid #ddd;
        border-bottom: 1px solid #ddd
    }

    .table-c table td {
        text-align: center;
        border-left: 1px solid #ddd;
        border-top: 1px solid #ddd;

        .el-input-number--small {
            width: 90% !important;
        }
    }

    .del-header {
        text-align: end;
        line-height: 30px;
        width: 100%;
        height: 30px;
        color: #333333;
        background-color: #FBFBFB;

        .el-link {
            margin: 0 10px 0 10px;
            line-height: 30px;
            font-size: 15px;
        }
    }

    .del-city {
        width: 100%;
        height: 30px;
        line-height: 30px;
        margin-top: 5px;
    }
</style>