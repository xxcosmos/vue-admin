<template>
    <div>
        <el-page-header title="" @back="goBack" content="电机修复工序流程：分解环节">
        </el-page-header>
        <div class="break-container">
            <formhead></formhead>
            <div class="break-process">
                <transition name="el-zoom-in-top">
                    <div v-show="!next" class="break-safe">
                        <div class="break-title">
                            危害辨识、安全交底单
                        </div>
                        
                        <el-form class="safe-form" :rules="rules1" ref="form1" :model="form1" label-width="auto" label-position="left">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item  prop="project.type" label="施工作业类别">
                                        <el-select size="small" v-model="form1.project.type" placeholder="请选择施工作业类别">
                                            <el-option label="厂级危险作业" value="厂级危险作业"></el-option>
                                            <el-option label="车间级危险作业" value="车间级危险作业"></el-option>
                                            <el-option label="日常检修" value="日常检修"></el-option>
                                            <el-option label="节假日作业" value="节假日作业"></el-option>
                                            <el-option label="中夜班抢修" value="中夜班抢修"></el-option>
                                            <el-option label="其它" value="其它"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item prop="project.content" label="施工作业内容">
                                        <el-input size="small" show-word-limit :maxlength="30" v-model="form1.project.content"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item prop="project.ID" label="施工工单号">
                                        <el-input size="small" v-model="form1.project.ID"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item prop="project.group" label="施工班组">
                                        <el-input size="small" show-word-limit :maxlength="10" v-model="form1.project.group"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item prop="project.address" label="施工地点">
                                        <el-input size="small" show-word-limit :maxlength="10" v-model="form1.project.address"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6" >
                                    <el-form-item prop="project.date" label="施工时间">
                                        <el-date-picker
                                            size="small"
                                            v-model="form1.project.date"
                                            type="month"
                                            placeholder="选择月份">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item prop="project.manager" label="现场负责人">
                                        <el-input size="small"  show-word-limit :maxlength="4" v-model="form1.project.manager"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item prop="project.admin" label="班组交底人">
                                        <el-input size="small" show-word-limit :maxlength="4" v-model="form1.project.admin"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <template>
                                <el-table
                                    ref="multipleTable"
                                    :data="tableData"
                                    tooltip-effect="dark"
                                    style="width: 100%; margin-bottom: 30px;"
                                    @selection-change="handleSelectionChange"
                                >
                                    <el-table-column
                                    type="selection"
                                    width="55">
                                    </el-table-column>
                                    <el-table-column
                                    prop="id"
                                    label="序号"
                                    width="55">
                                    </el-table-column>
                                    <el-table-column
                                    prop="type"
                                    label="类别"
                                    width="150">
                                    </el-table-column>
                                    <el-table-column
                                    prop="mainReason"
                                    label="主要危害因素"
                                    width="120"
                                    show-overflow-tooltip>
                                    </el-table-column>
                                    <el-table-column
                                    prop="measure"
                                    label="对策措施交底确认"
                                    show-overflow-tooltip>
                                    </el-table-column>
                                </el-table>
                            </template>
                            <el-row :gutter="20">
                                    <el-form-item prop="project.other" label="其他补充">
                                        <el-input size="small" type="textarea" show-word-limit :maxlength="100" autosize v-model="form1.project.other"></el-input>
                                    </el-form-item>
                            </el-row>
                            <el-row :gutter="20">
                                <el-form-item prop="project.adminSure" label="被安全交底人员签名确认">
                                    <el-input size="small" type="textarea" show-word-limit :maxlength="50" autosize v-model="form1.project.adminSure"></el-input>
                                </el-form-item>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="14" :offset="10">
                                    <el-form-item style="float: right">
                                        <el-button @click="goNext">下一步</el-button>
                                        <!-- <el-button @click="goPre" >上一步</el-button>
                                        <el-button >打印表格</el-button>
                                        <el-button :v-if="powerSure" type="primary" @click="onSubmit">确认</el-button>
                                        <el-button :v-if="powerCancelSure" type="danger">取消确认</el-button>
                                        <el-button @click="goBack">返回</el-button> -->
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>                        
                    </div>
                </transition>
                <transition name="el-zoom-in-bottom">
                    <div v-show="next" class="break-form">
                        <el-form class="safe-form" :rules="rules2" ref="form2" :model="form2" label-width="auto" label-position="left">
                            <el-card shadow="never">
                                <div class="break-title">
                                    负荷侧
                                </div>
                                <el-row :gutter="20">
                                    <el-col :span="4">
                                        <el-form-item label="联轴器">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="load.num" label="个数">
                                            <el-input-number size="small" v-model="form2.load.num" :min="0" :max="2" placeholder="联轴器个数">
                                            </el-input-number>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item prop="load.format" label="形式">
                                            <el-radio v-model="form2.load.format" label="1">轮</el-radio>
                                            <el-radio v-model="form2.load.format" label="2">盘</el-radio>
                                            <el-radio v-model="form2.load.format" label="3">齿</el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="load.otherFormat"  label="其他形式">
                                            <el-input size="small" show-word-limit :maxlength="6" v-model="form2.load.otherFormat">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                
                                <el-row :gutter="2">
                                    <el-col :span="4">
                                        <el-form-item label="安装相对轴端面尺寸">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="load.pingzhou" label="平轴">
                                            <el-radio v-model="form2.load.pingzhou" label="1">是</el-radio>
                                            <el-radio v-model="form2.load.pingzhou" label="0">否</el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item prop="load.ao">
                                            <el-input size="small" v-model="form2.load.ao" show-word-limit :maxlength="4">
                                                <template slot="prepend" style="width: 22px;">凹陷</template>
                                                <template slot="append">mm</template>
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item prop="load.tu">
                                            <el-input size="small" v-model="form2.load.tu" show-word-limit :maxlength="4">
                                                <template slot="prepend">突出</template>
                                                <template slot="append">mm</template>
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="2">
                                    <el-col :span="6" :offset="4">
                                        <el-form-item prop="load.peiheSize.top" label-width="0">
                                            <el-input-number size="mini" v-model="form2.load.peiheSize.top" :precision="3" :step="0.001" :max="0.999" :min="0" controls-position="right"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="2">
                                    <el-col :span="7">
                                        <el-form-item prop="load.peiheSize.num" label="联轴器内孔配合尺寸">
                                            <el-input type="text" v-enter-number v-model="form2.load.peiheSize.num">
                                                <template slot="prepend">Ф</template>    
                                                <template slot="append">mm</template>    
                                            </el-input>                                                
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="6">
                                        <el-form-item prop="load.pass" label="达标">
                                            <el-radio v-model="form2.load.pass" label="1">是</el-radio>
                                            <el-radio v-model="form2.load.pass" label="0">否</el-radio>                          
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="11">
                                        <el-form-item prop="load.other" label="其他">
                                            <el-input size="small" show-word-limit :maxlength="30" v-model="form2.load.other"></el-input>
                                        </el-form-item>
                                    </el-col>

                                </el-row>

                                <el-row :gutter="2">
                                    <el-col :span="6" :offset="4">
                                        <el-form-item prop="load.peiheSize.bottom" label-width="0">
                                            <el-input-number size="mini" v-model="form2.load.peiheSize.bottom" :precision="3" :step="0.001" :max="0" :min="-0.999" controls-position="right"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-card>

                            <el-card shadow="never">
                                <div class="break-title">
                                    无负荷侧
                                </div>
                                <el-row :gutter="20">
                                    <el-col :span="4">
                                        <el-form-item label="联轴器">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="noLoad.num" label="个数">
                                            <el-input-number size="small" v-model="form2.noLoad.num" :min="0" :max="2" placeholder="联轴器个数">
                                            </el-input-number>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item prop="noLoad.format" label="形式">
                                            <el-radio v-model="form2.noLoad.format" label="1">轮</el-radio>
                                            <el-radio v-model="form2.noLoad.format" label="2">盘</el-radio>
                                            <el-radio v-model="form2.noLoad.format" label="3">齿</el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="noLoad.otherFormat"  label="其他形式">
                                            <el-input size="small" show-word-limit :maxlength="6" v-model="form2.noLoad.otherFormat">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                
                                <el-row :gutter="2">
                                    <el-col :span="4">
                                        <el-form-item label="安装相对轴端面尺寸">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="noLoad.pingzhou" label="平轴">
                                            <el-radio v-model="form2.noLoad.pingzhou" label="1">是</el-radio>
                                            <el-radio v-model="form2.noLoad.pingzhou" label="0">否</el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item prop="noLoad.ao">
                                            <el-input size="small" v-model="form2.noLoad.ao" show-word-limit :maxlength="4">
                                                <template slot="prepend" style="width: 22px;">凹陷</template>
                                                <template slot="append">mm</template>
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item prop="noLoad.tu">
                                            <el-input size="small" v-model="form2.noLoad.tu" show-word-limit :maxlength="4">
                                                <template slot="prepend">突出</template>
                                                <template slot="append">mm</template>
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="2">
                                    <el-col :span="6" :offset="4">
                                        <el-form-item prop="noLoad.peiheSize.top" label-width="0">
                                            <el-input-number size="mini" v-model="form2.noLoad.peiheSize.top" :precision="3" :step="0.001" :max="0.999" :min="0" controls-position="right"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="2">
                                    <el-col :span="7">
                                        <el-form-item prop="noLoad.peiheSize.num" label="联轴器内孔配合尺寸">
                                            <el-input type="text" v-enter-number v-model="form2.noLoad.peiheSize.num">
                                                <template slot="prepend">Ф</template>    
                                                <template slot="append">mm</template>    
                                            </el-input>                                                
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="6">
                                        <el-form-item prop="noLoad.pass" label="达标">
                                            <el-radio v-model="form2.noLoad.pass" label="1">是</el-radio>
                                            <el-radio v-model="form2.noLoad.pass" label="0">否</el-radio>                          
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="11">
                                        <el-form-item prop="noLoad.other" label="其他">
                                            <el-input size="small" show-word-limit :maxlength="30" v-model="form2.noLoad.other"></el-input>
                                        </el-form-item>
                                    </el-col>

                                </el-row>

                                <el-row :gutter="2">
                                    <el-col :span="6" :offset="4">
                                        <el-form-item prop="noLoad.peiheSize.bottom" label-width="0">
                                            <el-input-number size="mini" v-model="form2.noLoad.peiheSize.bottom" :precision="3" :step="0.001" :max="0" :min="-0.999" controls-position="right"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-card>

                            <el-card shadow="never">
                                <div class="break-title">
                                    外观情况
                                </div>
                                <el-row>
                                    <el-col :span="8">
                                        <el-form-item prop="outter.jiexianhe" label="接线盒">
                                            <el-radio v-model="form2.outter.jiexianhe" label="1">好</el-radio>
                                            <el-radio v-model="form2.outter.jiexianhe" label="2">坏</el-radio>
                                            <el-radio v-model="form2.outter.jiexianhe" label="3">无</el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item prop="outter.youzui" label="油嘴">
                                            <el-radio v-model="form2.outter.youzui" label="1">好</el-radio>
                                            <el-radio v-model="form2.outter.youzui" label="2">坏</el-radio>
                                            <el-radio v-model="form2.outter.youzui" label="3">无</el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item prop="outter.luosi" label="螺丝">
                                            <el-radio v-model="form2.outter.luosi" label="1">缺</el-radio>
                                            <el-radio v-model="form2.outter.luosi" label="2">断</el-radio>
                                            <el-radio v-model="form2.outter.luosi" label="3">完好</el-radio>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row>
                                    <el-col :span="8">
                                        <el-form-item prop="outter.jiexianzhu" label="接线柱">
                                            <el-radio v-model="form2.outter.jiexianzhu" label="1">好</el-radio>
                                            <el-radio v-model="form2.outter.jiexianzhu" label="2">坏</el-radio>
                                            <el-radio v-model="form2.outter.jiexianzhu" label="3">无</el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item prop="outter.dijiao" label="地脚">
                                            <el-radio v-model="form2.outter.dijiao" label="1">缺</el-radio>
                                            <el-radio v-model="form2.outter.dijiao" label="2">断</el-radio>
                                            <el-radio v-model="form2.outter.dijiao" label="3">完好</el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item prop="outter.jike" label="机壳">
                                            <el-radio v-model="form2.outter.jike" label="1">破裂</el-radio>
                                            <el-radio v-model="form2.outter.jike" label="2">完好</el-radio>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                
                                <el-row>
                                    <el-col :span="8">
                                        <el-form-item prop="outter.zhou" label="轴">
                                            <el-radio v-model="form2.outter.zhou" label="1">破裂</el-radio>
                                            <el-radio v-model="form2.outter.zhou" label="2">完好</el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item prop="outter.fengzhao" label="风罩风箱">
                                            <el-radio v-model="form2.outter.fengzhao" label="1">缺</el-radio>
                                            <el-radio v-model="form2.outter.fengzhao" label="2">破损</el-radio>
                                            <el-radio v-model="form2.outter.fengzhao" label="3">完好</el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8" label-width="0">
                                        <el-form-item>
                                            其他部件破损及须更换的备件请备注。
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                
                            </el-card>
                            
                            <el-card shadow="never">
                                <div class="break-title">
                                    备注
                                </div>
                                <el-row>
                                    <el-col :span="20">
                                        <el-form-item prop="remark.remark" label="备注">
                                            <el-input size="small" show-word-limit :maxlength="40" v-model="form2.remark.remark"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                
                                <el-row>
                                    <el-col :span="6">
                                        <el-form-item v-if="ABCType == 'A' || 'B' || 'C'" prop="sure1" label="确认人1">
                                            <el-input size="small" show-word-limit :maxlength="40" v-model="form2.remark.sure1"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item v-if="ABCType == 'A' || 'B'" prop="sure2" label="确认人2">
                                            <el-input size="small" show-word-limit :maxlength="40" v-model="form2.remark.sure2"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item v-if="ABCType == 'C'" prop="sure3" label="确认人3">
                                            <el-input size="small" show-word-limit :maxlength="40" v-model="form2.remark.sure3"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-card>

                            <el-card shadow="never">
                                <el-row>
                                    <el-col :span="8">
                                        <el-form-item prop="measureTool" label="测量工具">
                                            <el-input size="small" show-word-limit :maxlength="10" v-model="form2.measureTool"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item prop="bianhao" label="编号">
                                            <el-input size="small" show-word-limit :maxlength="20" v-model="form2.bianhao"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    
                                </el-row>

                                <el-row>
                                    <el-col :span="6">
                                        <el-form-item prop="jiaoyan" label="是否校验">
                                            <el-radio v-model="form2.jiaoyan" label="1">是</el-radio>
                                            <el-radio v-model="form2.jiaoyan" label="0">否</el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="zhouchengFormat" label="轴承形式">
                                            <el-radio v-model="form2.zhouchengFormat" label="1">滚动</el-radio>
                                            <el-radio v-model="form2.zhouchengFormat" label="2">滑动</el-radio>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-card>
                            
                            <el-row :gutter="20">
                                <el-col :span="14" :offset="10">
                                    <el-form-item style="float: right">
                                        <el-button @click="goPre">上一步</el-button>
                                        <el-button >打印表格</el-button>
                                        <el-button :v-if="powerSure" type="primary">确认</el-button>
                                        <el-button :v-if="powerCancelSure" type="danger">取消确认</el-button>
                                        <el-button @click="goBack">返回</el-button> 
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                        
                    </div>
                </transition>
            </div>
        </div>
        
    </div>
