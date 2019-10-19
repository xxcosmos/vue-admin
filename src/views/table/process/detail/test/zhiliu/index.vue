<template>
    <div>
        <el-page-header title="" @back="goBack" content="电机修复工序流程：试验环节（直流电机）">
        </el-page-header>
        <div class="test-container">
            <formhead></formhead>
            <div class="test-process">
                <transition name="el-zoom-in-top">
                    <div class="test-form">
                        <el-form class="test-form" :rules="rules1" ref="form1" :model="form1"  label-position="left">
                            <el-card shadow="never">
                                <div class="test-title">
                                    定子绝缘电阻（mΩ）
                                </div>

                                <el-row :gutter="20">
                                    <el-col :span="8">
                                        <el-form-item prop="dz.jueyuanR.biaoGuige" label="兆欧表规格" label-width="100px">
                                            <el-radio label="500" v-model="form1.dz.jueyuanR.biaoGuige">500v</el-radio>
                                            <el-radio label="1000" v-model="form1.dz.jueyuanR.biaoGuige">1000v</el-radio>
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="6">
                                        <el-form-item prop="dz.jueyuanR.wendu" label="温度" label-width="60px">
                                            <el-input size="small" v-enter-number show-word-limit :maxlength="2" v-model="form1.dz.jueyuanR.wendu">
                                                <template slot="append">℃</template>
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item prop="dz.jueyuanR.bingjiRaozu" label="并激绕组" label-width="80px">
                                            <el-input-number v-model="form1.dz.jueyuanR.bingjiRaozu" size="small" :precision="1" :step="0.1" :max="9999.9" :min="0"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="dz.jueyuanR.huanxiangRaozu" label="换向绕组" label-width="80px">
                                            <el-input-number v-model="form1.dz.jueyuanR.huanxiangRaozu" size="small" :precision="1" :step="0.1" :max="9999.9" :min="0"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="dz.jueyuanR.buchangRaozu" label="补偿绕组" label-width="80px">
                                            <el-input-number v-model="form1.dz.jueyuanR.buchangRaozu" size="small" :precision="1" :step="0.1" :max="9999.9" :min="0"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="dz.jueyuanR.chuanliRaozu" label="串励绕组" label-width="80px">
                                            <el-input-number v-model="form1.dz.jueyuanR.chuanliRaozu" size="small" :precision="1" :step="0.1" :max="9999.9" :min="0"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-card>

                            <el-card shadow="never">
                                <div class="test-title">
                                    转子绝缘电阻（mΩ）
                                </div>

                                <el-row :gutter="20">
                                    <el-col :span="8">
                                        <el-form-item prop="zz.jueyuanR.biaoGuige" label="兆欧表规格" label-width="100px">
                                            <el-radio label="500" v-model="form1.zz.jueyuanR.biaoGuige">500v</el-radio>
                                            <el-radio label="1000" v-model="form1.zz.jueyuanR.biaoGuige">1000v</el-radio>
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="6">
                                        <el-form-item prop="zz.jueyuanR.wendu" label="温度" label-width="60px">
                                            <el-input size="small" v-enter-number show-word-limit :maxlength="2" v-model="form1.zz.jueyuanR.wendu">
                                                <template slot="append">℃</template>
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item prop="zz.jueyuanR.dianshu" label="电枢" label-width="80px">
                                            <el-input-number v-model="form1.zz.jueyuanR.dianshu" size="small" :precision="1" :step="0.1" :max="9999.9" :min="0"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="zz.jueyuanR.huilu" label="电枢回路" label-width="80px">
                                            <el-input-number v-model="form1.zz.jueyuanR.huilu" size="small" :precision="1" :step="0.1" :max="9999.9" :min="0"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-card>

                            <el-card shadow="never">
                                <div class="test-title">
                                    定子直流电阻（mΩ）
                                </div>

                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item prop="dz.zhiliuR.biaoGuige" label="仪表：" label-width="60px">
                                            电桥
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="6">
                                        <el-form-item prop="dz.zhiliuR.wendu" label="温度" label-width="60px">
                                            <el-input size="small" v-enter-number show-word-limit :maxlength="2" v-model="form1.dz.zhiliuR.wendu">
                                                <template slot="append">℃</template>
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item prop="dz.zhiliuR.bingjiRaozu" label="并激绕组" label-width="80px">
                                            <el-input-number v-model="form1.dz.zhiliuR.bingjiRaozu" size="small" :precision="4" :step="0.0001" :max="999.9999" :min="0"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="dz.zhiliuR.huanxiangRaozu" label="换向绕组" label-width="80px">
                                            <el-input-number v-model="form1.dz.zhiliuR.huanxiangRaozu" size="small" :precision="4" :step="0.0001" :max="999.9999" :min="0"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="dz.zhiliuR.buchangRaozu" label="补偿绕组" label-width="80px">
                                            <el-input-number v-model="form1.dz.zhiliuR.buchangRaozu" size="small" :precision="4" :step="0.0001" :max="999.9999" :min="0"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="dz.zhiliuR.chuanliRaozu" label="串励绕组" label-width="80px">
                                            <el-input-number v-model="form1.dz.zhiliuR.chuanliRaozu" size="small" :precision="4" :step="0.0001" :max="999.9999" :min="0"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-card>

                            <el-card shadow="never">
                                <div class="test-title">
                                    转子直流电阻（mΩ）
                                </div>

                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item prop="zz.zhiliuR.biaoGuige" label="仪表：" label-width="60px">
                                            电桥
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="6">
                                        <el-form-item prop="zz.zhiliuR.wendu" label="温度" label-width="60px">
                                            <el-input size="small" v-enter-number show-word-limit :maxlength="2" v-model="form1.zz.zhiliuR.wendu">
                                                <template slot="append">℃</template>
                                            </el-input>
                                        </el-form-item>
                                    </el-col>

                                    <el-col :span="6">
                                        <el-form-item prop="zz.zhiliuR.dianshu" label="电枢" label-width="80px">
                                            <el-input-number v-model="form1.zz.zhiliuR.dianshu" size="small" :precision="4" :step="0.0001" :max="999.9999" :min="0"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-card>


                            <el-card shadow="never">
                                <div class="test-title">
                                    工频耐压试验  （kV/1min）
                                </div>
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item prop="naiya.bingjiRaozu" label="并激绕组" label-width="80px">
                                            <el-input-number size="small" v-model="form1.naiya.bingjiRaozu" :precision="2" :step="0.01" :max="9.99" :min="0"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="naiya.huanxiangRaozu" label="换向绕组" label-width="80px">
                                            <el-input-number size="small" v-model="form1.naiya.huanxiangRaozu" :precision="2" :step="0.01" :max="9.99" :min="0"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="naiya.buchangRaozu" label="补偿绕组" label-width="80px">
                                            <el-input-number size="small" v-model="form1.naiya.buchangRaozu" :precision="2" :step="0.01" :max="9.99" :min="0"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="naiya.chuanliRaozu" label="串励绕组" label-width="80px">
                                            <el-input-number size="small" v-model="form1.naiya.chuanliRaozu" :precision="2" :step="0.01" :max="9.99" :min="0"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-form-item prop="naiya.dianshu" label="电枢" label-width="60px">
                                        <el-input-number size="small" v-model="form1.naiya.dianshu" :precision="2" :step="0.01" :max="9.99" :min="0"></el-input-number>
                                    </el-form-item>
                                </el-row>
                            </el-card>


                            <el-card shadow="never">
                                <div class="test-title">
                                    空载试验
                                </div>
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item prop="kongzai.dianshuV" label-width="80px" label="电枢电压V">
                                            <el-input size="small" v-model="form1.kongzai.dianshuV" show-word-limit :maxlength="4" v-enter-number></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="kongzai.dianshuA" label-width="80px" label="电枢电流A">
                                            <el-input size="small" v-model="form1.kongzai.dianshuA" show-word-limit :maxlength="3" v-enter-number></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="kongzai.liciV" label-width="80px" label="励磁电压V">
                                            <el-input size="small" v-model="form1.kongzai.liciV" show-word-limit :maxlength="4" v-enter-number></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="kongzai.dliciA" label-width="80px" label="励磁电流A">
                                            <el-input-number size="small" v-model="form1.kongzai.dliciA" :precision="1" :step="0.1" :max="999.9" :min="0"></el-input-number>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item prop="kongzai.zhuansu" label="转速rpm" label-width="80px">
                                            <el-input size="small" v-model="form1.kongzai.zhuansu" v-enter-number show-word-limit :maxlength="4"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="kongzai.wendu" label="温度℃" label-width="60px">
                                            <el-input size="small" v-model="form1.kongzai.wendu" show-word-limit v-enter-number :maxlength="2"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-card>

                            <el-card shadow="never">
                                <div class="test-title">
                                    其它试验
                                </div>
                                <el-form-item prop="other">
                                    <el-input size="small" type="textarea" :rows="2" show-word-limit :maxlength="200"></el-input>
                                </el-form-item>
                            </el-card>

                            <el-card shadow="never">
                                <div class="test-title">
                                    试验结论
                                </div>
                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item prop="jielun">
                                            <el-radio v-model="form1.jielun" label="1">合格</el-radio>
                                            <el-radio v-model="form1.jielun" label="0">不合格</el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6" v-if="form1.jielun == '0'">
                                        <el-form-item prop="buhege">
                                            <el-radio v-model="form1.buhege" label="baofei">报废</el-radio>
                                            <el-radio v-model="form1.buhege" label="quexian">缺陷告知</el-radio>
                                            <el-radio v-model="form1.buhege" label="fanxiu">返修</el-radio>
                                        </el-form-item>
                                    </el-col>
                                </el-row>

                                <el-row :gutter="20">
                                    <el-col :span="6">
                                        <el-form-item prop="shiyanren" label="试验人" label-width="80px">
                                            <el-input size="small" v-model="form1.shiyanren" show-word-limit :maxlength="4"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="shenheren" label="审核人" label-width="80px">
                                            <el-input size="small" v-model="form1.shenheren" show-word-limit :maxlength="4"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="6">
                                        <el-form-item prop="sureMan" label="确认人" label-width="80px">
                                            <el-input size="small" v-model="form1.sureMan" show-word-limit :maxlength="4"></el-input>
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
             ABCType: 'C',
             form1: {
                dz: {
                    jueyuanR: {
                        biaoGuige: '',
                        wendu: '',
                        bingjiRaozu: '',
                        huanxiangRaozu: '',
                        buchangRaozu: '',
                        chuanliRaozu: ''
                    },
                    zhiliuR: {
                        wendu: '',
                        bingjiRaozu: '',
                        huanxiangRaozu: '',
                        buchangRaozu: '',
                        chuanliRaozu: ''
                    }
                },
                zz: {
                    jueyuanR: {
                        biaoGuige: '',
                        wendu: '',
                        dianshu: '',
                        huilu: ''
                    },
                    zhiliuR: {
                        wendu: '',
                        dianshu: ''
                    }
                },
                naiya: {
                    bingjiRaozu: '',
                    huilu: '',
                    buchangRaozu: '',
                    chuanliRaozu: '',
                    dianshu: ''
                },
                kongzai: {
                    dianshuV: '',
                    dianshuA: '',
                    liciV: '',
                    liciA: '',
                    chuansu: '',
                    wendu: ''
                },
                other: '',
                jielun: '',
                buhege: '',
                shiyanren: '',
                shenheren: '',
                sureMan: ''
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

    .test {
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