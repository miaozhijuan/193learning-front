<template>
<!--  <div class="sys-header">-->
<!--    <div class="logo">-->
<!--      <slot name="logo"></slot>-->
<!--    </div>-->
<!--    <slot name="topnav"></slot>-->
<!--    <div class="userInfo">-->
<!--      <ul>-->
<!--        <li>-->
<!--&lt;!&ndash;加入用户名密码之前写好内容&ndash;&gt;-->
<!--          <el-dropdown @command="userOperation">-->
<!--            <span class="user">李仕凯<i class="el-icon-caret-bottom el-icon&#45;&#45;right"></i></span>-->
<!--            <el-dropdown-menu slot="dropdown">-->
<!--              <el-dropdown-item command="editPaw">修改密码</el-dropdown-item>-->
<!--              <el-dropdown-item command="logout"><router-link to="/login">登出</router-link></el-dropdown-item>-->
<!--              &lt;!&ndash;              <el-dropdown-item @click="editPaw3">修改密码</el-dropdown-item>&ndash;&gt;-->
<!--              &lt;!&ndash;              <el-dropdown-item @click="editPaw3">登出</el-dropdown-item>&ndash;&gt;-->
<!--            </el-dropdown-menu>-->
<!--          </el-dropdown>-->
<!--&lt;!&ndash;加入用户名密码之前写好内容&ndash;&gt;-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--  </div>-->
<div style="height:100%">
  <r-app id="app" v-cloak style="height: 100%">
<!--    <app-title>欢迎进入</app-title>-->
      <div slot="header" align-items="center" class="demo-header">
        <div id="test">
        <h1 style="color: #f4615c"><b><span>W</span></b><i>xxx.DBDL</i></h1>
        </div>
        <div id="log">
          <r-icon type="paper-airplane"></r-icon>
          <el-dropdown @command="userOperation">
            <span class="user">{{this.editPaw.LoginUserName}}<i class="el-icon-caret-bottom el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="editPaw">修改密码</el-dropdown-item>
              <el-dropdown-item command="logout">登出</el-dropdown-item>
<!--              <el-dropdown-item @click="editPaw3">修改密码</el-dropdown-item>-->
<!--              <el-dropdown-item @click="editPaw3">登出</el-dropdown-item>-->
            </el-dropdown-menu>
          </el-dropdown>
<!--        <r-icon type="paper-airplane"></r-icon>-->
<!--        <r-dropdown label="李仕凯" style="margin-left: 8px">-->
<!--          <r-dropdown-item>个人信息</r-dropdown-item>-->
<!--          <r-dropdown-item><router-link to="/login">登出</router-link></r-dropdown-item>-->
<!--        </r-dropdown>-->
        </div>
        <el-dialog title="修改密码" :visible.sync="dialog.editPaw.show" :modal-append-to-body="false" custom-class="editPawDialog">
          <el-form :model="editPaw" :rules="editPawRules" ref="editPaw" label-width="100px" >
            <el-form-item label="旧密码" prop="oldPaw">
              <el-input v-model="editPaw.oldPaw" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPaw">
              <el-input v-model="editPaw.newPaw" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认新密码" prop="confirmNewPaw">
              <el-input v-model="editPaw.confirmNewPaw" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div class="textC">
            <el-button type="primary" @click="editPawSubmit">保存</el-button>
          </div>
        </el-dialog>
      </div>
  <div slot="aside" >
<!--    value="3-1"-->
  <r-menu  style="width:200px" mode="vertical" :expand=expand v-model="activeMenu"   slot="aside" expend>
  <r-menu-item><r-icon type="paper-airplane"></r-icon>操作菜单</r-menu-item>
    <r-sub-menu name="5">
      <template slot="title"><span id="title3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<r-icon type="settings"></r-icon>&nbsp;&nbsp;&nbsp;隐患知识库管理</span></template>
      <r-menu-item name="5-1">
        <r-icon type="clipboard"></r-icon><router-link to="/knowclient/accidentManager">&nbsp;隐患信息人工录入</router-link>
      </r-menu-item>
      <r-menu-item name="5-2">
        <r-icon type="ios-cloud-upload"></r-icon><router-link to="/knowclient/fileupload">隐患信息批量导入</router-link>
      </r-menu-item>
    </r-sub-menu>
  <r-sub-menu name="3">
          <template slot="title"><span id="title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<r-icon type="network"></r-icon>&nbsp;&nbsp;&nbsp;隐患管理智能推荐</span></template>
          <r-menu-item name="3-1" >
            <r-icon type="search"></r-icon><router-link to="/knowclient/table">专业分类智能推荐</router-link>
          </r-menu-item>
          <r-menu-item name="3-2" >
            <r-icon type="pull-request"></r-icon><router-link to="/knowclient/tmpmeasure">暂控措施智能推荐</router-link>
          </r-menu-item>
          <r-menu-item name="3-3" >
            <r-icon type="paintbrush"></r-icon><router-link to="/knowclient/regulations">规程规则智能推荐</router-link>
          </r-menu-item>
        </r-sub-menu>
  <r-sub-menu name="2">
          <template slot="title"><span id="title4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<r-icon type="network"></r-icon>&nbsp;&nbsp;&nbsp;隐患知识图谱管理</span></template>
          <r-menu-item name="2-1" >
            <r-icon type="search"></r-icon><router-link to="/knowclient/knowledgeGraph">隐患的专业分类图谱</router-link>
          </r-menu-item>
          <r-menu-item name="2-2" >
            <r-icon type="pull-request"></r-icon><router-link to="/knowclient/knowledgeGraphReason">隐患的原因分类图谱</router-link>
          </r-menu-item>
        </r-sub-menu>
  <r-sub-menu name="6">
          <template slot="title"><span id="title5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<r-icon type="network"></r-icon>&nbsp;&nbsp;&nbsp;隐患风险统计分析</span></template>
          <r-menu-item name="6-1" >
            <r-icon type="pull-request"></r-icon><router-link to="/knowclient/lineStack">单位隐患的历史趋势</router-link>
          </r-menu-item>
          <r-menu-item name="6-2" >
            <r-icon type="pull-request"></r-icon><router-link to="/knowclient/pieCustom">隐患原因统计</router-link>
          </r-menu-item>
          <r-menu-item name="6-3" >
            <r-icon type="pull-request"></r-icon><router-link to="/knowclient/chartmap">各专业隐患数量统计</router-link>
          </r-menu-item>
          <r-menu-item name="6-5" >
            <r-icon type="pull-request"></r-icon><router-link to="/knowclient/datasetEncode0">隐患来源统计</router-link>
          </r-menu-item>
          <r-menu-item name="6-6" >
            <r-icon type="pull-request"></r-icon><router-link to="/knowclient/barStack">各单位隐患数量统计</router-link>
          </r-menu-item>
