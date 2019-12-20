<template>
<div>
<r-tabs style="margin:10px;" v-model="tabsValue">
  <r-tab-pane name="pane1" label="welcome" icon="search">
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
<!--  <r-button icon="plus-round">导出</r-button>-->
<!--  <r-button icon="plus-round" icon-pos="after">打印</r-button>-->
<!--  <r-button icon="plus-round">新增</r-button>-->
<!--  <r-button >批量删除</r-button>-->
</r-button-group>
</div>
    <!-- table表格 -->
    <div id="idtable">
    <r-table :data="data1" :loading="loading" ref="table" :border="false" :show-header="true" :sort-method="sort" :sort-field="sortField" :sort-dir="sortDir"  @row-click="rowClick">
<!--  <r-table-column width="50" type="expand" align="center">-->
<!--    <template slot-scope="scope">-->
<!--      <div>{{scope.data.content}}</div>-->
<!--    </template>-->
<!--  </r-table-column>-->
<!--  <r-table-column width="50" type="checkbox"></r-table-column>-->
<!--  <r-table-column width="50" type="index"></r-table-column>-->
  <r-table-column title="推荐指数" field="name" align="center" width="130" :ellipsis="true">
<!--    <template slot-scope="scope">-->
<!--      <r-tooltip placement="left-end">-->
<!--        <span>{{scope.data.name}}</span>-->
<!--        <div slot="content">{{scope.data.chinese.value}}</div>-->
<!--      </r-tooltip>-->
<!--    </template>-->
  </r-table-column>
  <r-table-column title="类别推荐" field="math" align="center"  v-if="test"></r-table-column>
  <r-table-column title="规章推荐" field="chinese.value" width="500" align="left" :ellipsis="true" >
    <template slot-scope="scope">
      <r-tooltip placement="left-start">
        <span>{{scope.data.chinese.value}}</span>
        <div slot="content">{{scope.data.chinese.value}}</div>
      </r-tooltip>
    </template>
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
  <r-card hover="true" style="margin: 200px; width: 800px;">
    <p slot="title">标准卡片</p>
<!--    <a href="#" slot="extra">-->
<!--      <r-icon type="ios-loop-strong"></r-icon>-->
<!--      <span>换一换</span>-->
<!--    </a>-->
    <p>卡片测试</p>
  </r-card>
</div>
</template>

<script>
export default {
  name: 'table',
  data () {
    return {
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
      }
    },
    // lists.splice(index, 1)
    tagClose (index) {
      this.lists.splice(index, 1)
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
      // this.searchUser()
      this.$message('点击了' + data.id)
    },
    async funA () {
      var res = await this.$axios.post('http://127.0.0.1:9200/lishikai_index007/_search', this.p) // 这里的res就是axios请求回来的结果
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
      // this.$axios.post('http://127.0.0.1:9200/lishikai_index007/_search', this.p).then(res => {
      //   console.log(p1)
      //   let demo = res.data.hits
      //   console.log(demo)
      //   this.pageData = demo
      // })
      var res = await this.$axios.post('http://127.0.0.1:9200/lishikai_index007/_search', this.p) // 这里的res就是axios请求回来的结果
      let demo = res.data.hits
      console.log(demo)
      this.pageData = demo
      this.data1 = []
      this.initDataVue()
    }
  },
  created: function () {
    this.$axios.post('http://127.0.0.1:8008/index/', this.p).then(res => {
      //   console.log(p1)
      //   let demo = res.data.hits
      console.log(res.data)
    })
    // this.p = '{"query":{"match":{"发现人":"朱贵"}}}' // 只要构建好json字符串就行了，不用管其他的，发送到哪里是elasticsearch解析,那么容易解析。
    // this.$axios.get('http://127.0.0.1:9200/lishikai_index007/_search', this.p).then(res => {
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
