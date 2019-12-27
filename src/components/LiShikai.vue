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
            <span class="user">李仕凯<i class="el-icon-caret-bottom el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="editPaw">修改密码</el-dropdown-item>
              <el-dropdown-item command="logout"><router-link to="/login">登出</router-link></el-dropdown-item>
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
  <div slot="aside">
<!--    value="3-1"-->
  <r-menu  style="width:200px" mode="vertical" expand="true" v-model="activeMenu"   slot="aside" expend>
  <r-menu-item><r-icon type="paper-airplane"></r-icon>操作菜单</r-menu-item>
  <r-menu-item name="2">
    <r-icon type="ios-paper"></r-icon><router-link to="/lishikai/map">内容管理</router-link>
  </r-menu-item>
  <r-sub-menu name="3">
          <template slot="title"><span id="title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<r-icon type="network"></r-icon>&nbsp;&nbsp;&nbsp;隐患统计分析</span></template>
          <r-menu-item name="3-1" >
            <r-icon type="search"></r-icon><router-link to="/lishikai/table">专业分类推荐</router-link>
          </r-menu-item>
          <r-menu-item name="3-2" >
            <r-icon type="pull-request"></r-icon><router-link to="/lishikai/tmpmeasure">暂控措施推荐</router-link>
          </r-menu-item>
          <r-menu-item name="3-3" >
            <r-icon type="paintbrush"></r-icon><router-link to="/lishikai/regulations">规程规则推荐</router-link>
          </r-menu-item>
          <r-menu-item name="3-4" >
            <r-icon type="arrow-graph-up-right"></r-icon><router-link to="/lishikai/charts">专业统计</router-link>
          </r-menu-item>
          <!-- <r-menu-item name="2-2" href="app.html">
            <r-icon type="ios-browsers-outline"></r-icon>App 布局
          </r-menu-item>
          <r-menu-item name="2-3" href="button.html">
            <r-icon type="social-youtube-outline"></r-icon>Button 按钮
          </r-menu-item>
          <r-menu-item name="2-4" href="icon.html">
            <r-icon type="ios-heart-outline"></r-icon>Icon 图标
          </r-menu-item> -->
        </r-sub-menu>
<!--  <r-sub-menu name="5">-->
<!--    <template slot="title">-->
<!--      <span id="title2"><r-icon type="stats-bars"></r-icon>&nbsp;&nbsp;&nbsp;开发人员</span>-->
<!--    </template>-->
<!--    <r-menu-group title="">-->
<!--      &lt;!&ndash; <r-menu-item name="3-1"><r-icon type="ios-browsers-outline"></r-icon><router-link to="/lishikai/sunshengze">孙圣泽</router-link></r-menu-item>-->
<!--      <r-menu-item name="3-2"><r-icon type="ios-browsers-outline"></r-icon><router-link to="/lishikai/yuanxingliang">袁星亮</router-link></r-menu-item> &ndash;&gt;-->
<!--      <r-menu-item name="5-1"><r-icon type="ios-browsers-outline"></r-icon><router-link to="/lishikai/yuanxingliang">李仕凯</router-link></r-menu-item>-->
<!--    </r-menu-group>-->
<!--    &lt;!&ndash; <r-menu-group title="">-->
<!--      <r-menu-item name="3-4"><r-icon type="ios-browsers-outline"></r-icon>用户留存</r-menu-item>-->
<!--      <r-menu-item name="3-5"><r-icon type="ios-browsers-outline"></r-icon>流失用户</r-menu-item>-->
<!--    </r-menu-group> &ndash;&gt;-->
<!--  </r-sub-menu>-->
    <r-sub-menu name="5">
      <template slot="title"><span id="title3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<r-icon type="settings"></r-icon>&nbsp;&nbsp;&nbsp;隐患事件管理</span></template>
  <r-menu-item name="5-1">
    <r-icon type="clipboard"></r-icon><router-link to="/lishikai/accidentManager">&nbsp;手工录入管理</router-link>
  </r-menu-item>
      <r-menu-item name="5-2">
      <r-icon type="ios-cloud-upload"></r-icon><router-link to="/lishikai/fileupload">文件导入管理</router-link>
      </r-menu-item>
    </r-sub-menu>
    <r-menu-item name="4">
      <r-icon type="ios-people"></r-icon><router-link to="/lishikai/user">用户管理</router-link>
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
          this.logout()
          break
        case 'editPaw':
          this.dialog.editPaw.show = true
          console.log('编辑密码')
          break
      }
    },
    logout () {
      this.sysLogout().then(() => {
        this.$router.push('/login')
      })
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
    }
  }
}
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