<!--          <r-menu-item name="6-7" >-->
<!--            <r-icon type="pull-request"></r-icon><router-link to="/knowclient/XCSearch">历史数据统计</router-link>-->
<!--          </r-menu-item>-->
        </r-sub-menu>
      <r-sub-menu  name="7">
        <template slot="title"><span id="title5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<r-icon type="network"></r-icon>&nbsp;&nbsp;&nbsp;隐患内容统计分析</span></template>
        <r-menu-item name="7-1" >
        <r-icon type="ios-paper"></r-icon><router-link to="/knowclient/XCSearch">历史数据详情检索</router-link>
        </r-menu-item>
        <r-menu-item name="7-2" >
        <r-icon type="ios-paper"></r-icon><router-link to="/knowclient/XCSearchChartmap">已治理情况统计</router-link>
        </r-menu-item>
        <r-menu-item name="7-3" >
        <r-icon type="ios-paper"></r-icon><router-link to="/knowclient/chartmap_unitStatistics">未治理的隐患单位统计</router-link>
        </r-menu-item>
      </r-sub-menu >

    <r-menu-item name="4">
      <r-icon type="ios-people"></r-icon><router-link to="/knowclient/user">用户管理</router-link>
    </r-menu-item>
</r-menu>
</div>
<div slot="main">
  <router-view></router-view>
</div>
  </r-app>
</div>
</template>

<script>
import 'vue'
export default {
  name: 'LiShikai',
  data () {
    return {
      expand:true,
      dialog: {
        editPaw: {
          show: false
        }
      },
      editPaw: {
        oldPaw: '',
        newPaw: '',
        confirmNewPaw: '',
        LoginUserName: localStorage.getItem('LoginUser') === '' || localStorage.getItem('LoginUser').length === 0 ? this.$router.push('/login') : localStorage.getItem('LoginUser')
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
      common: {
        componentValue: '',
        activeMenu: '5-1',
        tab: '',
        tab2: ''
      },
      activeMenu: '',
      msg: 'Welcome You, Lishikai!',
      valuekey: '1'
    }
  },
  methods: {
    editPaw3 () {
      this.dialog.editPaw.show = true
      console.log('编辑密码')
    },
    userOperation (command) {
      switch (command) {
        case 'logout':
          localStorage.setItem('LoginUser', '')
          this.logout()
          break
        case 'editPaw':
          this.dialog.editPaw.show = true
          console.log('编辑密码')
          break
      }
    },
    logout () {
      // localStorage.setItem('LoginUser', '')
      localStorage.setItem('LoginUser', '')
      this.$router.push('/login')
    },
    editPawSubmit () {
      this.$refs.editPaw.validate((valid) => {
        if (valid) {
          var updateFlag = false
          console.log('修改密码表单提交')
          let jsonAdmin = JSON.parse(localStorage.getItem('users'))
          for (let i = 0; i < jsonAdmin.length; i++) {
            console.log(jsonAdmin[i].username)
            if (this.editPaw.LoginUserName === jsonAdmin[i].username) {
              jsonAdmin[i].password = this.editPaw.newPaw
              // 重新赋值隐患
              updateFlag = true
              break
              // if (this.param.password === jsonAdmin[i].password) {
              //   console.log('登陆成功')
              //   valid = true
              // }
            }
            // else {
            //       console.log('error submit!!')
            //       return false
            //     }
          }
          if (updateFlag) {
            // todo 修改成功
            let parsed = JSON.stringify(jsonAdmin)
            localStorage.setItem('users', parsed)
            console.log(JSON.parse(localStorage.getItem('users')))
          } else {
            // todo 修改失败弹框
          }
        }
      })
    },
    created: function () {
      var LoginUser = localStorage.getItem('LoginUser')
      if (!LoginUser === '' && !LoginUser.length === 0) {
        this.editPaw.LoginUserName = LoginUser
      } else {
        this.$router.push('/login')
        // todo 请登录提示
      }
    }
  }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
#test {
    margin-top: 9px;
    float:left;
}
#log {
    margin-right: 30px;
    margin-top: 35px;
    float: right;
}
#title {
     margin-left: -103px;
    }
#title4 {
     margin-left: -103px;
    }
#title5 {
     margin-left: -103px;
    }
#title2 {
     margin-left: -86px;
    }
#title3 {
  margin-left: -103px;
}
.r-menu-group-title {
    text-align: left;
}
#test {

    font-family: STHupo ;}
.demo-header span {
    font-size: 120%;
}
</style>
