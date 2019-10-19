<template>
    <div>
        <el-page-header title="" @back="goBack" content="电机修复工序流程：出场确认环节">
        </el-page-header>
        <div class="finish-container">
            <formhead></formhead>
            <div class="finish-process">
                <div class="finish-form">
                    <el-form class="finish-form" :rules="rules1" ref="form1" :model="form1"  label-position="left">
                        
                        <!-- <el-card shadow="never"> -->
                        <div class="finish-box">
                            <!-- <el-row :gutter="60" style="margin-top: 20px;"> -->
                                    <el-form-item prop="jieshouren" label-width="100px" label="接收人">
                                        <el-input v-model="form1.jieshouren" show-word-limit :maxlength="3"></el-input>
                                    </el-form-item>
                                
                            <!-- </el-row> -->

                            <!-- <el-row :gutter="60" style="margin-top: 20px;"> -->
                                <el-form-item prop="finishDate" label-width="100px" label="出厂日期">
                                        <el-date-picker
                                            v-model="form1.finishDate"
                                            type="date"
                                            placeholder="选择日期">
                                        </el-date-picker>
                                    </el-form-item>
                            <!-- </el-row> -->
                        </div>
                            
                        <!-- </el-card> -->
                        

                        

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
                jiehsouren: '',
                finishDate: ''
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

    .finish {
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

    .finish-box {
        margin: 100px auto;
        width: 320px;
        height: 160px;
        text-align: center;
    }

</style>