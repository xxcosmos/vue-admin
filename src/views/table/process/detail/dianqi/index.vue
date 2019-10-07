<template>
    <div>
        <el-page-header title="" @back="goBack" content="电机修复工序流程：分解环节">
        </el-page-header>
        <div class="dianqi-container">
            <formhead></formhead>
            <div class="dianqi-process">
                <transition name="el-zoom-in-top">
                    <div class="dianqi-form">
                        <el-form class="xiaozhong-form" :rules="rules1" ref="form1" :model="form1"  label-position="left">
                            <el-card shadow="never">
                                <div class="dianqi-title">
                                    引出线及铜头
                                </div>
                                <el-row :gutter="0">
                                    <el-col :span="6">
                                        <el-form-item label="引出线（含刷线、）完好/裂化/破损漏铜">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="16">
                                        <el-row>
                                            <el-col :span="18">
                                                <el-form-item  label="常见问题处理"   >
                                                    <el-radio v-model="form1.yinchuxian.xiufu" label="xiufu">修复</el-radio>
                                                    <el-radio v-model="form1.yinchuxian.xiufu" label="genghuan">更换</el-radio>
                                                    <el-radio v-model="form1.yinchuxian.xiufu" label="jiachang">更换且加长</el-radio>
                                                    <el-checkbox v-model="form1.yinchuxian.biaozhi">相序标志，连接方式明确</el-checkbox>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6" v-if="form1.yinchuxian.xiufu == 'jiachang'">
                                                <el-input size="small" show-word-limit  v-enter-number type="text" :maxlength="4" v-model="form1.yinchuxian.jiachang">
                                                    <template slot="append">mm</template>
                                                </el-input>
                                            </el-col>
                                            
                                        </el-row>
                                        <el-row>
                                            <el-form-item  label="技术要求"   v-if="form1.yinchuxian.xiufu == 'xiufu' || form1.yinchuxian.biaozhi == true">
                                                <template v-if="form1.yinchuxian.xiufu == 'xiufu'">根据局部绝缘层裂化、破损程度补强绝缘,包扎层数。</template>
                                                <template v-if="form1.yinchuxian.biaozhi == true">引出线首尾端的符号标志清楚、绑扎牢固。</template>
                                            </el-form-item>
                                        </el-row>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="0">
                                    <el-col :span="6">
                                        <el-form-item label="铜头完好/破损/锈蚀">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="16">
                                        <el-form-item  label="常见问题处理"   >
                                            <el-checkbox v-model="form1.tongtou.genghuan">更换</el-checkbox>
                                            <el-checkbox v-model="form1.tongtou.kaikou_fangyanghua">开口铜头防氧化处理</el-checkbox>
                                            <el-checkbox v-model="form1.tongtou.tongpaishi_fangyanghua">铜排式铜头防氧化处理</el-checkbox>
                                            <el-checkbox v-model="form1.tongtou.huiliupai_fangyanghua">汇流排防氧化处理</el-checkbox>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-card>

                            <el-card shadow="never">
                                <div class="dianqi-title">
                                    绕组
                                </div>
                                <el-row :gutter="0">
                                    <el-col :span="6">
                                        <el-form-item label="清洗">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="16">
                                        <el-row>
                                            <el-col :span="18">
                                                <el-form-item  label="方式">
                                                    <el-checkbox v-model="form1.qingxi.qingshui">用过滤清水清洗</el-checkbox>
                                                    <el-checkbox v-model="form1.qingxi.daidian">用带电清洗剂清洗</el-checkbox>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="0">
                                    <el-col :span="6">
                                        <el-form-item label="干燥">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <!-- <el-row> -->
                                            <!-- <el-col :span="12"> -->
                                                <el-form-item prop="ganzao" label-width="50px" label="时长">
                                                    <el-input size="small" show-word-limit  v-enter-number type="text" :maxlength="2" v-model="form1.ganzao">
                                                        <template slot="append">小时</template>
                                                    </el-input>
                                                </el-form-item>
                                            <!-- </el-col> -->
                                        <!-- </el-row> -->
                                    </el-col>
                                </el-row>

                                <el-row :gutter="0">
                                    <el-col :span="6">
                                        <el-form-item label="绝缘（兆欧）及直阻（欧）：交流">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="18">
                                        <el-row>
                                            <el-col :span="8">
                                                <el-form-item prop="jiaoliu.dingzi" label="定子对地">
                                                    <el-input-number size="small" v-model="form1.jiaoliu.dingzi" :precision="1" :step="0.1" :max="999.9"></el-input-number>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="8">
                                                <el-form-item prop="jiaoliu.zhuanzi" label="转子对地">
                                                    <el-input-number size="small" v-model="form1.jiaoliu.zhuanzi" :precision="1" :step="0.1" :max="999.9"></el-input-number>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="8">
                                                <el-form-item prop="jiaoliu.xiangjian" label="相间">
                                                    <el-input-number size="small" v-model="form1.jiaoliu.xiangjian" :precision="1" :step="0.1" :max="999.9"></el-input-number>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>

                                        <el-row>
                                            <el-col :span="8">
                                                <el-form-item prop="jiaoliu.sanxiang.daxiao" label="三相直阻">
                                                    <el-input-number size="small" v-model="form1.jiaoliu.sanxiang.daxiao" :precision="4" :step="0.0001" :max="999.9999"></el-input-number>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item prop="jiaoliu.sanxiang.danwei" label="单位">
                                                    <el-select size="small" v-model="form1.jiaoliu.sanxiang.danwei" placeholder="请选择单位">
                                                        <el-option label="Ω" value="Ω"></el-option>
                                                        <el-option label="mΩ" value="mΩ"></el-option>                                                        
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                        <el-row>
                                            <el-col :span="8">
                                                <el-form-item prop="jiaoliu.xishoubi" label="吸收比">
                                                    <el-input-number size="small" v-model="form1.jiaoliu.xishoubi" :precision="1" :step="0.1" :max="9.9"></el-input-number>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                </el-row>


                                <el-row :gutter="0">
                                    <el-col :span="6">
                                        <el-form-item label="绝缘（兆欧）及直阻（欧）：直流">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="18">
                                        <el-row>
                                            <el-col :span="8">
                                                <el-form-item prop="zhiliu.bingji" label="并极对地">
                                                    <el-input-number size="small" v-model="form1.zhiliu.bingji" :precision="4" :step="0.0001" :max="999.9999"></el-input-number>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>

                                        <el-row>
                                            <el-col :span="8">
                                                <el-form-item prop="zhiliu.zhengliuji.daxiao" label="整流极对地">
                                                    <el-input-number size="small" v-model="form1.zhiliu.zhengliuji.daxiao" :precision="4" :step="0.0001" :max="999.9999"></el-input-number>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item prop="zhiliu.zhengliuji.danwei" label="单位" >
                                                    <el-select size="small" v-model="form1.zhiliu.zhengliuji.danwei" placeholder="请选择单位">
                                                        <el-option label="Ω" value="Ω"></el-option>
                                                        <el-option label="mΩ" value="mΩ"></el-option>                                                        
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                        
                                        <el-row>
                                            <el-col :span="8">
                                                <el-form-item prop="zhiliu.dianshu.daxiao" label="电枢对地"  >
                                                    <el-input-number size="small" v-model="form1.zhiliu.dianshu.daxiao" :precision="4" :step="0.0001" :max="999.9999"></el-input-number>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item prop="zhiliu.dianshu.danwei" label="单位"  >
                                                    <el-select size="small" v-model="form1.zhiliu.dianshu.danwei" placeholder="请选择单位">
                                                        <el-option label="Ω" value="Ω"></el-option>
                                                        <el-option label="mΩ" value="mΩ"></el-option>                                                        
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>

                                        <el-row>
                                            <el-col :span="8">
                                                <el-form-item prop="zhiliu.bingjizhizu.daxiao" label="并极直阻"  >
                                                    <el-input-number size="small" v-model="form1.zhiliu.bingjizhizu.daxiao" :precision="4" :step="0.0001" :max="999.9999"></el-input-number>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item prop="zhiliu.bingjizhizu.danwei" label="单位"  >
                                                    <el-select size="small" v-model="form1.zhiliu.bingjizhizu.danwei" placeholder="请选择单位">
                                                        <el-option label="Ω" value="Ω"></el-option>
                                                        <el-option label="mΩ" value="mΩ"></el-option>                                                        
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>

                                        <el-row>
                                            <el-col :span="8">
                                                <el-form-item prop="zhiliu.chuanji.daxiao" label="串极、补偿直阻"  >
                                                    <el-input-number size="small" v-model="form1.zhiliu.chuanji.daxiao" :precision="4" :step="0.0001" :max="999.9999"></el-input-number>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item prop="zhiliu.chuanji.danwei" label="单位"  >
                                                    <el-select size="small" v-model="form1.zhiliu.chuanji.danwei" placeholder="请选择单位">
                                                        <el-option label="Ω" value="Ω"></el-option>
                                                        <el-option label="mΩ" value="mΩ"></el-option>                                                        
                                                    </el-select>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>

                                        <el-row>
                                            <el-col :span="6">
                                                <el-form-item label="测试片间电阻"  >
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item prop="zhiliu.shenggao" label="升高片数"  >
                                                    <el-input size="small"  style="width: 80px;" v-model="form1.zhiliu.shenggao"  v-enter-number type="text" show-word-limit :maxlength="4"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-form-item prop="zhiliu.mV" label="阻值（mV）"  >
                                                    <el-input-number size="small" v-model="form1.zhiliu.mV" :precision="2" :step="0.01" :max="99.99"></el-input-number>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="0">
                                    <el-col :span="6">
                                        <el-form-item label="绕组绝缘结构缺陷无/有">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="18">
                                        <el-form-item  label="常见问题处理"   >
                                            <el-checkbox v-model="form1.jueyuanxiufu">绕组端部及连接线（软、硬）局部绝缘修复口</el-checkbox>
                                            <el-checkbox v-model="form1.lianjiexian">连接线更换</el-checkbox>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="0">
                                    <el-col :span="6">
                                        <el-form-item label="绕组连接缺陷无/有">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="18">
                                        <el-form-item  label="常见问题处理"   >
                                            <el-checkbox v-model="form1.bingtongtao">并铜套开焊、烧损</el-checkbox>
                                            <el-checkbox v-model="form1.kaigaopian">开高片断裂</el-checkbox>
                                            <el-checkbox v-model="form1.zhongxingdian">中性点烧损</el-checkbox>
                                            <el-checkbox v-model="form1.lianjieluosi">连接螺丝松动</el-checkbox>
                                            <el-checkbox v-model="form1.qinggou">换向片清沟</el-checkbox>
                                            <el-checkbox v-model="form1.daoling">换向片倒棱</el-checkbox>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                
                            </el-card>
                            <el-card shadow="never">
                                <el-row :gutter="0">
                                    <el-col :span="6" :offset="10">
                                        <el-form-item label="是否需要大修">
                                            <el-checkbox v-model="daxiu"></el-checkbox>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-card>
                            <el-row v-if="!daxiu" :gutter="20">
                                <el-col :span="16" :offset="8">
                                    <el-form-item style="float: right">
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
                <transition name="el-zoom-in-top">
                    <div v-show="daxiu" class="dianqi-form">
                        <el-form class="xiaozhong-form" :rules="rules2" ref="form2" :model="form2" label-position="left">
                            <el-card shadow="never">
                                <div class="dianqi-title">
                                    绕阻数据
                                </div>
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item   prop="raozu.xingshi" label-width="80px" label="绕阻形式">
                                            <el-input size="small" show-word-limit :maxlength="10" v-model="form2.raozu.xingshi"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="5">
                                        <el-form-item prop="raozu.jiejv" label-width="80px" label="绕阻节距">
                                            <el-input size="small" show-word-limit :maxlength="5" v-model="form2.raozu.jiejv"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="raozu.zhilushu.daxiao" label-width="90px" label="并联支路数" >
                                            <el-input size="small"  v-enter-number type="text" show-word-limit :maxlength="2" v-model="form2.raozu.zhilushu.daxiao">
                                                <el-select style="width: 50px" slot="append" size="small" v-model="form2.raozu.zhilushu.danwei" placeholder="单位">
                                                    <el-option label="△" value="△"></el-option>
                                                    <el-option label="Y" value="Y"></el-option>
                                                    <el-option label="△/Y" value="△/Y"></el-option>
                                                </el-select>
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="raozu.zhijing"  label-width="80px" label="导线直径">
                                            <el-input-number :precision="2" :step="2" :max="99.99" size="small" v-model="form2.raozu.zhijing"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item prop="raozu.bingraogenshu"  label-width="80px" label="并绕根数">
                                            <el-input size="small" show-word-limit :maxlength="3"  v-enter-number type="text" v-model="form2.raozu.bingraogenshu"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="5">
                                        <el-form-item prop="raozu.zashu"  label-width="80px" label="绕阻节距">
                                            <el-input size="small" show-word-limit :maxlength="3"  v-enter-number type="text" v-model="form2.raozu.zashu"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item prop="raozu.shenchuchangdu"  label-width="140px" label="线圈端部伸出长度" >
                                            <el-input size="small"  v-enter-number type="text" show-word-limit :maxlength="4" v-model="form2.raozu.shenchuchangdu">
                                                <template slot="append">mm</template>
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                
                            </el-card>
                            
                            <el-card shadow="never">
                                <div class="dianqi-title">
                                    铁芯数据
                                </div>
                                <el-row :gutter="20">
                                    <el-col :span="8">
                                        <el-form-item prop="tiexin.dzneijing"  label-width="120px" label="定子铁芯内径">
                                            <el-input size="small" show-word-limit :maxlength="4" v-model="form2.tiexin.dzneijing">
                                                <template slot="append">mm</template>
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item prop="tiexin.zzwaijing"  label-width="120px" label="转子铁芯外径">
                                            <el-input size="small" show-word-limit :maxlength="4" v-model="form2.tiexin.zzwaijing">
                                                <template slot="append">mm</template>
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item prop="tiexin.dzzchangdu"  label-width="120px" label="定转子铁芯长度">
                                            <el-input size="small" show-word-limit :maxlength="4" v-model="form2.tiexin.dzzchangdu">
                                                <template slot="append">mm</template>
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-col :span="4">
                                        <el-form-item prop="tiexin.dzcaoshu"  label-width="80px" label="定子槽数">
                                            <el-input size="small" show-word-limit :maxlength="3"  v-enter-number type="text" v-model="form2.tiexin.dzcaoshu"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-form-item prop="tiexin.zzcaoshu"  label-width="80px" label="转子槽数">
                                            <el-input size="small" show-word-limit :maxlength="3"  v-enter-number type="text" v-model="form2.tiexin.zzcaoshu"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="tiexin.caoxingchicun"  label-width="180px" label="槽形尺寸（半、开口槽）" >
                                            <el-input size="small"  v-enter-number type="text" show-word-limit :maxlength="4" v-model="form2.tiexin.caoxingchicun"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="40">
                                    <el-col :span="4">
                                        <el-form-item label="磁极尺寸(主极)">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-form-item  prop="tiexin.zhuji.chang"  label-width="40px" label="长">
                                            <el-input size="small" show-word-limit :maxlength="3"  v-enter-number type="text" v-model="form2.tiexin.zhuji.chang"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-form-item  prop="tiexin.zhuji.kuan" label-width="40px" label="宽">
                                            <el-input size="small" show-word-limit :maxlength="3"  v-enter-number type="text" v-model="form2.tiexin.zhuji.kuan"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-form-item  prop="tiexin.zhuji.gao" label-width="40px" label="高">
                                            <el-input size="small" show-word-limit :maxlength="3"  v-enter-number type="text" v-model="form2.tiexin.zhuji.gao"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                
                                <el-row :gutter="40">
                                    <el-col :span="4">
                                        <el-form-item label="磁极尺寸(补极)">
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-form-item  prop="tiexin.buji.chang"  label-width="40px" label="长">
                                            <el-input size="small" show-word-limit :maxlength="3"  v-enter-number type="text" v-model="form2.tiexin.buji.chang"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-form-item  prop="tiexin.buji.kuan" label-width="40px" label="宽">
                                            <el-input size="small" show-word-limit :maxlength="3"  v-enter-number type="text" v-model="form2.tiexin.buji.kuan"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="4">
                                        <el-form-item  prop="tiexin.buji.gao" label-width="40px" label="高">
                                            <el-input size="small" show-word-limit :maxlength="3"  v-enter-number type="text" v-model="form2.tiexin.buji.gao"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-card>
                            
                            <el-row :gutter="20">
                                <el-col :span="16" :offset="8">
                                    <el-form-item style="float: right">
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
      goNext() {
        //   console.log(this.form1.project.type)
          this.daxiu = true;
      },
    },
     data() {
         return {
             powerSure: true,
            powerCancelSure: true,
             ABCType: 'B',
             daxiu: true,
             form1: {
                 yinchuxian: {
                    xiufu: '',
                    jiachang: '',
                    biaozhi: false
                },
                tongtou: {
                    genghuan: false,
                    kaikou_fangyanghua: false,
                    tongpaishi_fangyanghua: false,
                    huiliupai_fangyanghua: false
                },
                qingxi: {
                    qingshui: false,
                    daidian: false
                },
                ganzao: '',
                jiaoliu: {
                    dingzi: '',
                    zhuanzi: '',
                    xiangjian: '',
                    sanxiang: {
                        daxiao: '',
                        danwei: ''
                    },
                    xishoubi: ''
                },
                zhiliu: {
                    bingji: '',
                    zhengliuji: {
                        daxiao: '',
                        danwei: ''
                    },
                    dianshu: {
                        daxiao: '',
                        danwei: ''
                    },
                    bingjizhizu: {
                        daxiao: '',
                        danwei: ''
                    },
                    chuanji: {
                        daxiao: '',
                        danwei: ''
                    },
                    shenggao: '',
                    mV:''
                },
                jueyuanxiufu: false,
                lianjiexian: false,
                bingtongtao: false,
                kaigaopian: false,
                zhongxingdian: false,
                lianjieluosi: false,
                qinggou: false,
                daoling: false
             },

             form2: {
                 raozu: {
                     xingshi: '',
                     jiejv: '',
                     zhilushu: {
                         daxiao:'',
                         danwei: ''
                     },
                     zhijing:'',
                     bingraogenshu: '',
                     zashu: '',
                     shenchuchangdu: ''
                 },
                 tiexin: {
                     dzneijing: '',
                     zzwaijing: '',
                     dzzchangdu: '',
                     dzcaoshu: '',
                     zzcaoshu: '',
                     caoxingchicun: '',
                     zhuji: {
                         chang: '',
                         kuan: '',
                         gao: ''
                     },
                     buji: {
                         chang: '',
                         kuan: '',
                         gao: ''
                     }
                 }
             },
             
             rules1: {
                
             },

             rules2: {

             },
             tableData: [
                 
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

    .dianqi {
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