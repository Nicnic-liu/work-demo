<template>
    <el-form ref="form" :model="inputForm" label-width="100px">
        <el-form-item label="提示文字">
            <el-input size="mini" @blur="placeChange($event)"
                      v-model="inputForm.placeholder"></el-input>
        </el-form-item>
        <el-form-item label="搜索框样式">
            <el-radio-group @change="inputStyleChange()" size="mini"
                            v-model="inputForm.inputStyle">
                <el-radio :label="1">方形</el-radio>
                <el-radio :label="2">圆角</el-radio>
                <el-radio :label="3">圆弧</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="文字对齐">
            <el-radio-group @change="textStyleChange()" size="mini"
                            v-model="inputForm.textStyle">
                <el-radio :label="1">居左</el-radio>
                <el-radio :label="2">居中</el-radio>
                <el-radio :label="3">居右</el-radio>
            </el-radio-group>
        </el-form-item>
    </el-form>
</template>
<script>
    /**
     * 输入框样式
     *
     *@date 2019-10-04
     *@author liuzhuang
     */
    export default {
        name: '',
        props: {
            styles: Object
        },
        data() {
            return {
                inputForm: {
                    placeholder: '',
                    inputStyle: '',
                    textStyle: ''
                },
                data: []
            }
        },
        methods: {
            /**
             * 修改placeholder
             *
             * @param e
             */
            placeChange(e) {
                this.emitData();
            },
            /**
             * 输入框样式修改
             */
            inputStyleChange() {
                this.emitData();
            },
            /**
             * 文字样式修改
             */
            textStyleChange() {
                this.emitData();
            },
            emitData() {
                this.data[0] = this.inputForm.placeholder;
                let x = this.inputForm.inputStyle;
                switch (x) {
                    case 1:
                        this.data[1] = '0px';
                        break
                    case 2:
                        this.data[1] = '10px';
                        break
                    case 3:
                        this.data[1] = '25px';
                        break
                }
                ;
                let y = this.inputForm.textStyle;
                switch (y) {
                    case 1:
                        this.data[2] = 'left';
                        break
                    case 2:
                        this.data[2] = 'center';
                        break
                    case 3:
                        this.data[2] = 'right';
                        break
                }
                this.$emit('inputStyleChange',this.data)
                //console.log(this.data)
            }
        },
        mounted() {
            this.inputForm.placeholder = this.styles.x;
            let border = this.styles.y;
            switch (border) {
                case '10px':
                    this.inputForm.inputStyle = 2
                    break
                case '0px':
                    this.inputForm.inputStyle = 1
                    break
                case '25px':
                    this.inputForm.inputStyle = 3
                    break
                case '':
                    this.inputForm.inputStyle = 2
                    break
            }
            let text = this.styles.z
            switch (text) {
                case 'left':
                    this.inputForm.textStyle = 1
                    break
                case 'center':
                    this.inputForm.textStyle = 2
                    break
                case 'right':
                    this.inputForm.textStyle = 3
                    break
                case '':
                    this.inputForm.textStyle = 1
                    break
            }
        },
        watch:{
            styles(){
                this.inputForm.placeholder = this.styles.x;
                let border = this.styles.y;
                switch (border) {
                    case '10px':
                        this.inputForm.inputStyle = 2
                        break
                    case '0px':
                        this.inputForm.inputStyle = 1
                        break
                    case '25px':
                        this.inputForm.inputStyle = 3
                        break
                    case '':
                        this.inputForm.inputStyle = 2
                        break
                }
                let text = this.styles.z
                switch (text) {
                    case 'left':
                        this.inputForm.textStyle = 1
                        break
                    case 'center':
                        this.inputForm.textStyle = 2
                        break
                    case 'right':
                        this.inputForm.textStyle = 3
                        break
                    case '':
                        this.inputForm.textStyle = 1
                        break
                }
            }
        }
    }
</script>
<style scoped>

</style>