</template>


<script>
import Formhead from '@/views/table/process/components/FormHead';
export default {
    components: {
        Formhead
    },
    methods: {
      goBack() {
        console.log('go back');
        // 回到 @/views/table/process/index
      },
      handleSelectionChange(val) {
        this.form1.DangerSelected = val;
      },
      goNext() {
        //   console.log(this.form1.project.type)
          this.next = true;
      },
      goPre() {
        //   console.log(this.form1.project.type)
          this.next = false;
      }
    },
     data() {
         return {
             ABCType: 'B',
             powerSure: true,
            powerCancelSure: true,
             next: true,
             form1: {
                project: {
                    type: '',
                    content: '',
                    ID: '',
                    group: '',
                    address: '',
                    date: '',
                    manager: '',
                    admin: ''

                },
                DangerSelected: []
             },
             form2: {
                 load: {
                    num: '',
                    format: '',
                    otherFormat: '',
                    pingzhou: '',
                    ao: '',
                    tu :'',
                    peiheSize: {
                        num: '',
                        top: '',
                        bottom:''
                    },
                    pass: '',
                    other: ''
                 },
                 noLoad: {
                    num: '',
                    format: '',
                    otherFormat: '',
                    pingzhou: '',
                    ao: '',
                    tu :'',
                    peiheSize: {
                        num: '',
                        top: '',
                        bottom:''
                    },
                    pass: '',
                    other: ''
                 },
                 outter: {
                     jiexianhe: '',
                     youzui: '',
                     youguan: '',
                     luosi: '',
                     jiexianzhu: '',
                     dijiao: '',
                     jike: '',
                     zhou: '',
                     fengzhao:'',
                 },
                 remark: {
                     remark: '',
                    sure1: '',
                    sure2: '',
                    sure3: '',
                 },
                 measureTool: '',
                 bianhao: '',
                 jiaoyan: '',
                 zhouchengFormat: ''
                

             },
             rules2: {},
             rules1: {
                "project.type": [
                    { required: true, message: '不可为空', trigger: 'change' },
                ],
                "project.content": [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { max: 29, message: '最多30个字', trigger: 'change'}
                ],
                "project.ID": [
                    { required: true, message: '不可为空', trigger: 'change' },
                ],
                "project.group": [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { max: 9, message: '最多10个字', trigger: 'change'}
                ],
                "project.address": [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { max: 9, message: '最多10个字', trigger: 'change'}
                ],
                "project.date": [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                "project.manager": [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { max: 3, message: '最多4个字', trigger: 'change'}
                ],
                "project.admin": [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { max: 3, message: '最多4个字', trigger: 'change'}
                ],
             },
             tableData: [
                 {
                    id: '1',
                    type: '身体状况 两穿一戴',
                    mainReason: '意外伤害',
                    measure: '1.1作业人员精神状态良好，两穿一戴齐全，特种岗位或特殊环境作业要求佩戴防护用品。'
                },
                {
                    id: '2',
                    type: '联保互保',
                    mainReason: '意外伤害',
                    measure: '2.1作业中联保互保或临时互保对子明确，禁止单人作业。'
                },
                {
                    id: '3',
                    type: '停机送电确认',
                    mainReason: '触电、灼烫伤',
                    measure: '3.1机电设备检修必须禁操、停电挂牌交底确认，作业人员交底确认，作业人员进行验电（低、高压验电工具）、放电、挂好接地保护线，设警示标识后施工。'
                },
                {
                    id: '3',
                    type: '停机送电确认',
                    mainReason: '触电、灼烫伤',
                    measure: '3.2试车前，确认接地保护线已拆除，无金属和工具、杂物遗留，清点作业人数，由甲方负责指挥，确认无误方可送电试车。'
                },
                {
                    id: '3',
                    type: '停机送电确认',
                    mainReason: '触电、灼烫伤',
                    measure: '3.3电器（电机）现场倒线换方向需重复停电程序后再倒接电源线。'
                },
                {
                    id: '4',
                    type: '起重操作、指吊及设备运输作业',
                    mainReason: '起重伤害、物体打击、意外伤害',
                    measure: '4.1持证专业人员操作起重设备，指挥人员佩带指吊标识，检查确认起吊用机具、索具完好。'
                },
                {
                    id: '4',
                    type: '起重操作、指吊及设备运输作业',
                    mainReason: '起重伤害、物体打击、意外伤害',
                    measure: '4.2一人指挥。起吊前，相关工种协调确认。'
                },
                {
                    id: '4',
                    type: '起重操作、指吊及设备运输作业',
                    mainReason: '起重伤害、物体打击、意外伤害',
                    measure: '4.3设置必要警示区域，专人监护，严禁人员肢体出现在起吊重物下方。'
                },
                {
                    id: '4',
                    type: '起重操作、指吊及设备运输作业',
                    mainReason: '起重伤害、物体打击、意外伤害',
                    measure: '4.4禁止客货混装，大件设备必须封车牢固。'
                },

                {
                    id: '5',
                    type: '高空作业',
                    mainReason: '坠物伤人 滑倒、坠落',
                    measure: '5.1作业人员无禁忌疾病、状况良好。'
                },
                {
                    id: '5',
                    type: '高空作业',
                    mainReason: '坠物伤人 滑倒、坠落',
                    measure: '5.2检查安全带完好，两米以上高空必须正确佩挂安全带。'
                },
                {
                    id: '5',
                    type: '高空作业',
                    mainReason: '坠物伤人 滑倒、坠落',
                    measure: '5.3设区域警示标识，做好联保互保，旁站监护，联络信息通畅，做到“三不伤害”。'
                },
                {
                    id: '5',
                    type: '高空作业',
                    mainReason: '坠物伤人 滑倒、坠落',
                    measure: '5.4拆卸物品放牢固，防高空坠物，禁止上下抛物。'
                },
                {
                    id: '5',
                    type: '高空作业',
                    mainReason: '坠物伤人 滑倒、坠落',
                    measure: '5.5上下行走注意力集中，防跌滑倒，必要时设防坠安全拉绳。'
                },

                {
                    id: '6',
                    type: '有毒有害气体、易燃易爆区域',
                    mainReason: '中毒窒息燃爆',
                    measure: '6.1携带有效的煤气和氧气报警仪。'
                },
                {
                    id: '6',
                    type: '有毒有害气体、易燃易爆区域',
                    mainReason: '中毒窒息燃爆',
                    measure: '6.2必要时佩戴防毒用具或呼吸器。'
                },
                {
                    id: '6',
                    type: '有毒有害气体、易燃易爆区域',
                    mainReason: '中毒窒息燃爆',
                    measure: '6.3油库、煤气、氢气、氨气等易燃易爆区域严禁带火种；使用防爆工具，防爆电筒、安全行灯电压不大于12V。'
                },

                {
                    id: '7',
                    type: '临时用电',
                    mainReason: '触电、灼烫伤',
                    measure: '7.1按甲方指定部位接线，手动电器设备插头完好，有漏电保护。不得乱接乱搭；按规定接地、接零，做到“一机一闸，一漏一箱”。'
                },
                {
                    id: '8',
                    type: '动火作业',
                    mainReason: '火灾',
                    measure: '8.1按甲方动火要求，动火前必须办理动火证，坚持“一点一证”。'
                },
                {
                    id: '8',
                    type: '动火作业',
                    mainReason: '火灾',
                    measure: '8.2配备移动是消防器材，明确动火和看火人。'
                },
                {
                    id: '8',
                    type: '动火作业',
                    mainReason: '火灾',
                    measure: '8.3氧气、乙炔瓶，火源保持三个10米间距。电焊机接线无破损。'
                },

                {
                    id: '9',
                    type: '行车检修',
                    mainReason: '意外伤害',
                    measure: '9.1、禁操、挂停电牌，打道卡、挂警示旗、警示灯，设警示区域。'
                },
                {
                    id: '10',
                    type: '手指口述项目',
                    mainReason: '关键环节确认不到位易造成伤害',
                    measure: ''
                },
            ],

         }
     }
}
</script>

<style lang="scss">
    .el-page-header {
        font-size: 30px;
        padding: 20px;
    }

    .break {
        &-container {
            padding-left: 20px;
            padding-right: 30px;
        }
        &-title {
            font-size: 20px;
            margin-bottom: 30px;
        }

        &-safe {
            margin: 30px;
        }

        // &-form {
        // }
    }

    .input-title {
            display: inline-block;
            font-weight: 900;
            font-size: 14px;
            color: #606266;
            margin-left: 10px;
            margin-right: 10px;
            // margin-bottom: 20px;
        }

</style>