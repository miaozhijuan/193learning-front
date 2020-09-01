<template>
  <div id = "card">
    <r-card>
      <r-tabs v-model="common.tab">
        <r-tab-pane name="1" label="手工录入">
    <r-card hover="true" style="margin: 200px; width: 800px;">
  <!--&lt;!&ndash;    <a href="#" slot="extra">&ndash;&gt;-->
  <!--&lt;!&ndash;      <r-icon type="ios-loop-strong"></r-icon>&ndash;&gt;-->
  <!--&lt;!&ndash;      <span>换一换</span>&ndash;&gt;-->
  <!--&lt;!&ndash;    </a>&ndash;&gt;-->
  <r-form label-width="100" :model="formItem" :rules="ruleValidate" ref="myForm">

    <r-form-item class="yhhc" label="隐患简题" prop="input" required>
      <r-input v-model="formItem.隐患标题" placeholder="请输入" trim> </r-input>
    </r-form-item>

  <r-form-item class="yhjt" label="隐患简题" prop="input" required>
    <r-input v-model="formItem.隐患标题" placeholder="请输入" trim> </r-input>
  </r-form-item>
  <r-form-item class="yhly" label="隐患来源" prop="select" required>

    <r-select v-model="formItem.隐患来源" clearable>
      <r-select-option label="条例专项" value="条例专项"></r-select-option>
      <r-select-option label="日常巡视" value="日常巡视"></r-select-option>
      <r-select-option label="检修预试" value="检修预试"></r-select-option>
      <r-select-option label="电网专项" value="电网专项"></r-select-option>
      <r-select-option label="安全性评价" value="安全性评价"></r-select-option>
      <r-select-option label="安全检查" value="安全检查"></r-select-option>
      <r-select-option label="专项监督" value="专项监督"></r-select-option>
      <r-select-option label="事故分析" value="事故分析"></r-select-option>
      <r-select-option label="电网方式分析" value="事故分析"></r-select-option>
      <r-select-option label="防误闭锁" value="防误闭锁"></r-select-option>
      <r-select-option label="电网隐患" value="电网隐患"></r-select-option>
      <r-select-option label="跨越施工" value="跨越施工"></r-select-option>
      <r-select-option label="电气火灾" value="电气火灾"></r-select-option>

    </r-select>


  </r-form-item>
  <r-form-item label="隐患原因" prop="select" required>
    <r-select v-model="formItem.隐患原因" clearable>
      <r-select-option label="人身安全隐患" value="人身安全隐患"></r-select-option>
      <r-select-option label="电力安全隐患" value="电力安全隐患"></r-select-option>
      <r-select-option label="设备设施隐患" value="设备设施隐患"></r-select-option>
      <r-select-option label="大坝安全隐患" value="大坝安全隐患"></r-select-option>
      <r-select-option label="安全管理隐患" value="安全管理隐患"></r-select-option>
      <r-select-option label="其他事故隐患" value="其他事故隐患"></r-select-option>


    </r-select>
  </r-form-item>

<!--1-->
    <r-form-item class="yhbh" label="隐患编号" prop="input" required>
      <r-input v-model="formItem.隐患编号" placeholder="请输入" trim> </r-input>
    </r-form-item>

    <r-form-item class="yhszdw" label="隐患所在单位" prop="input" required>
      <r-input v-model="formItem.隐患所在单位" placeholder="请输入" trim> </r-input>
    </r-form-item>

<!---->



  <r-form-item class="zyfl" label="专业分类" prop="select" required>

    <r-select v-model="formItem.专业分类" clearable>
      <r-select-option label="变电" value="变电"></r-select-option>
      <r-select-option label="输电" value="输电"></r-select-option>
      <r-select-option label="发电" value="发电"></r-select-option>
      <r-select-option label="配电" value="配电"></r-select-option>
      <r-select-option label="信息" value="信息"></r-select-option>
      <r-select-option label="电网规划" value="电网规划"></r-select-option>
      <r-select-option label="交通" value="交通"></r-select-option>
      <r-select-option label="消防" value="消防"></r-select-option>
      <r-select-option label="煤矿" value="煤矿"></r-select-option>
      <r-select-option label="其他" value="其他"></r-select-option>
      <r-select-option label="电力建设" value="电力建设"></r-select-option>
      <r-select-option label="环境保护" value="环境保护"></r-select-option>
      <r-select-option label="装备制造" value="装备制造"></r-select-option>
      <r-select-option label="安全保卫" value="安全保卫"></r-select-option>
      <r-select-option label="后勤" value="后勤"></r-select-option>
      <r-select-option label="调度及二次系统" value="调度及二次系统"></r-select-option>


    </r-select>


  </r-form-item>


    <!--  1  -->
    <r-form-item class="xxfl" label="详细分类" prop="input" required>
      <r-input v-model="formItem.详细分类" placeholder="请输入" trim> </r-input>
    </r-form-item>
    <!--    -->

