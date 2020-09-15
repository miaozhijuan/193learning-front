<template>
  <div id="printTest">


    <r-tabs style="margin:10px;" v-model="tabsValue">
      <r-tab-pane name="pane1" label="历史数据统计分析" icon="search">




        <r-form label-width="100" :model="formItem" ref="myForm">
        <r-form-item class="1yhjt" label="隐患简题" prop="input" required>
          <r-input v-model="formItem.隐患标题" placeholder="请输入" trim> </r-input>
        </r-form-item>
        <r-form-item class="1yhbh" label="隐患编号" prop="input" required>
          <r-input v-model="formItem.隐患编号" placeholder="请输入" trim> </r-input>
        </r-form-item>
        <r-form-item class="1fxrq" label="发现日期" prop="date" required>

          <r-datepicker v-model="formItem.发现日期" clearable></r-datepicker><div class="line">-</div>

        </r-form-item>
          <r-form-item class="2fxrq" label="" prop="date" required>

          <r-datepicker  v-model="formItem.发现日期2" clearable></r-datepicker>
          </r-form-item>
        <r-form-item class="1pgdj" label="评估等级" prop="select" >

          <r-select v-model="formItem.评估等级" clearable>
            <r-select-option label="一般隐患" value="一般隐患"></r-select-option>
            <r-select-option label="重大隐患" value="重大隐患"></r-select-option>
            <r-select-option label="安全事件隐患" value="安全事件隐患"></r-select-option>

          </r-select>

        </r-form-item>
        <r-form-item class="1yhszdw" label="隐患所在单位" prop="input" required>
          <r-input v-model="formItem.隐患所在单位" placeholder="请输入" trim> </r-input>
        </r-form-item>
        <r-form-item class="1sfxc" label="是否消除" prop="select" >

          <r-select v-model="formItem.是否消除" clearable>
            <r-select-option label="是" value="是"></r-select-option>
            <r-select-option label="否" value="否"></r-select-option>

          </r-select>

        </r-form-item>
        <r-form-item class="1yhly" label="隐患来源" prop="select" required>

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

        <r-form-item class="1yhyy" label="隐患原因" prop="select" required>
          <r-select v-model="formItem.隐患原因" clearable>
            <r-select-option label="人身安全隐患" value="人身安全隐患"></r-select-option>
            <r-select-option label="电力安全隐患" value="电力安全隐患"></r-select-option>
            <r-select-option label="设备设施隐患" value="设备设施隐患"></r-select-option>
            <r-select-option label="大坝安全隐患" value="大坝安全隐患"></r-select-option>
            <r-select-option label="安全管理隐患" value="安全管理隐患"></r-select-option>
            <r-select-option label="其他事故隐患" value="其他事故隐患"></r-select-option>


          </r-select>
        </r-form-item>
        <r-form-item class="1gsznbm" label="归属部门" prop="select" >

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
        <r-form-item class="1zyfl" label="专业分类" prop="select" required>

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

        </r-form>


        <!-- 搜索框 -->
        <r-form label-width="100" :model="formItem"  ref="myForm" >




          <div class="xcsearch margin-top-10">
            <r-input v-model.trim="newAddText" @keyup.enter.native="keyupEnter" style="width:500px"></r-input>
            <r-button @click.native="addNewTag">搜索</r-button>
            <r-tag v-for='(list,index) in lists' v-bind:key='list.id' closeable type="primary"   @close="tagClose(index)" >
              <r-icon type="ios-pricetags-outline"></r-icon>  {{list.title}}
            </r-tag>
          </div>
          <!--每次搜索一下记录关键词并生成对应的检索条件，点击叉号去处该标签-->
          <r-form-item  style="margin-left: 10px; position:relative;left: -430px;top: 20px;" label-width="400px">

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
            <r-form  :model="formItem" ref="myForm">
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
          </el-dialog>
        </div>
        <!-- table表格 -->
        <div id="idtable">
          <r-table :data="data1"  :loading="loading" ref="table" :border="true" :show-header="true" :sort-method="sort" :sort-field="sortField" :sort-dir="sortDir" @check-change="rowClick"  >
            <r-table-column width="40" type="checkbox" align="center" ></r-table-column>
            <r-table-column width="40" type="index"></r-table-column>
            <r-table-column title="隐患编号" field="yhbh" :ellipsis="true" align="center"  v-if="test"></r-table-column>
            <r-table-column title="隐患简题" field="yhjt" :ellipsis="true" align="center"  v-if="test"></r-table-column>
            <r-table-column title="隐患所在单位" field="yhszdw" align="center"  v-if="test"></r-table-column>
            <r-table-column title="隐患来源" field="yhly" align="center"  v-if="test"></r-table-column>
            <r-table-column title="评估等级" field="pgdj" align="center"  v-if="test"></r-table-column>
            <r-table-column title="专业分类" field="zyfl" align="center"  v-if="test"></r-table-column>
            <r-table-column title="归属部门" field="gsbm" align="center"  v-if="test"></r-table-column>
            <r-table-column title="发现日期" field="fxrq" align="center"  v-if="test"></r-table-column>
            <r-table-column title="是否消除" field="sfxc" align="center"  v-if="test"></r-table-column>
            <r-table-column title="查看详情" align="center" width="200" v-if="test">
              <template slot-scope="scope">
                <r-button type="primary" size="small" @click.native="detailAlert(scope.data.alert1 )" v-if="test">查看</r-button>
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
    <el-dialog
      :fullscreen="isFullScreen"
      :visible.sync="dialogview"
      width="100%"
      height="100%"
    >
