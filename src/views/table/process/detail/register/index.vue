<template>
    <div>
        <el-page-header title="" @back="goBack" content="电机修复工序流程：电机回厂信息登记环节">
        </el-page-header>
        <div class="register-container">
            <formhead></formhead>
            <div class="register-process">
                <transition name="el-zoom-in-top">
                    <div style="position: absolute" v-show="!jiaoliu && !zhiliu && !tongbu" class="box1">
                        <el-row class="register-sort" :gutter="100">
                            <el-col :span="6" :offset="3">
                                <el-card @click.native="goJiaoliu" shadow="hover">
                                    交流电机
                                </el-card>
                            </el-col>
                            <el-col :span="6">
                                <el-card  @click.native="goZhiliu" shadow="hover">
                                    直流电机
                                </el-card>
                            </el-col>
                            <el-col :span="6">
                                <el-card  @click.native="goTongbu" shadow="hover">
                                    同步电机
                                </el-card>
                            </el-col>
                        </el-row>
                        <el-row class="register-sort-tip">
                            <span>请从上方选择电机类型</span>
                        </el-row>
                    </div>
                </transition>
                <transition name="el-zoom-in-bottom">
                    <div v-show="jiaoliu || zhiliu || tongbu" class="box2">
                        <div v-if="jiaoliu" class="register-title">
                            交流电机回厂信息登记
                        </div>
                        <div v-if="zhiliu" class="register-title">
                            直流电机回厂信息登记
                        </div>
                        <div v-if="tongbu" class="register-title">
                            同步电机回厂信息登记
                        </div>
                        <el-form class="add-form" :rules="rules1" ref="form1" :model="form1" label-width="auto" label-position="left">
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item  prop="type" label="设备型号">
                                        <el-input size="small" show-word-limit :maxlength="25" v-model="form1.type"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item  prop="capacity" label="设备容量">
                                        <el-input size="small" show-word-limit :maxlength="6" v-model="form1.capacity">
                                            <template slot="append">KW</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item  prop="speed" label="转速">
                                        <el-input size="small" v-model="form1.speed.daxiao">
                                            <el-select style="width: 80px" v-model="form1.speed.danwei" slot="append" placeholder="单位">
                                                <el-option label="r/s" value="r/s"></el-option>
                                                <el-option label="r/min" value="r/min"></el-option>
                                            </el-select>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6"  v-if="jiaoliu">
                                    <el-form-item  prop="level" label="绝缘等级">
                                        <el-select size="small" v-model="form1.level" placeholder="请选择类别">
                                            <el-option label="A" value="A"></el-option>
                                            <el-option label="B" value="B"></el-option>
                                            <el-option label="F/E" value="F/E"></el-option>
                                            <el-option label="H" value="H"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item  prop="factory" label="制造厂家">
                                        <el-input size="small" show-word-limit :maxlength="20" v-model="form1.factory"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item  prop="produceID" label="制造编号">
                                        <el-input size="small" show-word-limit :maxlength="10" v-model="form1.produceID"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item prop="produceTime" label="制造时间">
                                        <el-date-picker
                                            size="small"
                                            v-model="form1.produceTime"
                                            type="month"
                                            placeholder="选择月份">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            
                            <el-row :gutter="20">
                                <el-col :span="6"  v-if="jiaoliu">
                                    <el-form-item  prop="gongzuozhi" label="工作制">
                                        <el-select size="small" v-model="form1.gongzuozhi" placeholder="请选择类别">
                                            <el-option label="S0" value="S0"></el-option>
                                            <el-option label="S1" value="S1"></el-option>
                                            <el-option label="S2" value="S2"></el-option>
                                            <el-option label="S3" value="S3"></el-option>
                                            <el-option label="S4" value="S4"></el-option>
                                            <el-option label="S5" value="S5"></el-option>
                                            <el-option label="S6" value="S6"></el-option>
                                            <el-option label="S7" value="S7"></el-option>
                                            <el-option label="S8" value="S8"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6"  v-if="jiaoliu">
                                    <el-form-item  prop="method" label="接法">
                                        <el-select size="small" v-model="form1.method" placeholder="请选择类别">
                                            <el-option label="△" value="△"></el-option>
                                            <el-option label="Y" value="Y"></el-option>
                                            <el-option label="△/Y" value="△/Y"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6"  v-if="jiaoliu">
                                    <el-form-item prop="frequency" label="额定频率">
                                        <el-select size="small" v-model="form1.frequency" placeholder="请选择频率">
                                            <el-option label="50HZ" value="50HZ"></el-option>
                                            <el-option label="60HZ" value="60HZ"></el-option>
                                            <el-option label="变频" value="变频"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6"  v-if="zhiliu || tongbu">
                                    <el-form-item prop="jishu" label="极数">
                                        <el-input size="small" show-word-limit :maxlength="6" v-model="form1.jishu">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6"  v-if="zhiliu">
                                    <el-form-item prop="liciMethod" label="励磁方式">
                                        <el-select size="small" v-model="form1.liciMethod" placeholder="请选择励磁方式">
                                            <el-option label="并励" value="并励"></el-option>
                                            <el-option label="串励" value="串励"></el-option>
                                            <el-option label="他励" value="他励"></el-option>
                                            <el-option label="复励" value="复励"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6" v-if="zhiliu">
                                    <el-form-item prop="liciVoltage" label="励磁电压">
                                        <el-input size="small" show-word-limit :maxlength="6" v-model="form1.liciVoltage">
                                            <template slot="append">V</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6" v-if="zhiliu">
                                    <el-form-item prop="liciA" label="励磁电流">
                                        <el-input size="small" show-word-limit :maxlength="6" v-model="form1.liciA">
                                            <template slot="append">A</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6" v-if="tongbu">
                                    <el-form-item prop="zzLiciVoltage" label="转子励磁电压">
                                        <el-input size="small" show-word-limit :maxlength="6" v-model="form1.zzLiciVoltage">
                                            <template slot="append">V</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6" v-if="tongbu">
                                    <el-form-item prop="zzLiciA" label="转子励磁电流">
                                        <el-input size="small" show-word-limit :maxlength="6" v-model="form1.zzLiciA">
                                            <template slot="append">A</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item prop="dzVoltage" label="定子额定电压">
                                        <el-input size="small" show-word-limit :maxlength="6" v-model="form1.dzVoltage">
                                            <template slot="append">V</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item prop="zzVoltage" label="转子额定电压">
                                        <el-input size="small" show-word-limit :maxlength="5" v-model="form1.zzVoltage">
                                            <template slot="append">V</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item prop="dzA" label="定子额定电流">
                                        <el-input size="small" show-word-limit :maxlength="6" v-model="form1.dzA">
                                            <template slot="append">A</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item prop="zzA" label="转子额定电流">
                                        <el-input size="small" show-word-limit :maxlength="6" v-model="form1.zzA">
                                            <template slot="append">A</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <div class="box2-size-title">电机安装尺寸</div>
                                <el-col :span="6">
                                    <el-form-item prop="size.H" label-width="0">
                                        <el-input size="small" :max="5000" :min="0" type="text" v-enter-number v-model="form1.size.H">
                                            <template slot="prepend">H</template>
                                            <template slot="append">mm</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item prop="size.A" label-width="0">
                                        <el-input size="small" :max="5000" :min="0" type="text" v-enter-number v-model="form1.size.A">
                                            <template slot="prepend">A</template>
                                            <template slot="append">mm</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item prop="size.B" label-width="0">
                                        <el-input size="small" :max="5000" :min="0" type="text" v-enter-number v-model="form1.size.B">
                                            <template slot="prepend">B</template>
                                            <template slot="append">mm</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item prop="size.d" label-width="0">
                                        <el-input size="small" :max="5000" :min="0" type="text" v-enter-number v-model="form1.size.d">
                                            <template slot="prepend">d</template>
                                            <template slot="append">mm</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item prop="size.AB" label-width="0">
                                        <el-input size="small" :max="5000" :min="0" type="text" v-enter-number v-model="form1.size.AB">
                                            <template slot="prepend">AB</template>
                                            <template slot="append">mm</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item prop="size.D" label-width="0">
                                        <el-input size="small" :max="5000" :min="0" type="text" v-enter-number v-model="form1.size.D">
                                            <template slot="prepend">D</template>
                                            <template slot="append">mm</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item prop="size.L" label-width="0">
                                        <el-input size="small" :max="5000" :min="0" type="text" v-enter-number v-model="form1.size.L">
                                            <template slot="prepend">L</template>
                                            <template slot="append">mm</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item prop="size.E" label-width="0">
                                        <el-input size="small" :max="5000" :min="0" type="text" v-enter-number v-model="form1.size.E">
                                            <template slot="prepend">E</template>
                                            <template slot="append">mm</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            
                            <el-row :gutter="20">
                                <el-col :span="14" :offset="10">
                                    <el-form-item style="float: right">
                                        <el-button @click="goPre" >上一步</el-button>
                                        <el-button >打印表格</el-button>
                                        <el-button :v-if="powerSure" type="primary" @click="onSubmit">确认</el-button>
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