<!--  <r-form-item label="详细分类" prop="input" >-->
<!--    <r-input v-model="formItem.input" placeholder="请输入" trim> </r-input>-->
<!--  </r-form-item>-->
  <r-form-item class="fxr" label="发现人" prop="input" required>
    <r-input v-model="formItem.发现人" placeholder="请输入" trim> </r-input>
  </r-form-item>

<!--    1-->
    <r-form-item class="fxrdw" label="发现人单位" prop="input" required>
      <r-input v-model="formItem.发现人单位" placeholder="请输入" trim> </r-input>
    </r-form-item>
<!--    -->

    <!--    1-->
    <r-form-item class="fxrq" label="发现日期" prop="date" required>

        <r-datepicker v-model="formItem.发现日期" clearable></r-datepicker>

    </r-form-item>
    <!--    -->



    <!--  <r-form-item label="发现人单位" prop="input" >-->
<!--    <r-input v-model="formItem.input" placeholder="请输入" trim> </r-input>-->
<!--  </r-form-item>-->
<!--  <r-form-item label="发现日期" prop="input" >-->
<!--    <r-input v-model="formItem.input" placeholder="请输入" trim> </r-input>-->
<!--  </r-form-item>-->
  <r-form-item class="sgyhnr" label="事故隐患内容" prop="input" required>
    <r-input v-model="formItem.事故隐患内容" type="textarea" placeholder="请输入" trim> </r-input>
  </r-form-item>
  <r-form-item class="kndzhg" label="可能导致后果" prop="input" >
    <r-input v-model="formItem.可能导致后果" placeholder="请输入" trim> </r-input>
  </r-form-item>

<!--    1-->
    <r-form-item class="gsznbm" label="归属职能部门" prop="select" >

      <r-select v-model="formItem.归属职能部门" clearable>
        <r-select-option label="发展策划" value="发展策划"></r-select-option>
        <r-select-option label="运维检修" value="运维检修"></r-select-option>
        <r-select-option label="调度" value="调度"></r-select-option>
        <r-select-option label="营销" value="营销"></r-select-option>
        <r-select-option label="农电" value="农电"></r-select-option>
        <r-select-option label="基建" value="基建"></r-select-option>
        <r-select-option label="交流建设" value="交流建设"></r-select-option>
        <r-select-option label="直流建设" value="直流建设"></r-select-option>
        <r-select-option label="信息通信" value="信息通信"></r-select-option>
        <r-select-option label="产业" value="产业"></r-select-option>
        <r-select-option label="人力资源" value="人力资源"></r-select-option>
        <r-select-option label="保卫" value="保卫"></r-select-option>
        <r-select-option label="后勤保障部" value="后勤保障部"></r-select-option>


      </r-select>

    </r-form-item>
