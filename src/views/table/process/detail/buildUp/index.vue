<template>
    <div>
        <el-page-header title="" @back="goBack" content="电机修复工序流程：组装环节">
        </el-page-header>
        <div class="buildUp-container">
            <formhead></formhead>
            <div class="buildUp-process">
                <div class="buildUp-form">
                    <el-form class="buildUp-form" :rules="rules1" ref="form1" :model="form1"  label-position="left">
                        
                        <el-card shadow="never">
                            <el-row :gutter="20" style="margin-top: 20px;">
                            <el-col :span="8">
                                <el-form-item label-width="400px" label="组装前工单已填写完毕，已具备组装条件。"></el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label-width="80px" prop="before.sureMan" label="确认人">
                                    <el-input v-model="form1.before.sureMan" size="small" show-word-limit :maxlength="4"></el-input>
                                </el-form-item>
                            </el-col>
                            
                        </el-row>
                        </el-card>
                        

                        <el-card shadow="never">
                            <div class="buildUp-title">
                                组装前
                            </div>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label-width="80px" prop="before.dzJueyuan" label="定子绝缘">
                                        <el-input v-model="form1.before.dzJueyuan" size="small" v-enter-number show-word-limit :maxlength="4">
                                            <template slot="append">mΩ</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>

                                <el-col :span="6">
                                    <el-form-item label-width="80px" prop="before.zzJueyuan" label="转子绝缘">
                                        <el-input v-model="form1.before.zzJueyuan" size="small" v-enter-number show-word-limit :maxlength="4">
                                            <template slot="append">mΩ</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="8">
                                    <el-form-item prop="before.load.youzhi" label="负荷端油脂型号" label-width="160px">
                                        <el-input v-model="form1.before.load.youzhi" size="small" show-word-limit :maxlength="6"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item prop="before.load.jiayouliang">
                                        <el-checkbox v-model="form1.before.load.jiayouliang">加油量轴承室的1/2至2/3</el-checkbox>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row :gutter="20">
                                <el-col :span="8">
                                    <el-form-item prop="before.noLoad.youzhi" label="无负荷端油脂型号" label-width="160px">
                                        <el-input v-model="form1.before.noLoad.youzhi" size="small" show-word-limit :maxlength="6"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item prop="before.noLoad.jiayouliang">
                                        <el-checkbox v-model="form1.before.noLoad.jiayouliang">加油量轴承室的1/2至2/3</el-checkbox>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-card>

                        <el-card shadow="never">
                            <div class="buildUp-title">
                                组装后
                            </div>

                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <el-form-item label-width="80px" prop="after.dzJueyuan" label="定子绝缘">
                                        <el-input v-model="form1.after.dzJueyuan" size="small" v-enter-number show-word-limit :maxlength="4">
                                            <template slot="append">mΩ</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>

                                <el-col :span="6">
                                    <el-form-item label-width="80px" prop="after.zzJueyuan" label="转子绝缘">
                                        <el-input v-model="form1.after.zzJueyuan" size="small" v-enter-number show-word-limit :maxlength="4">
                                            <template slot="append">mΩ</template>
                                        </el-input>
                                    </el-form-item>
                                </el-col>

                                <el-col :span="6">
                                    <el-form-item label-width="80px" prop="after.sureMan" label="确认人">
                                        <el-input v-model="form1.after.sureMan" size="small" show-word-limit :maxlength="4"></el-input>
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
            //  ABCType: 'C',
             form1: {
                before: {
                    sureMan: '',
                    dzJueyuan: '',
                    zzJueyuan: '',
                    load: {
                        youzhi: '',
                        jiayouliang: false
                    },
                    noLoad: {
                        youzhi: '',
                        jiayouliang: false
                    }
                },
                after : {
                    dzJueyuan: '',
                    zzJueyuan: '',
                    sureMan: ''
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

    .buildUp {
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