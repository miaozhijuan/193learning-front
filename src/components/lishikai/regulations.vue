<template>
<div id="printTest">
<!--  <div class="crumbs">-->
<!--    <el-breadcrumb separator="/">-->
<!--      <el-breadcrumb-item>-->
<!--        <i class="el-icon-lx-cascades"></i> 基础表格-->
<!--      </el-breadcrumb-item>-->
<!--    </el-breadcrumb>-->
<!--  </div>-->
<r-tabs style="margin:10px;" v-model="tabsValue">
  <r-tab-pane name="pane1" label="规章规则推荐" icon="search">
    <!-- 搜索框 -->
    <r-form label-width="100" :model="formItem" :rules="ruleValidate" ref="myForm" inline="false">
      <div class="margin-top-10">
        <r-input v-model.trim="newAddText" @keyup.enter.native="keyupEnter" style="width:500px"></r-input>
        <r-button @click.native="addNewTag">搜索</r-button>
<!--        ion-ios-pricetags-outline       style="background-color: white ;border: 0;"-->
        <r-tag v-for='(list,index) in lists' v-bind:key='list.id' closeable type="primary"   @close="tagClose(index)" >
          <r-icon type="ios-pricetags-outline"></r-icon>  {{list.title}}
        </r-tag>
      </div>
<!--      <app-toolbar>-->
<!--        <el-button type="primary">新增</el-button>-->
<!--        <el-button type="primary" v-hasPermission="'edit'">修改</el-button>-->
<!--      </app-toolbar>-->
      <!--每次搜索一下记录关键词并生成对应的检索条件，点击叉号去处该标签-->
   <r-form-item  style="margin-left: 10px; position:relative;left: -430px;top: 20px;" label-width="400px">
<!--     <r-row>-->
<!--       <r-col>-->
<!--<div id="username" style="text-align:center;">用户名</div>-->
<!--       </r-col>-->
<!--      <r-col>-->
<!--        <r-input style="width:300px"></r-input>-->
<!--      </r-col>-->
<!--      <r-col offset="0">-->
<!--        <r-button  >搜索</r-button>-->
<!--      </r-col>-->
<!--    </r-row>-->

  </r-form-item>
    </r-form>
      <div id="id">
    <r-button-group>
<!--      <a href="javascript:;" id="download" style="float: right;color: #169bd5;font-size: 14px;padding-top: 7px" @click="download()" download="download.csv">导出</a>-->
  <r-button icon="plus-round" id="download" @click.native=" downloadExcel" >导出</r-button>
  <r-button icon="plus-round" icon-pos="after" v-print="'#printTest'">打印</r-button>
  <r-button icon="plus-round" @click.native="userOperation('editPaw')">新增</r-button>
  <r-button @click.native=" delete_all_pick()" >批量删除</r-button>
</r-button-group>
        <el-dialog title="新增专业分类" :visible.sync="dialog.editPaw.show" :modal-append-to-body="false" custom-class="editPawDialog">
<!--          <el-form :model="editPaw" :rules="editPawRules" ref="editPaw" label-width="100px" >-->
<!--            <el-form-item label="旧密码" prop="oldPaw">-->
<!--              <el-input v-model="editPaw.oldPaw" auto-complete="off"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="新密码" prop="newPaw">-->
<!--              <el-input v-model="editPaw.newPaw" auto-complete="off"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="确认新密码" prop="confirmNewPaw">-->
<!--              <el-input v-model="editPaw.confirmNewPaw" auto-complete="off"></el-input>-->
<!--            </el-form-item>-->
<!--          </el-form>-->
          <r-form  :model="formItem" :rules="ruleValidate" ref="myForm">
            <r-form-item label="类别" prop="input" >
              <el-input v-model="formItem.input" placeholder="请输入" trim> </el-input>
            </r-form-item>
            <r-form-item label="事故描述">
              <el-input v-model="formItem.textarea" type="textarea"></el-input>
            </r-form-item>
            <r-form-item style="margin-left: 100px;">
              <r-button @click.native="reset">reset</r-button>
              <r-button style="margin-left: 8px" type="primary" @click.native="submit">提交</r-button>
            </r-form-item>
          </r-form>
<!--          <div class="textC">-->
<!--            <el-button type="primary" @click="editPawSubmit">保存</el-button>-->
<!--          </div>-->
        </el-dialog>
</div>
    <!-- table表格 -->
    <div id="idtable">
    <r-table :data="data1"  :loading="loading" ref="table" :border="true" :show-header="true" :sort-method="sort" :sort-field="sortField" :sort-dir="sortDir" @check-change="rowClick"  >