<!--    -->
    <!--    1-->
    <r-form-item class="ypgdj" label="预评估等级" prop="select" >

      <r-select v-model="formItem.预评估等级" clearable>
        <r-select-option label="一般隐患" value="一般隐患"></r-select-option>
        <r-select-option label="重大隐患" value="重大隐患"></r-select-option>
        <r-select-option label="安全事件隐患" value="安全事件隐患"></r-select-option>


      </r-select>

    </r-form-item>
    <r-form-item class="ypgfzrqm" label="预评估负责人签名" prop="input" >
      <r-input v-model="formItem.预评估负责人签名" placeholder="请输入" trim> </r-input>
    </r-form-item>
    <r-form-item class="ypgfzrqmrq" label="预评估负责人签名日期" prop="date" >

      <r-datepicker v-model="formItem.预评估负责人签名日期" clearable></r-datepicker>
    </r-form-item>
    <r-form-item class="ypgldshqm" label="预评估领导审核签名" prop="input" >
      <r-input v-model="formItem.预评估领导审核签名" placeholder="请输入" trim> </r-input>
    </r-form-item>
    <r-form-item class="ypgldshqmrq" label="预评估领导审核签名日期" prop="date" >

      <r-datepicker v-model="formItem.预评估领导审核签名日期" clearable></r-datepicker>
    </r-form-item>

    <r-form-item class="pgdj" label="评估等级" prop="select" >

      <r-select v-model="formItem.评估等级" clearable>
        <r-select-option label="一般隐患" value="一般隐患"></r-select-option>
        <r-select-option label="重大隐患" value="重大隐患"></r-select-option>
        <r-select-option label="安全事件隐患" value="安全事件隐患"></r-select-option>

      </r-select>

    </r-form-item>

    <r-form-item class="pgfzrqm" label="评估负责人签名" prop="input" >
      <r-input v-model="formItem.评估负责人签名" placeholder="请输入" trim> </r-input>
    </r-form-item>
    <r-form-item class="pgfzrqmrq" label="评估负责人签名日期" prop="date" >

      <r-datepicker v-model="formItem.评估负责人签名日期" clearable></r-datepicker>

    </r-form-item>

    <r-form-item class="pgldshqm" label="评估领导审核签名" prop="input" >
      <r-input v-model="formItem.评估负责人签名" placeholder="请输入" trim> </r-input>
    </r-form-item>
    <r-form-item class="pgldshqmrq" label="评估领导审核签名日期" prop="date" >

      <r-datepicker v-model="formItem.评估领导审核签名日期" clearable></r-datepicker>
    </r-form-item>
    <!--    -->
<!--1-->
    <r-form-item class="zlzrdw" label="治理责任单位" prop="input" >
      <r-input v-model="formItem.治理责任单位" placeholder="请输入" trim> </r-input>
    </r-form-item>
    <r-form-item class="zlzrr" label="治理责任人" prop="input" >
      <r-input v-model="formItem.治理责任人" placeholder="请输入" trim> </r-input>
    </r-form-item>
    <r-form-item class="zlqx" label="治理期限" prop="date" >

      <r-datepicker v-model="formItem.治理期限" clearable></r-datepicker>
    </r-form-item>
    <r-form-item class="sfjhxm" label="是否计划项目" prop="select" >

      <r-select v-model="formItem.是否计划项目" clearable>
        <r-select-option label="是" value="是"></r-select-option>
        <r-select-option label="否" value="否"></r-select-option>

      </r-select>
    </r-form-item>
    <r-form-item class="sfwcjhwba" label="是否完成计划外备案" prop="select" >

      <r-select v-model="formItem.是否完成计划外备案" clearable>
        <r-select-option label="是" value="是"></r-select-option>
        <r-select-option label="否" value="否"></r-select-option>

      </r-select>

    </r-form-item>
    <r-form-item class="jhbh" label="计划编号" prop="input" >
      <r-input v-model="formItem.计划编号" placeholder="请输入" trim> </r-input>
    </r-form-item>
    <r-form-item class="zlfa" label="治理方案" prop="input" >
      <r-input v-model="formItem.治理方案" type="textarea" placeholder="请输入" trim> </r-input>
    </r-form-item>
    <r-form-item class="fkcs" label="防控措施" prop="input" >
      <r-input v-model="formItem.防控措施" type="textarea" placeholder="请输入" trim> </r-input>
    </r-form-item>
    <r-form-item class="zlwcqk" label="治理完成情况" prop="input" >
      <r-input v-model="formItem.治理完成情况" placeholder="请输入" trim> </r-input>
    </r-form-item>

    <r-form-item class="yhzljhzj" label="隐患治理计划资金(万元)" prop="input" >
      <r-input v-model="formItem.隐患治理计划资金" placeholder="请输入" trim> </r-input>
    </r-form-item>
    <r-form-item class="ljlsyhzlzj" label="累计落实隐患治理资金(万元)" prop="input" >
      <r-input v-model="formItem.累计落实隐患治理资金" placeholder="请输入" trim> </r-input>
    </r-form-item>
<!--    -->

