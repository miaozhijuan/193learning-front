<template>
  <div>
    <r-card>
      <r-tabs v-model="common.tab">
        <r-tab-pane name="1" label="文件导入">
          <r-upload v-model="images" action="http://127.0.0.1:8000/upload_file/" :on-success="onSuccess" :on-error="onError" :on-remove="onRemove" :multiple="true" :on-preview="onPreview" :before-upload="beforeUpload" :limit="5">
            <r-button icon="ios-cloud-upload-outline">上传文件</r-button>
          </r-upload>
          <r-button type="primary" v-if="test">处理已上传文件</r-button>
        </r-tab-pane>
      </r-tabs>
    </r-card>
  </div>
</template>

<script>
export default {
  name: 'fileupload',
  data () {
    return {
      test: false,
      common: {
        componentValue: '',
        activeMenu: '3-8',
        tab: '',
        tab2: ''
      },
      images: [
      ]
    }
  },
  methods: {
    onSuccess (res, file) {
      this.images.push({
        name: file.name,
        url: res.id
      })
      console.log('上传成功')
      this.$message(file.name + '上传成功', 'success')
      // 成功之后添加提交按钮
      this.test = true
    },
    onError (e, res, file) {
      this.$message(file.name + '上传失败', 'error')
    },
    onRemove (file) {
      this.$message(file.name + '被删除', 'warning')
      this.test = false
    },
    onPreview (file) {
      this.$alert(file.url)
    },
    beforeUpload (file, callback) {
      if (file.name.indexOf('.html') !== -1) {
        this.$message('不能上传.html')
        // eslint-disable-next-line standard/no-callback-literal
        callback(false)
      } else {
        // eslint-disable-next-line standard/no-callback-literal
        callback(true)
      }
    }
  }
}
</script>

<style scoped>

</style>