<!--  <r-table-column width="50" type="expand" align="center">-->
<!--    <template slot-scope="scope">-->
<!--      <div>{{scope.data.content}}</div>-->
<!--    </template>-->
<!--  </r-table-column>-->
      <r-table-column width="40" type="checkbox" align="center" ></r-table-column>
      <r-table-column width="40" type="index"></r-table-column>
  <r-table-column title="推荐指数" field="name" align="center" width="130" :ellipsis="true">
<!--    <template slot-scope="scope">-->
<!--      <r-tooltip placement="left-end">-->
<!--        <span>{{scope.data.name}}</span>-->
<!--        <div slot="content">{{scope.data.chinese.value}}</div>-->
<!--      </r-tooltip>-->
<!--    </template>-->
  </r-table-column>
<!--  <r-table-column title="类别推荐" field="math" width="100" align="center"  v-if="test"></r-table-column>-->
      <r-table-column title="规程规则推荐" field="chinese.value" width="800"   align="left" :ellipsis="true" >
        <!--    <template slot-scope="scope">-->
        <!--      <r-tooltip placement="left-start">-->
        <!--        <span>{{scope.data.chinese.value}}</span>-->
        <!--        <div slot="content">{{scope.data.chinese.value}}</div>-->
        <!--      </r-tooltip>-->
        <!--    </template>-->
      </r-table-column>
<!--      <template slot-scope="scope">-->
<!--        <r-tooltip>-->
<!--          <span>{{scope.data.chinese.value}}</span>-->
<!--          <div slot="content">{{scope.data.chinese.value}}</div>-->
<!--        </r-tooltip>-->
<!--      </template>-->
  <r-table-column title="查看详情" align="center" width="140" v-if="test">
    <template slot-scope="scope">
      <r-button type="primary" size="small" @click.native="_alert(scope.data.chinese.value , $event)" v-if="test">查看</r-button>
    </template>
  </r-table-column>
</r-table>
    </div>
<!-- 页码 -->
<div class="margin-top-10">
  <r-page v-model="currPage" :total="total" :show-total="true" size="small" :page-size="10"></r-page>
</div>
    </r-tab-pane>
</r-tabs>
<!--  <r-card hover="true" style="margin: 200px; width: 800px;">-->
<!--    <p slot="title">标准卡片</p>-->
<!--&lt;!&ndash;    <a href="#" slot="extra">&ndash;&gt;-->
<!--&lt;!&ndash;      <r-icon type="ios-loop-strong"></r-icon>&ndash;&gt;-->
<!--&lt;!&ndash;      <span>换一换</span>&ndash;&gt;-->
<!--&lt;!&ndash;    </a>&ndash;&gt;-->
<!--    <p>卡片测试</p>-->
<!--  </r-card>-->
</div>
</template>