<!--    1-->
    <r-form-item class="yssqdw" label="验收申请单位" prop="input" >
      <r-input v-model="formItem.验收申请单位" placeholder="请输入" trim> </r-input>
    </r-form-item>
    <r-form-item class="fzr" label="负责人" prop="input" >
      <r-input v-model="formItem.负责人" placeholder="请输入" trim> </r-input>
    </r-form-item>
    <r-form-item class="qzrq" label="签字日期" prop="date" >

      <r-datepicker v-model="formItem.签字日期" clearable></r-datepicker>

    </r-form-item>
    <r-form-item class="yszzdw" label="验收组织单位" prop="input" >
      <r-input v-model="formItem.验收组织单位" placeholder="请输入" trim> </r-input>
    </r-form-item>
    <r-form-item class="ysyj" label="验收意见" prop="input" >
      <r-input v-model="formItem.验收意见" type="textarea" placeholder="请输入" trim> </r-input>
    </r-form-item>
    <r-form-item class="jl" label="结论" prop="input" >
      <r-input v-model="formItem.结论" placeholder="请输入" trim> </r-input>
    </r-form-item>
    <r-form-item class="sfxc" label="是否消除" prop="select" >

      <r-select v-model="formItem.是否消除" clearable>
        <r-select-option label="是" value="是"></r-select-option>
        <r-select-option label="否" value="否"></r-select-option>

      </r-select>

    </r-form-item>
    <r-form-item class="yszz" label="验收组长" prop="input" >
      <r-input v-model="formItem.验收组长" placeholder="请输入" trim> </r-input>
    </r-form-item>
    <r-form-item class="ysrq" label="验收日期" prop="date" >

      <r-datepicker v-model="formItem.验收日期" clearable></r-datepicker>

    </r-form-item>

  <r-form-item style="margin-left: 100px;">
    <r-button @click.native="reset">保存</r-button>
    <r-button style="margin-left: 8px" type="primary" @click.native="submit">提交</r-button>
  </r-form-item>
</r-form>
    </r-card>
        </r-tab-pane>
      </r-tabs>
    </r-card>
  </div>
