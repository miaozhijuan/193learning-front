<template>
  <div>
    <r-card>
      <r-tabs v-model="common.tab">
        <r-tab-pane name="1" label="文件导入">
          <r-upload list-type="file" value="true" v-model="images" action="http://127.0.0.1:8000/upload_file/" :on-success="onSuccess" :on-error="onError" :on-remove="onRemove" :multiple="true" :on-preview="onPreview" :before-upload="beforeUpload" :limit="5">
            <r-button icon="ios-cloud-upload-outline">上传文件</r-button>
          </r-upload>
          <r-button type="primary"  :loading = "loading"  v-if="test" @click.native="sentJsonToElastic()">处理已上传文件</r-button>
        </r-tab-pane>
      </r-tabs>
    </r-card>
  </div>
</template>

<script>
import 'vue-upload-component/dist/vue-upload-component.part.css'
import FileUpload from 'vue-upload-component'
export default {
  name: 'fileupload',
  data () {
    return {
      loading: false,
      disabled: false,
      test: true,
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
  components: {FileUpload},
  methods: {
    async funA () {
      var res = await this.$axios.post('http://127.0.0.1:9200/lishikai_index000/_search', this.p) // 这里的res就是axios请求回来的结果
      let demo = res.data.hits
      console.log(demo)
      this.pageData = demo
    },
    async sentJsonToElastic () {
      this.loading = true
      console.log('发送json到elasticsearch')
      var res = await this.$axios.post('http://127.0.0.1:8000/sent_json_to_elasticsearch/')
      console.log(res)
      this.loading = false
      this.$message('处理完成', 'success')
    },
    onSuccess (res, file) {
      console.log(file)
      // eslint-disable-next-line no-unused-vars
      // let URL = window.URL || window.webkitURL
      // let url = null
      // if (window.createObjectURL !== undefined) { // basic
      //   url = window.createObjectURL(file)
      // } else if (window.webkitURL !== undefined) { // webkit or chrome
      //   url = URL.createObjectURL(file)
      // } else if (window.URL !== undefined) { // mozilla(firefox)
      //   url = window.URL.createObjectURL(file)
      // }
      // console.log(url)
      this.images.push({
        name: file.name,
        url: res.id
      })
      console.log('上传成功')
      this.$message(file.name + '上传成功', 'success')
      // 成功之后添加提交按钮
    },
    onError (e, res, file) {
      this.$message(file.name + '上传失败', 'error')
    },
    onRemove (file) {
      this.$message(file.name + '被删除', 'warning')
    },
    onPreview (file) {
      this.$alert(file.url)
    },
    beforeUpload (file, callback) {
      console.log(file)
      let url = null
      if (window.createObjectURL !== undefined) { // basic
        url = window.createObjectURL(file)
      } else if (window.webkitURL !== undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file)
      } else if (window.URL !== undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file)
      }
      console.log(url)
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
  .r-btn-primary {
    position: fixed;
    top:370px;
  }

  .r-card {
    height: 310px;
  }
</style>
