<template>
    <div class="upload-con">
        <el-upload
            :data="dataObj"
            :multiple="false"
            :show-file-list="showFileList"
            :file-list="fileList"
            :before-upload="beforeUpload"
            :on-remove="handleRemove"
            :on-success="handleUploadSuccess"
            :on-preview="handlePreview"
            :action="action"
            list-type="picture">
            <el-button type="primary" size="mini" class="upload-btn"><i class="el-icon-upload2"/><span>点击上传</span></el-button>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img :src="fileList[0].url" width="100%" alt="">
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name: 'SingleUpload',
        props: {
            value: {
                type: String,
                default: () => ''
            },
            uploadType: Number
        },
        data() {
            return {
                action: `http://aliyun/uploadImg`,
                dataObj: { type: this.uploadType },
                dialogVisible: false
            }
        },
        computed: {
            imageUrl() {
                return this.value
            },
            imageName() {
                if (this.value != null && this.value !== '') {
                    return this.value.substr(this.value.lastIndexOf('/') + 1)
                } else {
                    return null
                }
            },
            fileList() {
                return [{
                    name: this.imageName,
                    url: this.imageUrl
                }]
            },
            showFileList: {
                get: function() {
                    return this.value !== null && this.value !== '' && this.value !== undefined
                },
                set: function(newValue) {
                }
            }
        },
        methods: {
            emitInput(val) {
                this.$emit('input', val)
            },
            handleRemove(file, fileList) {
                this.emitInput('')
            },
            handlePreview(file) {
                this.dialogVisible = true
            },
            beforeUpload(file) {
                const isLt3M = file.size / 1024 / 1024 < 3;

                if (!isLt3M) {
                    this.$message.error('上传图片大小不能超过 3MB!');
                }
                return isLt3M;
            },
            handleUploadSuccess(res, file, filelist) {
                this.showFileList = true
                this.fileList.pop()
                this.fileList.push({ name: file.name, url: filelist[1].response })
                this.emitInput(this.fileList[0].url)
            }
        }
    }
</script>
<style rel="stylesheet/css" scoped>
    .upload-btn i{color: #FFFFFF;font-size: 14px}
</style>