</template>
<script>
export default {
  name: 'accidentManager',
  data () {
    return {
      common: {
        componentValue: '',
        activeMenu: '3-8',
        tab: '',
        tab2: ''
      },
      formItem: {
        隐患标题: '',
        隐患来源: '',
        隐患原因: '',
        专业分类: '',
        发现人: '',
        事故隐患内容: '',
        可能导致后果: '',
        防控措施: '',
        隐患编号:'',
        //---------------1
        隐患所在单位: '',
        详细分类: '',
        发现人单位: '',
        发现日期: '',
        归属职能部门: '',
        预评估负责人签名: '',
        预评估负责人签名日期: '',
        预评估领导审核签名: '',
        预评估领导审核签名日期: '',
        //-------
        预评估等级: '',
        评估等级: '',
        评估领导审核签名日期:'',


        评估负责人签名: '',
        评估负责人签名日期: '',
        治理责任单位: '',
        治理责任人: '',
        治理期限: '',
        是否计划项目: '',
        是否完成计划外备案: '',
        计划编号: '',
        治理方案: '',
        治理完成情况: '',
        隐患治理计划资金: '',
        累计落实隐患治理资金: '',
        验收申请单位: '',
        负责人: '',
        签字日期: '',
        验收组织单位: '',
        验收意见: '',
        结论: '',
        是否消除: '',
        验收组长: '',
        验收日期: ''

        // input: '',
        // select: '',
        // radio: '',
        // checkbox: [],
        // switch: true,
        // date: '',
        // time: '',
        // textarea: '',
        // tels: {
        //   items: [{value: ''}]
        // },
        // ajaxValue: '',
        // images: []
      }
      //     ruleValidate: {
      //       input: [
      //         {
      //           validate: this.required
      //           // msg: '输入不能为空'
      //         }
      //         // {
      //         //   validate: function (value, callback) {
      //         //     if (/^\d+$/.test(value)) {
      //         //       // eslint-disable-next-line standard/no-callback-literal
      //         //       callback(true)
      //         //     } else {
      //         //       // eslint-disable-next-line standard/no-callback-literal
      //         //       callback(false, '请输入数字')
      //         //     }
      //         //   }
      //         // }
      //       ],
      //       select: [
      //         {
      //           validate: this.required,
      //           msg: '选择不能为空'
      //         }
      //       ],
      //       radio: [
      //         {
      //           validate: this.required,
      //           msg: 'radio不能为空'
      //         }
      //       ],
      //       checkbox: [
      //         {
      //           validate: this.required,
      //           msg: 'checkbox不能为空'
      //         }
      //       ],
      //       date: [
      //         {
      //           validate: this.required
      //           // msg: 'date不能为空'
      //         }
      //       ],
      //       time: [
      //         {
      //           validate: this.required,
      //           msg: 'time不能为空'
      //         }
      //       ],
      //       ajaxValue: [
      //         {
      //           validate (value, callback) {
      //             if (value.trim().length === 0) {
      //               // eslint-disable-next-line standard/no-callback-literal
      //               callback(false, '不能为空')
      //               return
      //             }
      //
      //             setTimeout(_ => {
      //               // eslint-disable-next-line eqeqeq
      //               if (value == 'ajax') {
      //                 // eslint-disable-next-line standard/no-callback-literal
      //                 callback(true)
      //               } else {
      //                 // eslint-disable-next-line standard/no-callback-literal
      //                 callback(false)
      //               }
      //             }, 1000)
      //           },
      //           msg: '远程验证失败',
      //           loadingMsg: '请求ing....'
      //         }
      //       ],
      //       images: [
      //         {
      //           validate: this.required,
      //           msg: '图片不能为空'
      //         }
      //       ]
      //     }
    }
  },
  methods: {
    required (value, callback) {
      // if (value instanceof Array) {
      //   if (value.length > 0) {
      //     // eslint-disable-next-line standard/no-callback-literal
      //     callback(true)
      //   } else {
      //     // eslint-disable-next-line standard/no-callback-literal
      //     callback(false)
      //   }
      // } else {
      //   if (value.length > 0) {
      //     // eslint-disable-next-line standard/no-callback-literal
      //     callback(true)
      //   } else {
      //     // eslint-disable-next-line standard/no-callback-literal
      //     callback(false)
      //   }
      // }
    },

    addTel () {
      this.formItem.tels.items.push({
        value: ''
      })
    },

    delTel (item) {
      var idx = this.formItem.tels.items.indexOf(item)
      this.formItem.tels.items.splice(idx, 1)
    },

    async submit () {
      console.log(JSON.stringify(this.formItem))
      this.$refs.myForm.validate((_, item) => {
        console.log(_, item)
      })
      // todo 提交到后台后台直接处理json数据
      var res = await this.$axios.post('http://39.106.226.131:8000/processHandleInput/', this.formItem)
      console.log(res)
      // 设置清空
      this.formItem.隐患标题 = ''
      this.formItem.隐患来源 = ''
      this.formItem.隐患原因 = ''
      this.formItem.专业分类 = ''
      this.formItem.发现人 = ''
      this.formItem.事故隐患内容 = ''
      this.formItem.可能导致后果 = ''
      this.formItem.防控措施 = ''
      this.formItem.发现日期 = ''
      let parsed = JSON.stringify(this.formItem)
      console.log(parsed)
      localStorage.setItem('saveData', parsed)
      this.$message('录入完成')
    },

    reset () { // 点击保存放到localstorage中，返回的时候直接从中加载
      // this.$refs.myForm.reset()
      // 这里竟然可以直接用json进行表单赋值操作，太爽了吧 todo vue很强大这里直接赋值给vuex通过vuex管理保存数据
      // this.formItem = {'隐患标题': '1111111', '隐患来源': '11111111', '隐患原因': '1111111', '专业分类': '1111111111', '发现人': '111111111', '事故隐患内容': '111111111', '可能导致后果': '111111111111', '防控措施': '111111111', '发现日期': '2019-12-04'}
      console.log(this.formItem)
      let parsed = JSON.stringify(this.formItem)
      console.log(parsed)
      localStorage.setItem('saveData', parsed)
      this.$message('保存成功')
    },

    onSuccess (res, file) {
      this.formItem.images.push({
        name: file.name,
        url: res.id
      })
    }
  },
  mounted: function () {
    var form = JSON.parse(localStorage.getItem('saveData'))
    // console.log('7777777777777')
    console.log(form.toString().length)
    if (form.toString().length > 0) {
      console.log('<<-----============------>>')
      // this.formItem.隐患标题 = form['隐患标题']
      // this.formItem.隐患来源 = form['隐患来源']
      // this.formItem.隐患原因 = form['隐患原因']
      // this.formItem.专业分类 = form['专业分类']
      // this.formItem.发现人 = form['发现人']
      // this.formItem.事故隐患内容 = form['事故隐患内容']
      // this.formItem.可能导致后果 = form['可能导致后果']
      // this.formItem.防控措施 = form['防控措施']
      // this.formItem.发现日期 = form['发现日期']
      this.formItem = form
    }
    // console.log(form['隐患标题'])
  }
}
</script>
<style scoped>
  .r-card-head {
    display: none;
  }
  .r-tabs {
    position: fixed;
    width: 1000px;
    height: 500px;
    left: 420px;
    top: 100px;
    margin-top: 0px;
    margin-left: -199px;
  }
  #card > .r-card > .r-card-body {
    left: 170px;
    top:160px;
    position: fixed;

  }
  #card > .r-card {
    border: none;
  }
  #card {
    position: fixed;

  }
  .r-card {
    position: fixed;
    top:-60px;
    left: 10px;
  }

  .r-card {
    width: 1400px!important;
  }
  .yhly {


    float: left;
  }
  .yhjt {
    float: left;

  }
  .r-form-label-right {
    width: 1200px;

  }
  .r-form {
    margin-left: 80px;
    height: 800px!important;
    overflow-y: scroll;
  }
  .yhbh{
    float: left;
  }
  .yhszdw{
    float: left;

  }
  .zyfl{float: left;}

  .fxr{
    float: left;
    margin-left: -584px;

  }
  .fxrdw{float: left;
    margin-left: -292px;
  }
  .kndzhg{

    float: left;
    width: 500px;
  }
  .gsznbm{

  }
  .ypgdj{
    float: left;
  }
  .ypgfzrqm{float: left}

  .ypgldshqm{
    float: left;
  }

  .pgdj{float: left}
  .pgfzrqm{
    float: left;
  }
  .pgldshqm{
    float: left;
  }
  .zlzrdw{
    float: left;
  }
  .sfjhxm{
    float: left;
  }
  .sfwcjhwba{
    float: left;
  }

  .zlfa{

    width:1183px;
  }

  .yhzljhzj{
    width: 500px;
    float: left;
  }
  .yssqdw{

    float: left;
  }
  .fzr{
    float: left;
  }
  .jl{float: left}
  .yszz{float: left}


  .r-form {

  }

  .r-form-item {


  }
  .r-form {

  }
  .r-form-label-right .r-form-item {
    margin-top: -26px;

  }
  .sgyhnr{
    width: 1183px;
  }
  .ljlsyhzlzj .r-form-item-label {
    width: 120px!important;
  }
  .yszzdw{
    width: 700px;

  }

  .yhhc{
    opacity: 0;

  }

  .yhszdw .r-input {
    margin-top: -14px;
  }
  .fxrq{
    position: relative;
    left: -292px;
  }
  .ypgfzrqm .r-input {
    margin-top: -14px;
  }

  .ypgfzrqmrq .r-input {
    margin-top: -14px;
  }



  .ypgldshqm .r-input {
    margin-top: -14px;
  }
  .ypgldshqmrq .r-input {
    margin-top: -14px;
  }
  .pgfzrqm .r-input {
    margin-top: -14px;
  }
  .pgfzrqmrq .r-input {
    margin-top: -14px;
  }
  .sfwcjhwba .r-input {
    margin-top: -14px;
  }

  .yhzljhzj .r-input {
    margin-top: -14px;
  }
  .ljlsyhzlzj .r-input {
    margin-top: -14px;
  }

  .r-btn {
    margin-left: 650px;
    margin-top: 10px;
  }
  .r-form::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: transparent;
  }
  .r-form::-webkit-scrollbar
  {
    width: 0px;
    background-color: transparent;
  }

  .kndzhg .r-input {
    width: 400px;
  }
  .sgyhnr{
    width: 1200px!important;
  }
  .ypgldshqm .r-input {
    width: 212px;
  }

  .zlfa {
    width: 1200px!important;
  }
  .ypgdj .r-select-selection {
    width: 193px;
  }

  .pgdj .r-select-selection {
    width: 193px;
  }

  .sfjhxm .r-select-selection {
    width: 193px;
  }

</style>