<!--&lt;!&ndash;    <div class="dialog">&ndash;&gt;-->
<!--&lt;!&ndash;      <pre id="result">&ndash;&gt;-->

<!--&lt;!&ndash;      </pre>&ndash;&gt;-->
<!--    </div>-->
      <div class="xctitle">
        详情信息
      </div>

        <r-card hover="true" style="margin: 200px; width: 800px;">
          <div class="div-content">
        <r-form label-width="100" :model="alertcontent" :rules="ruleValidate" ref="myForm">

          <r-form-item class="yhhc" label="隐患简题" prop="input" required>
            <r-input v-model="alertcontent.隐患标题" placeholder="请输入" trim> </r-input>
          </r-form-item>

          <r-form-item class="yhjt" label="隐患简题" prop="input" required>
            <r-input v-model="alertcontent.隐患标题" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <r-form-item class="yhly" label="隐患来源" prop="select" required>

            <r-select v-model="alertcontent.隐患来源" clearable>
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
          <r-form-item label="隐患原因" prop="input" required>

            <r-input v-model="alertcontent.隐患原因" placeholder="请输入" trim> </r-input>

          </r-form-item>

          <!--1-->
          <r-form-item class="yhbh" label="隐患编号" prop="input" required>
            <r-input v-model="alertcontent.隐患编号" placeholder="请输入" trim> </r-input>
          </r-form-item>

          <r-form-item class="yhszdw" label="隐患所在单位" prop="input" required>
            <r-input v-model="alertcontent.隐患所在单位" placeholder="请输入" trim> </r-input>
          </r-form-item>

          <!---->



          <r-form-item class="zyfl" label="专业分类" prop="select" required>

            <r-select v-model="alertcontent.专业分类" clearable>
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
            <r-input v-model="alertcontent.详细分类" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <!--    -->

          <!--  <r-form-item label="详细分类" prop="input" >-->
          <!--    <r-input v-model="formItem.input" placeholder="请输入" trim> </r-input>-->
          <!--  </r-form-item>-->
          <r-form-item class="fxr" label="发现人" prop="input" required>
            <r-input v-model="alertcontent.发现人" placeholder="请输入" trim> </r-input>
          </r-form-item>

          <!--    1-->
          <r-form-item class="fxrdw" label="发现人单位" prop="input" required>
            <r-input v-model="alertcontent.发现人单位" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <!--    -->

          <!--    1-->
          <r-form-item class="fxrq" label="发现日期" prop="date" required>

            <r-datepicker v-model="alertcontent.发现日期" clearable></r-datepicker>

          </r-form-item>
          <!--    -->



          <!--  <r-form-item label="发现人单位" prop="input" >-->
          <!--    <r-input v-model="formItem.input" placeholder="请输入" trim> </r-input>-->
          <!--  </r-form-item>-->
          <!--  <r-form-item label="发现日期" prop="input" >-->
          <!--    <r-input v-model="formItem.input" placeholder="请输入" trim> </r-input>-->
          <!--  </r-form-item>-->
          <r-form-item class="sgyhnr" label="事故隐患内容" prop="input" required>
            <r-input v-model="alertcontent.事故隐患内容" type="textarea" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <r-form-item class="kndzhg" label="可能导致后果" prop="input" >
            <r-input v-model="alertcontent.可能导致后果" placeholder="请输入" trim> </r-input>
          </r-form-item>

          <!--    1-->
          <r-form-item class="gsznbm" label="归属职能部门" prop="select" >

            <r-select v-model="alertcontent.归属职能部门" clearable>
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

            <r-select v-model="alertcontent.预评估等级" clearable>
              <r-select-option label="一般隐患" value="一般隐患"></r-select-option>
              <r-select-option label="重大隐患" value="重大隐患"></r-select-option>
              <r-select-option label="安全事件隐患" value="安全事件隐患"></r-select-option>


            </r-select>

          </r-form-item>
          <r-form-item class="ypgfzrqm" label="预评估负责人签名" prop="input" >
            <r-input v-model="alertcontent.预评估负责人签名" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <r-form-item class="ypgfzrqmrq" label="预评估负责人签名日期" prop="date" >

            <r-datepicker v-model="alertcontent.预评估负责人签名日期" clearable></r-datepicker>
          </r-form-item>
          <r-form-item class="ypgldshqm" label="预评估领导审核签名" prop="input" >
            <r-input v-model="alertcontent.预评估领导审核签名" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <r-form-item class="ypgldshqmrq" label="预评估领导审核签名日期" prop="date" >

            <r-datepicker v-model="alertcontent.预评估领导审核签名日期" clearable></r-datepicker>
          </r-form-item>

          <r-form-item class="pgdj" label="评估等级" prop="select" >

            <r-select v-model="alertcontent.评估等级" clearable>
              <r-select-option label="一般隐患" value="一般隐患"></r-select-option>
              <r-select-option label="重大隐患" value="重大隐患"></r-select-option>
              <r-select-option label="安全事件隐患" value="安全事件隐患"></r-select-option>

            </r-select>

          </r-form-item>

          <r-form-item class="pgfzrqm" label="评估负责人签名" prop="input" >
            <r-input v-model="alertcontent.评估负责人签名" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <r-form-item class="pgfzrqmrq" label="评估负责人签名日期" prop="date" >

            <r-datepicker v-model="alertcontent.评估负责人签名日期" clearable></r-datepicker>

          </r-form-item>

          <r-form-item class="pgldshqm" label="评估领导审核签名" prop="input" >
            <r-input v-model="alertcontent.评估负责人签名" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <r-form-item class="pgldshqmrq" label="评估领导审核签名日期" prop="date" >

            <r-datepicker v-model="alertcontent.评估领导审核签名日期" clearable></r-datepicker>
          </r-form-item>
          <!--    -->
          <!--1-->
          <r-form-item class="zlzrdw" label="治理责任单位" prop="input" >
            <r-input v-model="alertcontent.治理责任单位" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <r-form-item class="zlzrr" label="治理责任人" prop="input" >
            <r-input v-model="alertcontent.治理责任人" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <r-form-item class="zlqx" label="治理期限" prop="date" >

            <r-datepicker v-model="alertcontent.治理期限" clearable></r-datepicker>
          </r-form-item>
          <r-form-item class="sfjhxm" label="是否计划项目" prop="select" >

            <r-select v-model="alertcontent.是否计划项目" clearable>
              <r-select-option label="是" value="是"></r-select-option>
              <r-select-option label="否" value="否"></r-select-option>

            </r-select>
          </r-form-item>
          <r-form-item class="sfwcjhwba" label="是否完成计划外备案" prop="select" >

            <r-select v-model="alertcontent.是否完成计划外备案" clearable>
              <r-select-option label="是" value="是"></r-select-option>
              <r-select-option label="否" value="否"></r-select-option>

            </r-select>

          </r-form-item>
          <r-form-item class="jhbh" label="计划编号" prop="input" >
            <r-input v-model="alertcontent.计划编号" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <r-form-item class="zlfa" label="治理方案" prop="input" >
            <r-input v-model="alertcontent.治理方案" type="textarea" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <r-form-item class="fkcs" label="防控措施" prop="input" >
            <r-input v-model="alertcontent.防控措施" type="textarea" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <r-form-item class="zlwcqk" label="治理完成情况" prop="input" >
            <r-input v-model="alertcontent.治理完成情况" placeholder="请输入" trim> </r-input>
          </r-form-item>

          <r-form-item class="yhzljhzj" label="隐患治理计划资金(万元)" prop="input" >
            <r-input v-model="alertcontent.隐患治理计划资金" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <r-form-item class="ljlsyhzlzj" label="累计落实隐患治理资金(万元)" prop="input" >
            <r-input v-model="alertcontent.累计落实隐患治理资金" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <!--    -->

          <!--    1-->
          <r-form-item class="yssqdw" label="验收申请单位" prop="input" >
            <r-input v-model="alertcontent.验收申请单位" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <r-form-item class="fzr" label="负责人" prop="input" >
            <r-input v-model="alertcontent.负责人" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <r-form-item class="qzrq" label="签字日期" prop="date" >

            <r-datepicker v-model="alertcontent.签字日期" clearable></r-datepicker>

          </r-form-item>
          <r-form-item class="yszzdw" label="验收组织单位" prop="input" >
            <r-input v-model="alertcontent.验收组织单位" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <r-form-item class="ysyj" label="验收意见" prop="input" >
            <r-input v-model="alertcontent.验收意见" type="textarea" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <r-form-item class="jl" label="结论" prop="input" >
            <r-input v-model="alertcontent.结论" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <r-form-item class="sfxc" label="是否消除" prop="select" >

            <r-select v-model="alertcontent.是否消除" clearable>
              <r-select-option label="是" value="是"></r-select-option>
              <r-select-option label="否" value="否"></r-select-option>

            </r-select>

          </r-form-item>
          <r-form-item class="yszz" label="验收组长" prop="input" >
            <r-input v-model="alertcontent.验收组长" placeholder="请输入" trim> </r-input>
          </r-form-item>
          <r-form-item class="ysrq" label="验收日期" prop="date" >

            <r-datepicker v-model="alertcontent.验收日期" clearable></r-datepicker>

          </r-form-item>

