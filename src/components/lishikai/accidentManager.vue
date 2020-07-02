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
  <r-form-item label="隐患标题" prop="input" required>
    <r-input v-model="formItem.隐患标题" placeholder="请输入" trim> </r-input>
  </r-form-item>
  <r-form-item label="隐患来源" prop="input" required>
    <r-input v-model="formItem.隐患来源" placeholder="请输入" trim> </r-input>
  </r-form-item>
  <r-form-item label="隐患原因" prop="input" required>
    <r-input v-model="formItem.隐患原因" placeholder="请输入" trim> </r-input>
  </r-form-item>
  <r-form-item label="专业分类" prop="input" required>
    <r-input v-model="formItem.专业分类" placeholder="请输入" trim> </r-input>
  </r-form-item>
<!--  <r-form-item label="详细分类" prop="input" >-->
<!--    <r-input v-model="formItem.input" placeholder="请输入" trim> </r-input>-->
<!--  </r-form-item>-->
  <r-form-item label="发现人" prop="input" required>
    <r-input v-model="formItem.发现人" placeholder="请输入" trim> </r-input>
  </r-form-item>
<!--  <r-form-item label="发现人单位" prop="input" >-->
<!--    <r-input v-model="formItem.input" placeholder="请输入" trim> </r-input>-->
<!--  </r-form-item>-->
<!--  <r-form-item label="发现日期" prop="input" >-->
<!--    <r-input v-model="formItem.input" placeholder="请输入" trim> </r-input>-->
<!--  </r-form-item>-->
  <r-form-item label="事故隐患内容" prop="input" required>
    <r-input v-model="formItem.事故隐患内容" placeholder="请输入" trim> </r-input>
  </r-form-item>
  <r-form-item label="可能导致后果" prop="input" >
    <r-input v-model="formItem.可能导致后果" placeholder="请输入" trim> </r-input>
  </r-form-item>
  <r-form-item label="防控措施" prop="input" >
    <r-input v-model="formItem.防控措施" placeholder="请输入" trim required> </r-input>
  </r-form-item>
<!--  <r-form-item label="隐患类别" prop="select">-->
<!--    <r-select v-model="formItem.select" clearable>-->
<!--      <r-select-option label="北京市" value="0"></r-select-option>-->
<!--      <r-select-option label="上海市" value="1"></r-select-option>-->
<!--      <r-select-option label="深圳市" value="2"></r-select-option>-->
<!--    </r-select>-->
<!--  </r-form-item>-->
  <r-form-item label="发现日期">
    <div style="display:flex; align-items:baseline">
      <r-form-item prop="date">
        <r-datepicker v-model="formItem.发现日期" ></r-datepicker>
      </r-form-item><span style="flex-basis:50px;text-align:center">-</span>
<!--      <r-form-item prop="time">-->
<!--        <r-timepicker v-model="formItem.time" clearable></r-timepicker>-->
<!--      </r-form-item>-->
    </div>
  </r-form-item>
<!--  <r-form-item label="单选框" prop="radio">-->
<!--    <r-radio-group v-model="formItem.radio">-->
<!--      <r-radio label="男" value="male"></r-radio>-->
<!--      <r-radio label="女" value="remale"></r-radio>-->
<!--    </r-radio-group>-->
<!--  </r-form-item>-->
<!--  <r-form-item label="多选框" prop="checkbox">-->
<!--    <r-checkbox-group v-model="formItem.checkbox">-->
<!--      <r-checkbox label="吃饭" value="吃饭"></r-checkbox>-->
<!--      <r-checkbox label="睡觉" value="睡觉"></r-checkbox>-->
<!--      <r-checkbox label="跑步" value="跑步"></r-checkbox>-->
<!--      <r-checkbox label="看电影" value="看电影"></r-checkbox>-->
<!--    </r-checkbox-group>-->
<!--  </r-form-item>-->
<!--  <r-form-item label="文本域">-->
<!--    <r-input v-model="formItem.textarea" type="textarea"></r-input>-->
<!--  </r-form-item>-->
<!--  <r-form-item label="异步验证" prop="ajaxValue" required>-->
<!--    <r-input v-model="formItem.ajaxValue" placeholder="请输入ajax" trim></r-input>-->
<!--  </r-form-item>-->
<!--  <r-form-item required v-for="(item, index) in formItem.tels.items" :key="index" :label="'电话' + (index + 1)"-->
<!--               :prop="'tels.items[' + index + '].value'" :rules="[{validate: required, msg:'不能为空'}]">-->
<!--    <r-row>-->
<!--      <r-col>-->
<!--        <r-input v-model="item.value"></r-input>-->
<!--      </r-col>-->
<!--      <r-col offset="1">-->
<!--        <r-button type="danger" size="small" @click.native="delTel(item)">删除</r-button>-->
<!--      </r-col>-->
<!--    </r-row>-->
<!--  </r-form-item>-->
<!--  <r-form-item style="margin-left: 100px;">-->
<!--    <r-button type="primary" @click.native="addTel">添加电话</r-button>-->
<!--  </r-form-item>-->
<!--  <r-form-item prop="images" required label="上传图片">-->
<!--    <r-upload v-model="formItem.images" action="//jsonplaceholder.typicode.com/posts/" :on-success="onSuccess" list-type="image">-->
<!--      <r-button icon="ios-cloud-upload-outline">上传文件</r-button>-->
<!--    </r-upload>-->
<!--  </r-form-item>-->
  <r-form-item style="margin-left: 100px;">
    <r-button @click.native="reset">保存</r-button>
    <r-button style="margin-left: 8px" type="primary" @click.native="submit">提交</r-button>
  </r-form-item>
</r-form>
    </r-card>
<!--    <r-card hover="true" style="margin: 200px; width: 800px;">-->
<!--      <p slot="title">导入提交</p>-->
<!--    </r-card>-->
<!--    <div id="upload" >-->
<!--  <r-form label-width="100" :model="formItem" :rules="ruleValidate" ref="myForm">-->
<!--    <r-form-item>-->
<!--        <r-form-item prop="images" required label="上传图片">-->
<!--          <r-upload v-model="formItem.images" action="//jsonplaceholder.typicode.com/posts/" :on-success="onSuccess" list-type="image">-->
<!--            <r-button icon="ios-cloud-upload-outline">上传文件</r-button>-->
<!--          </r-upload>-->
<!--        </r-form-item>-->
<!--      <r-form-item style="margin-left: 100px;">-->
<!--        <r-button @click.native="reset">保存</r-button>-->
<!--        <r-button style="margin-left: 8px" type="primary" @click.native="submit">提交</r-button>-->
<!--      </r-form-item>-->
<!--    </r-form-item>-->
<!--  </r-form>-->

<!--    </div>-->
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
        发现日期: ''
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
</style>