<style lang="scss">
    .register {
        &-container {
            padding-left: 20px;
            padding-right: 30px;
        }

        &-sort {
            margin: 150px;
            &-tip {
                line-height: 200px;
                color: gray;
            }
        }
        
        &-title {
            font-size: 20px;
            margin-bottom: 30px;
        }
    }
    .el-page-header {
        font-size: 30px;
        padding: 20px;
    }

    .box1 {
        // width: 50%;
        height: 50%;
        width: 96%;
        // background: pink;
        text-align: center;
    }

    .box2 {
        margin: 30px;
        &-size-title {
            font-weight: 900;
            font-size: 14px;
            color: #606266;
            margin-left: 10px;
            margin-bottom: 20px;
        }
    }
</style>

<script>
import Formhead from '@/views/table/process/components/FormHead';
export default {
    components: {
        Formhead
    },
    data() {
        var checkSpeed = (rule, value, callback) => {
            // console.log(value)
            if(!value.daxiao) {
                return callback(new Error('不可为空'));
            }
            if(!value.danwei) {
                return callback(new Error('请选择单位'));
            }
        };

        var checkSize = (rule, value, callback) => {
            if(value > 5000 || value < 0) {
                return callback(new Error('只能在0~5000之间'));
            }
        };
        return {
            powerSure: true,
            powerCancelSure: true,
            jiaoliu: false,
            zhiliu: false,
            tongbu: false,
            form1: {
                type: '',
                capacity: '',
                dzVoltage: '',
                zzVoltage: '',
                factory: '',
                speed: {
                    daxiao: '',
                    danwei: ''
                },
                level: '',
                produceID: '',
                produceTime: '',
                method:'',
                dzA: '', 
                zzA: '',
                gongzuozhi: '',
                frequency: '',
                size: {
                    H: '',
                    A: '',
                    B: '',
                    d: '',
                    AB: '',
                    D: '',
                    L: '',
                    E: ''
                },
                jishu: '',
                liciMethod: '',


            },
            rules1: {
                type: [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { max: 24, message: '最多25个字', trigger: 'change'}
                ],
                capacity: [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { max: 5, message: '最多6个字', trigger: 'change'}
                ],
                speed: [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { validator: checkSpeed, trigger: 'change' }
                ],
                level: [
                    { required: true, message: '请选择等级', trigger: 'change' }
                ],
                factory: [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { max: 19, message: '最多20个字', trigger: 'change'}
                ],
                produceID: [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { max: 9, message: '最多10个字', trigger: 'change'}
                ],
                produceTime: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                gongzuozhi: [
                    { required: true, message: '请选择工作制', trigger: 'change' }
                ],
                method: [
                    { required: true, message: '请选择接法', trigger: 'change' }
                ],
                frequency: [
                    { required: true, message: '请选择频率', trigger: 'change' }                    
                ],
                dzVoltage: [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { max: 5, message: '最多6个字', trigger: 'change'}
                ],
                zzVoltage: [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { max: 4, message: '最多5个字', trigger: 'change'}
                ],
                dzA: [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { max: 5, message: '最多6个字', trigger: 'change'}
                ],
                zzA: [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { max: 5, message: '最多6个字', trigger: 'change'}
                ],
                "size.H": [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { validator: checkSize, trigger: 'change' }
                ],
                "size.A": [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { validator: checkSize, trigger: 'change' }
                ],
                "size.B": [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { validator: checkSize, trigger: 'change' }
                ],
                "size.d": [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { validator: checkSize, trigger: 'change' }
                ],
                "size.AB": [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { validator: checkSize, trigger: 'change' }
                ],
                "size.D": [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { validator: checkSize, trigger: 'change' }
                ],
                "size.L": [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { validator: checkSize, trigger: 'change' }
                ],
                "size.E": [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { validator: checkSize, trigger: 'change' }
                ],
                jishu: [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { max: 5, message: '最多6个字', trigger: 'change'}
                ],
                liciMethod: [
                    { required: true, message: '请选择励磁方式', trigger: 'change' }
                ],
                liciVoltage: [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { max: 5, message: '最多6个字', trigger: 'change'}
                ],
                liciA: [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { max: 5, message: '最多6个字', trigger: 'change'}
                ],
                zzLiciVoltage: [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { max: 5, message: '最多6个字', trigger: 'change'}
                ],
                zzLiciA: [
                    { required: true, message: '不可为空', trigger: 'change' },
                    { max: 5, message: '最多6个字', trigger: 'change'}
                ]

            }
        }
    },
    methods: {
      goBack() {
        console.log('go back');
        // 回到 @/views/table/process/index
      },
      goPre() {
          this.jiaoliu = false;
          this.zhiliu = false;
          this.tongbu = false;
      },
      goJiaoliu() {
          this.jiaoliu = true;
          this.zhiliu = false;
          this.tongbu = false;
      },
      goZhiliu() {
          this.jiaoliu = false;
          this.zhiliu = true;
          this.tongbu = false;
      },
      goTongbu() {
          this.jiaoliu = false;
          this.zhiliu = false;
          this.tongbu = true;
      },
       onSubmit() {
        //    console.log(this.form1.speed.daxiao)
        //    console.log(this.form1.speed.danwei)
           this.$refs.form1.validate(valid => {
            if (valid) {
                
            }
            
        });
       }
    }
}
</script>