<!--          <r-form-item style="margin-left: 100px;">-->
<!--            <r-button @click.native="reset">保存</r-button>-->
<!--            <r-button style="margin-left: 8px" type="primary" @click.native="submit">提交</r-button>-->
<!--          </r-form-item>-->
        </r-form>
          </div>
        </r-card>

    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'XCSearch',
    data () {
      return {
        dialogview:true,
        isFullScreen:true,
        delete_id: [],
        // 导出excel
        // table: Table,
        tableData: this.data1,
        // 新增表单数据
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
          发现日期2: '',
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
          验收日期: '',
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
        data1: [],
        test: true,
        sortField: 'math',
        sortDir: 'asc',
        currPage: 1,
        total: 0,
        alertcontent:{

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
          发现日期2: '',
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
          验收日期: '',
        },
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
    mounted () {
      this.dialogview=false
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
        // 每一次查询过来的数据都用来更新storage
        console.log('typeof pageData' + typeof this.pageData)
        let parsed = JSON.stringify(this.pageData)
        localStorage.setItem('queryReturnData', parsed)
        this.getTheKGData()// 进行异步的抽取三元组
        // 同时装入隐患原因类别关联ltp模型
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
      tagClose (index) {
      },
      keyupEnter () {
        this.addNewTag()
      },
      addNewTag: function () {
        this.data1=[]
        this.searchUser()
      },
      // 添加方法使得点击搜索的时候自动生成标签
      clickIcon () {
        this.common.input1 = ''
      },
      detailAlert (id) {
        $('#result').html("")
        $('#result').html(this.syntaxHighlight(id));
        this.alertcontent.隐患标题 = id.隐患简题
        this.alertcontent.隐患原因 = id.隐患原因
        this.alertcontent.发现人单位 = id.发现人单位
        this.alertcontent.可能导致后果 = id.可能导致后果
        // this.alertcontent.治理期限 = id.治理期限
        this.alertcontent.发现日期 = id.发现日期
        this.alertcontent.归属职能部门 = id.归属职能部门
        this.alertcontent.结论 = id.结论
        this.alertcontent.隐患来源 = id.隐患来源
        this.alertcontent.专业分类 = id.专业分类
        this.alertcontent.验收组长 = id.验收组长
        this.alertcontent.工区领导审核签名日期 = id.工区领导审核签名日期
        this.alertcontent.治理责任单位 = id.治理责任单位
        this.alertcontent.隐患编号 = id.隐患编号
        this.alertcontent.工区领导审核签名 = id.工区领导审核签名
        this.alertcontent.是否消除 = id.是否消除
        this.alertcontent.发现人 = id.发现人
        this.alertcontent.评估等级 = id.评估等级
        this.alertcontent.评估负责人签名 = id.评估负责人签名
        this.alertcontent.评估负责人签名日期 = id.评估负责人签名日期
        this.alertcontent.预评估负责人签名日期 = id.预评估负责人签名日期
        this.alertcontent.评估领导审核签名日期 = id.评估领导审核签名日期
        this.alertcontent.详细分类 = id.详细分类
        this.alertcontent.事故隐患内容 = id.事故隐患内容
        this.alertcontent.防控措施 = id.防控措施
        this.alertcontent.是否计划项目 = id.是否计划项目
        this.alertcontent.验收申请单位 = id.验收申请单位
        this.alertcontent.隐患简题 = id.隐患简题
        this.alertcontent.隐患所在单位 = id.隐患所在单位
        this.alertcontent.预评估等级 = id.预评估等级
        this.alertcontent.评估领导审核签名 = id.评估领导审核签名
        this.alertcontent.预评估负责人签名 = id.预评估负责人签名

        this.alertcontent.治理责任人 = id.治理责任人
        this.alertcontent.治理完成情况 = id.治理完成情况
        this.alertcontent.隐患治理计划资金 = id.隐患治理计划资金
        this.alertcontent.累计落实治理资金 = id.累计落实治理资金
        this.alertcontent.负责人 = id.负责人
        this.alertcontent.签字日期 = id.签字日期
        this.alertcontent.验收组织单位 = id.验收组织单位
        this.alertcontent.验收意见 = id.验收意见
        this.alertcontent.验收日期 = id.验收日期
        this.alertcontent.是否消除 = id.是否消除
          this.isShow2 = true
          // e.stopPropagation()
          this.isFullScreen=true
          this.dialogview=true


      },
    syntaxHighlight(json) {
        if (typeof json != 'string') {
          json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
          var cls = 'number';
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = 'key';
            } else {
              cls = 'string';
            }
          } else if (/true|false/.test(match)) {
            cls = 'boolean';
          } else if (/null/.test(match)) {
            cls = 'null';
          }
          return '<span class="' + cls + '">' + match + '</span>';
        });
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
        var url = this.global_request_url.requestESURL
        var res = await this.$axios.post(url, this.p) // 这里的res就是axios请求回来的结果
        // var res = await this.$axios.post('http://127.0.0.1:9200/lishikai_index000/_search', this.p) // 这里的res就是axios请求回来的结果
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
        this.data1=[]
        if(this.formItem.发现日期!=""&&this.formItem.发现日期2!=""){


          this.p = {
            "query": {
              "bool": {
                "should": [

                  {
                    "match": {
                      "隐患原因": this.formItem.隐患原因
                    }
                  },

                  {
                    "match": {
                      "评估等级": this.formItem.评估等级
                    }
                  }, {
                    "match": {
                      "是否消除": this.formItem.是否消除
                    }
                  }, {
                    "match": {
                      "隐患来源": this.formItem.隐患来源
                    }
                  }, {
                    "match": {
                      "归属职能部门": this.formItem.归属职能部门
                    }
                  }, {
                    "match": {
                      " 隐患简题": this.formItem.隐患标题
                    }
                  },
                  {
                    "match": {
                      " 隐患编号": this.formItem.隐患编号
                    }
                  }
                ],

                "filter": {
                  "range": {
                    "发现日期": {
                      "gte": this.formItem.发现日期, // >
                      "lte":  this.formItem.发现日期2 // <
                    }
                  },
                  "bool":{
                    "must":[
                      {
                        "term": {
                          "专业分类": this.formItem.专业分类 // term失效原因是因为索引建立在该字段上查找的时候按照索引查找了，需要重建索引，指定该字段不分析
                        }
                      }

                    ]

                  }
                }

              }
            }
          }
        }else{
          this.p = {
            "query": {
              "bool": {
                "should": [

                  {
                    "match": {
                      "隐患原因": this.formItem.隐患原因
                    }
                  },
                  {
                    "match": {
                      "专业分类": this.formItem.专业分类
                    }
                  },
                  {
                    "match": {
                      "评估等级": this.formItem.评估等级
                    }
                  }, {
                    "match": {
                      "是否消除": this.formItem.是否消除
                    }
                  }, {
                    "match": {
                      "隐患来源": this.formItem.隐患来源
                    }
                  }, {
                    "match": {
                      "归属职能部门": this.formItem.归属职能部门
                    }
                  }, {
                    "match": {
                      " 隐患简题": this.formItem.隐患标题
                    }
                  },
                  {
                    "match": {
                      " 隐患编号": this.formItem.隐患编号
                    }
                  }
                ]

              }
            }
          }
        }

       this.$axios.defaults.headers = {'Content-Type': 'application/json'}
        var url = this.global_request_url.requestESURL
        var res = await this.$axios.post(url, this.p) // 这里的res就是axios请求回来的结果
        let demo = res.data.hits


        this.data1=[]
        for(var i = 0;i<res.data.hits.hits.length;i++){
          this.data1.push(
            {
              id:i,
              yhbh:res.data.hits.hits[i]._source.隐患编号,
              yhjt:res.data.hits.hits[i]._source.隐患简题,
              yhszdw:res.data.hits.hits[i]._source.隐患所在单位,
              yhly:res.data.hits.hits[i]._source.隐患来源,
              pgdj:res.data.hits.hits[i]._source.评估等级,
              zyfl:res.data.hits.hits[i]._source.专业分类,
              gsbm:res.data.hits.hits[i]._source.归属职能部门,
              fxrq:res.data.hits.hits[i]._source.发现日期,
              sfxc:res.data.hits.hits[i]._source.是否消除,
              alert1:res.data.hits.hits[i]._source,
            }
            )
        }

      },
      getTheKGData () {
        let param = JSON.parse(localStorage.getItem('queryReturnData'))
        console.log(param + 'paramType' + typeof param)
        var url = this.global_request_url.requestDjango
        this.$axios.post(url, param).then(resp => {
          // 处理完成之后的json数据
          let returnData = resp.data
          console.log('returndata=================' + returnData)
          console.log(returnData)
          returnData = JSON.stringify(returnData)
          localStorage.setItem('knowledgeData', returnData)
        })
      }
    },
    created: function () {
    }
  }
  /* eslint-disable */
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
  .r-card  .r-form-label-right {
    width: 1200px;

  }
  .r-card  .r-form {
    margin-left: 80px;
    height: 800px!important;
    /*overflow-y: scroll;*/
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
  .r-card .r-form-label-right .r-form-item {
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


  .r-card  .r-form::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 0px rgba(0,0,0,0.3);
    background-color: transparent;
  }
  .r-card  .r-form::-webkit-scrollbar
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
<!--  -->
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

  .margin-top-10 .r-btn-default {
    position: relative;
    left: 1230px;
    top: -60px;
    background-color: rgb(113,113,214);
    color:white;
  }
  .margin-top-10 .r-input {
    opacity: 0;
  }
  .r-form-inline {
    height: 1px;
  }

  .margin-top-10 .r-input {
    width: 0px;

  }
  .r-btn-group-align-left {

  }
  .margin-top-10 .r-input {
    margin-left: -22px;
  }

  .margin-top-10 .r-btn-default {
    position: relative;
    left: 1230px;
    top: -60px;
    background-color: rgb(113,113,214);
    color:white;
  }
  .margin-top-10 .r-input {
    opacity: 0;
  }
  .r-form-inline {
    height: 1px;
  }

  .margin-top-10 .r-input {
    width: 0px;

  }
  .r-btn-group-align-left {

  }
  .margin-top-10 .r-input {
    margin-left: -22px;
  }
/**/

  .sgyhnr .r-input {
    width: 1100px;
    height: 100px;
  }
  .r-card {
    margin-top: 50px!important;
    height: 1080px;
  }
  .fxr {
    margin-left: -600px!important
  }
  .fxrdw {
    margin-left: -300px!important;
  }
  .yhly .r-select-selection {
    width: 200px;
  }

  .fkcs .r-input {
    width: 1100px;
    height: 100px;
  }
  .zlfa .r-input {
    width: 1100px;
    height: 100px;
  }
  .r-card-body .r-form-label-right {
    height: 1080px!important
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
  .r-card-body {
    width: 1200px;
  }


  .r-card-body .r-form {
    margin-left: 80px;
    height: 800px!important;
    /*overflow-y: scroll;*/
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

  .r-card .r-form-label-right .r-form-item {
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

  .r-form::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 0px rgba(0,0,0,0.3);
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
  .r-card .r-form-label-right .r-form-item {
    margin-top: -26px;

  }

  .ljlsyhzlzj .r-form-item-label {
    width: 120px!important;
  }

  .r-form::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 0px rgba(0,0,0,0.3);
    background-color: transparent;
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
/**/

  .sgyhnr .r-input {
    width: 1100px;
    height: 100px;
  }
  .r-card {
    margin-top: 50px!important;
    height: 1080px;
  }
  .fxr {
    margin-left: -600px!important
  }
  .fxrdw {
    margin-left: -300px!important;
  }
  .yhly .r-select-selection {
    width: 200px;
  }

  .fkcs .r-input {
    width: 1100px;
    height: 100px;
  }
  .zlfa .r-input {
    width: 1100px;
    height: 100px;
  }
  .div-content {
    margin-top: 50px;
    height: 900px!important;
    width: 1440px;
    overflow-y: scroll;

  }
  /*控制整个滚动条*/
  ::-webkit-scrollbar {
    background-color: rgba(211,211,211,0.02);
    width: 10px;
    height: 10px;
    background-clip: padding-box;
  }

  /*滚动条两端方向按钮*/
  ::-webkit-scrollbar-button {
    background-color: rgba(255,192,204,0.02);
  }

  /*滚动条中间滑动部分*/
  ::-webkit-scrollbar-thumb {
    background-color: rgb(242,242,250);
    border-radius: 5px;
  }

  /*滚动条右下角区域*/
  ::-webkit-scrollbar-corner {
    background-color: rgba(255,0,0,0);
  }

/**/
  .xctitle {

    position: absolute;
    left: 800px;
    top: 0px;
    z-index: 11;
    font-size: 33px;

  }



</style>
