<template>
  <div>
    <el-upload
      :data="dataObj"
      :file-list="fileList"
      :before-upload="beforeUpload"
      :on-remove="handleRemove"
      :on-success="handleUploadSuccess"
      :on-preview="handlePreview"
      :limit="maxCount"
      :on-exceed="handleExceed"
      :action="action"
      list-type="picture-card"
    >
      <i class="el-icon-plus" />
      <div slot="tip" class="el-upload__tip">商品图片不超过3MB</div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img :src="dialogImageUrl" width="100%" alt="">
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'MultiUpload',
  props: {
    // 图片属性数组
    value: {
      type: Array,
      default: () => []
    },
    uploadType: Number,
    // 最大上传图片数量
    maxCount: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      action: 'http://192.168.1.199:7898/aliyun/uploadImg',
      dataObj: { type: this.uploadType },
      dialogVisible: false,
      dialogImageUrl: null
    }
  },
  computed: {
    fileList() {
      const fileList = []
      for (let i = 0; i < this.value.length; i++) {
        fileList.push({ url: this.value[i] })
      }
      return fileList
    }
  },
  methods: {
    emitInput(fileList) {
      const value = []
      for (let i = 0; i < fileList.length; i++) {
        value.push(fileList[i].url)
      }
      this.$emit('input', value)
    },
    handleRemove(file, fileList) {
      this.emitInput(fileList)
    },
    handlePreview(file) {
      this.dialogVisible = true
      this.dialogImageUrl = file.url
    },
    beforeUpload(file) {
      const isLt3M = file.size / 1024 / 1024 < 3

      if (!isLt3M) {
        this.$message.error('上传图片大小不能超过 3MB!')
      }
      return isLt3M
    },
    handleUploadSuccess(res, file, filelist) {
      this.fileList.push({ name: file.name, url: file.response })
      this.emitInput(this.fileList)
    },
    handleExceed(files, fileList) {
      this.$message({
        message: '最多只能上传' + this.maxCount + '张图片',
        type: 'warning',
        duration: 1000
      })
    }
  }
}
</script>
<style>

</style>