<script>
export default {
  name: 'tmpmeasure',
  data () {
    return {
      delete_id: [],
      // 导出excel
      // table: Table,
      tableData: this.data1,
      // 新增表单数据
      formItem: {
        input: '',
        select: '',
        radio: '',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        textarea: '',
        tels: {
          items: [{value: ''}]
        },
        ajaxValue: '',
        images: []
      },
      userOperation (command) {
        console.log(1111111111111 + command)
        switch (command) {
          case 'logout':
            this.logout()
            break
          case 'editPaw':
            this.dialog.editPaw.show = true
            console.log('编辑密码')
            break
        }
      },
      dialog: {
        editPaw: {
          show: false
        }
      },
      editPaw: {
        oldPaw: '',
        newPaw: '',
        confirmNewPaw: ''
      },
      editPawRules: {
        oldPaw: [
          {required: true, message: '请输入旧密码', trigger: 'blur'}
        ],
        newPaw: [
          {required: true, message: '请输入新密码', trigger: 'blur'},
          {min: 8, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur'},
          {
            // eslint-disable-next-line
            validator(rule, value, callback, source, options) {
              var errors = []
              if (!/^[a-z0-9]+$/.test(value)) {
                console.log('不符合输入规则')
                errors.push('请输入字母或特殊字符')
              }
              callback(errors)
            }
          }
        ],
        confirmNewPaw: [
          {required: true, message: '请再次输入新密码', trigger: 'blur'},
          {min: 8, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur'},
          {
            // eslint-disable-next-line
            validator(rule, value, callback, source, options) {
              var errors = []
              if (!/^[a-z0-9]+$/.test(value)) {
                console.log('不符合输入规则')
                errors.push('请输入字母或特殊字符')
              }
              callback(errors)
            }
          }
        ]
      },
      isShow2: false,
      loading: false,
      newAddText: '',
      lists: [
      ],
      nextTodoId: 0,
      msg: '表格组件welcome',
      tabsValue: '',
      input: '',
      value: '1',
      data1: '',
      test: true,
      sortField: 'math',
      sortDir: 'asc',
      currPage: 1,
      total: 0,
      pageData: 'nihao',
      p: '{"query":{"match":{"发现人":"朱贵"}}}',
      common: {
        input1: '测试数据'
      },
      // {"query":{"match":{"发现人":"朱贵"}}}
      json: {
        query: {
          match: {
            key: ''
          }
        }
      }
    }
  },
  methods: {
    // 完成批量删除操作
    delete_all_pick: function () {
      let checkeds = this.tableData
      let checkdeid = this.delete_id
      console.log(checkeds)
      console.log(checkdeid)
      // this.tableData.pop(1)
      for (let i in this.tableData) {
        console.log('--------->' + i)
        for (let j in checkdeid) {
          if (this.tableData[i].id === checkdeid[j].id) {
            this.tableData.splice(i, 1)
          }
        }
      }
      // checkeds.forEach(v1 => {
      //   console.log('--------->' + v1.id)
      //   checkdeid.forEach(v => {
      //     if (v1.id === v.id) {
      //       console.log('=========>' + v.id)
      //       this.tableData.splice(index, 1)
      //     }
      //   })
      // })
      this.delete_id = []
    },
    downloadExcel () {
      this.$confirm('确定下载列表文件?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.excelData = this.selectData // 你要导出的数据list。
        this.export2Excel()
      }).catch(() => {

      })
    },
    // 导出excel
    export2Excel () {
      console.log(4444444444)
      require.ensure([], () => {
        // eslint-disable-next-line camelcase
        const { export_json_to_excel } = require('../../excel/Export2Excel.js')
        const tHeader = ['序号', '推荐指数', '类别推荐', '查看详情']
        // 上面设置Excel的表格第一行的标题
        const filterVal = ['id', 'name', 'math', 'content']
        // 上面的index、phone_Num、school_Name是tableData里对象的属性
        const list = this.tableData // 把data里的tableData存到list
        const data = this.formatJson(filterVal, list)
        this.tableData = this.data1
        export_json_to_excel(tHeader, data, '列表excel')
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    download: function () {
      console.log(11111111)
      var obj = document.getElementById('download')
      var str = '类别推荐,规章推荐\n'
      for (var i = 0; i < this.tableData.length; i++) {
        var item = this.tableData[i]
        str += item.userName + ',' + item.userNickname + ',' + item.userTruename + ',' + item.birthday + ','
        str += item.telphone + ',' + item.wechat + ',' + item.qq + ','
        str += item.email + ',' + item.province + ',' + item.city
        str += '\n'
      }
      str = encodeURIComponent(str)
      obj.href = 'data:text/csv;charset=utf-8,\ufeff' + str
      obj.download = 'users.csv'
    },
    reset () {
      this.$refs.myForm.reset()
    },
    editPawSubmit () {
      this.$refs.editPaw.validate((valid) => {
        if (valid) {
          console.log('修改密码表单提交')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    initDataVue () {
      this.total = this.pageData.total.value
      for (var i = 0; i < this.pageData.total.value; i++) {
        let value = this.pageData.hits[i]._source.事故隐患内容
        let valueContent = this.pageData.hits[i]._source.事故隐患内容
        let index = value.indexOf('《')
        let stop = value.lastIndexOf('')// 字符串截取，实现规章制度推荐
        value = value.substring(index, stop)
        let start = valueContent.indexOf('《')
        let contentValue = valueContent.substring(0, start)
        // let stopContent = contentValue.lastIndexOf('不')
        // contentValue = valueContent.substring(0, stopContent)
        console.log(this.pageData.hits[i]._score)
        this.data1.push({
          id: i,
          name: this.pageData.hits[i]._score,
          math: this.pageData.hits[i]._source.专业分类,
          chinese: {
            value: value
          },
          content: contentValue
        })
        this.tableData = this.data1
      }
    },
    // lists.splice(index, 1)
    tagClose (index) {
      this.lists.splice(index, 1)
      // 解决删除问题
      this.$store.state.pageData = this.lists
      console.log(this.lists)
      // 进行检索和渲染
      this.searchUser()
    },
    keyupEnter () {
      this.addNewTag()
    },
    addNewTag: function () {
      if (this.newAddText !== '') {
        this.lists.push({
          id: this.nextTodoId++,
          title: this.newAddText
        })
      }
      this.newAddText = ''
      // 进行检索和渲染
      this.searchUser()
    },
    // 添加方法使得点击搜索的时候自动生成标签
    clickIcon () {
      this.common.input1 = ''
    },
    _alert (id, e) {
      this.isShow2 = true
      e.stopPropagation()
      // this.searchUser()
      this.$alert(
        id
      )
    },
    sort (dir, field) {
      var me = this
      me.loading = true

      setTimeout(function () {
        me.data.sort((a, b) => {
          var x = a[field] - b[field]

          if (dir === 'asc') {
            return x
          } else {
            return -x
          }
        })

        me.sortField = field
        me.sortDir = dir

        me.loading = false
      }, 1000)
    },
    rowClick (data, e) {
      // this.searchUser() 需要判断当前是否被选中
      this.delete_id.push({
        id: data.id
      })
      this.$message('点击了第' + data.id + '条')
    },
    async funA () {
      var res = await this.$axios.post('http://127.0.0.1:9200/lishikai_index000/_search', this.p) // 这里的res就是axios请求回来的结果
      let demo = res.data.hits
      console.log(demo)
      this.pageData = demo
    },
    // 测试是否可以访问django服务器
    async funB () {
      var res = await this.$axios.get('http://127.0.0.1:8008/index') // 这里的res就是axios请求回来的结果
      console.log(res)
    },
    async searchUser () {
      console.log(this.pageData + 'type of it is ' + typeof this.pageData)
      if (this.pageData === '') {
        return
      }
      // 先做基于事故隐含内容的
      // 缓存系统缓存到vuex中---------实现
      console.log(this.lists)
      console.log(this.$store.state.pageData)
      if (this.lists.length > 0) {
        this.$store.state.pageData = this.lists
      }
      if (this.$store.state.pageData.length > 0) {
        this.lists = this.$store.state.pageData
      }
      // list for 循环
      this.p = '{"query":{"bool":{"must":['
      for (var i = 0; i < this.lists.length; i++) {
        if (i === (this.lists.length - 1)) {
          this.p = this.p + '{"match_phrase":{"事故隐患内容":"' + this.lists[i].title + '"}}'
        } else {
          this.p = this.p + '{"match_phrase":{"事故隐患内容":"' + this.lists[i].title + '"}},'
        }
      }
      this.p = this.p + ']}}}'
      console.log(this.p)
      // var p1 = JSON.parse(JSON.stringify(this.p))
      // param 没有发送过去,中文乱码问题 {params: this.p, headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}
      this.$axios.defaults.headers = {'Content-Type': 'application/json'}
      // this.$axios.post('http://127.0.0.1:9200/lishikai_index000/_search', this.p).then(res => {
      //   console.log(p1)
      //   let demo = res.data.hits
      //   console.log(demo)
      //   this.pageData = demo
      // })
      var res = await this.$axios.post('http://127.0.0.1:9200/lishikai_index000/_search', this.p) // 这里的res就是axios请求回来的结果
      let demo = res.data.hits
      console.log(demo)
      this.pageData = demo
      this.data1 = []
      this.initDataVue()
    }
  },
  mounted: function () {
    this.lists = this.$store.state.pageData
    this.searchUser()
    // this.$axios.post('http://127.0.0.1:8008/index/', this.p).then(res => {
    //   //   console.log(p1)
    //   //   let demo = res.data.hits
    //   console.log(res.data)
    // })
    // this.p = '{"query":{"match":{"发现人":"朱贵"}}}' // 只要构建好json字符串就行了，不用管其他的，发送到哪里是elasticsearch解析,那么容易解析。
    // this.$axios.get('http://127.0.0.1:9200/lishikai_index000/_search', this.p).then(res => {
    //   console.log(typeof res.data)
    //   console.log(res.data.hits.hits[0])
    //   // this.pageData = res.data.hits.hits[0]._source.专业分类 // 中文也可以服了
    //   this.pageData = res.data.hits.hits[0]._source
    //   // console.log(this.pageData)
    // })
  }
}
/* eslint-disable */
// var data1 = []
// for (var i = 0; i < 10; i++) {
//   data1.push({
//     id: i,
//     name: '张三测试测试测试测试' + i,
//     math: i * 10,
//     chinese: {
//       value: i * 10 + 5
//     }
//   })
// }
function initData(){
// eslint-disable-next-line no-unused-vars
  if(typeof this.pageData == 'object'){ {
    console.log(this.pageData.total.value)
    for (var i = 0; i < this.pageData.total.value; i++) {
      data1.push({
        id: i,
        name: '张三测试测试测试测试' + i,
        math: i * 10,
        chinese: {
          value: i * 10 + 5
        }
      })
    }
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#username {
    position: relative;
    margin: auto;
    padding: auto;
    float:left;
    top: 6px;
    font-size: 15px;
    margin-right: 5px;
}
#input {
    display: inline;

  }
.r-input-wrapper .r-input {

  display: inline-block;
  width: 200px;
  float: left;

}

.margin-top-10 .r-btn-default {
  display: block;

}
.r-input-wrapper {
  width: 200px;
  display: block;
}

.r-form span {

  float: left;

}
</style>
