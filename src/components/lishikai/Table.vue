<template>
<div>
  {{msg}}

<r-tabs style="margin:10px;" v-model="tabsValue">
  <r-tab-pane name="pane1" label="welcome to 人员管理" icon="checkmark">
    <!-- 搜索框 -->
    <r-form label-width="100" :model="formItem" :rules="ruleValidate" ref="myForm" inline="false">
   <r-form-item  style="margin-left: 10px; position:relative;left: -430px;top: 20px;" label-width="40px">
     <r-row>
       <r-col>
<div id="username" style="text-align:center;">用户名</div>
       </r-col>
      <r-col>
        <r-input style="width:300px"></r-input>
      </r-col>
      <r-col offset="0">
        <r-button  >搜索</r-button>
      </r-col>
    </r-row>
  </r-form-item>
    </r-form>
      <div id="id">
    <r-button-group>
  <r-button icon="plus-round">导出</r-button>
  <r-button icon="plus-round" icon-pos="after">打印</r-button>
  <r-button icon="plus-round">新增</r-button>
  <r-button >批量删除</r-button>
</r-button-group>
</div>
    <!-- table表格 -->
    <div id="idtable">
    <r-table :data="data1" ref="table" :border="false" :show-header="true" :sort-method="sort" :sort-field="sortField" :sort-dir="sortDir" :loading="loading" @row-click="rowClick" show-summary
>
  <r-table-column width="50" type="expand" align="center">
    <template slot-scope="scope">
      <div>{{scope.data.name}}</div>
    </template>
  </r-table-column>
  <r-table-column width="50" type="checkbox"></r-table-column>
  <r-table-column width="50" type="index"></r-table-column>
  <r-table-column title="姓名" field="name" width="80" :ellipsis="true">
    <template slot-scope="scope">
      <r-tooltip>
        <span>{{scope.data.name}}</span>
        <div slot="content">{{scope.data.name}}</div>
      </r-tooltip>
    </template>
  </r-table-column>
  <r-table-column title="数学" field="math" align="right" :sortable="true" v-if="test"></r-table-column>
  <r-table-column title="语文" field="chinese.value" align="right" :sortable="true"></r-table-column>
  <r-table-column title="操作" align="center" width="140" v-if="test">
    <template slot-scope="scope">
      <r-button type="primary" size="small" @click.native="_alert(scope.data.id, $event)" v-if="test">查看</r-button>
    </template>
  </r-table-column>
</r-table>
    </div>
<!-- 页码 -->
<div class="margin-top-10">
  <r-page v-model="currPage" :total="total" :show-total="true" size="small" :page-size="1000"></r-page>
</div>
  </r-tab-pane>
</r-tabs>
</div>
</template>

<script>
var data1 = []
for (var i = 0; i < 10; i++) {
  data1.push({
    id: i,
    name: '张三测试测试测试测试' + i,
    math: i * 10,
    chinese: {
      value: i * 10 + 5
    }
  })
}

export default {
  name: 'table',
  data () {
    return {
      msg: '表格组件welcome',
      tabsValue: '',
      input: '',
      value: '1',
      data1: data1,
      test: true,
      sortField: 'math',
      sortDir: 'asc',
      loading: false,
      currPage: 1,
      total: 23400
    }
  },
  methods: {
    _alert (id, e) {
      e.stopPropagation()
      this.$alert(id)
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
      this.$message('点击了' + data.id)
    }
  }
}
/* eslint-disable */
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
</style>
