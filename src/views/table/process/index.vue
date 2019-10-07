<template>
    <div class="process-container">
        <div class="process-title">电机修复工序流程详细信息</div>
        <div class="process-info">
            <el-card shadow="never">
                <el-row :gutter="10">
                    <el-col :span="6">
                        设备委托单号：
                    </el-col>
                    <el-col :span="6">
                        备修工号：
                    </el-col>
                    <el-col :span="6">
                        设备档案号：
                    </el-col>
                    <el-col :span="6">
                        电机备修质量管理分类：
                    </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="8">
                        用户单位：
                    </el-col>
                    <el-col :span="8">
                        现场安装位置码：
                    </el-col>
                    <el-col :span="8">
                        要求完工日期：
                    </el-col>
                </el-row>
            </el-card>
        </div>

        <el-container>
            <el-header style="padding-left: 3%">
                <!-- 步骤条active显示几，就表示完成到了哪一步 -->
                    <el-steps :active="active" finish-status="success">
                        <el-step style="flex-basis: 16%;" title="回厂登记"></el-step>
                        <el-step style="flex-basis: 18%;" title="分解"></el-step>
                        <el-step style="flex-basis: 20%;" title="电气、机械检查和处理"></el-step>
                        <el-step style="flex-basis: 12%;" title="组装"></el-step>
                        <el-step style="flex-basis: 13%;" title="试验"></el-step>
                        <el-step style="flex-basis: 13%;" title="存档"></el-step>
                        <el-step title="出产确认"></el-step>
                    </el-steps>
            </el-header>
            <el-main>
                <el-row :gutter="10">
                    <el-col :span="3">
                        <el-card @click.native="change(1)" :class="active>=0 ? 'info-card' : 'info-card info-card-disable'" shadow="hover">
                            <div slot="header">
                                <span>回厂登记</span>
                            </div>
                            <div class="text">
                                确认次数：
                            </div>
                            <div class="text">
                                确认人：
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="3">
                        <el-card @click.native="change(2)" :class="active>=1 ? 'info-card' : 'info-card info-card-disable'" shadow="hover">
                            <div slot="header">
                                <span>分解</span>
                            </div>
                            <div class="text">
                                确认次数：
                            </div>
                            <div class="text">
                                确认人：
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="3">
                        <el-card @click.native="change(3)" :class="active>=2 ? 'info-card' : 'info-card info-card-disable'" shadow="hover">
                            <div slot="header">
                                <span>电气检查和处理</span>
                            </div>
                            <div class="text">
                                确认次数：
                            </div>
                            <div class="text">
                                确认人：
                            </div>
                        </el-card>
                        
                    </el-col>
                    <el-col :span="3">
                        <el-card @click.native="change(3)" :class="active>=2 ? 'info-card' : 'info-card info-card-disable'" shadow="hover">
                            <div slot="header">
                                <span>机械检查和处理</span>
                            </div>
                            <div class="text">
                                确认次数：
                            </div>
                            <div class="text">
                                确认人：
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="3">
                        <el-card @click.native="change(4)" :class="active>=3 ? 'info-card' : 'info-card info-card-disable'" shadow="hover">
                            <div slot="header">
                                <span>组装</span>
                            </div>
                            <div class="text">
                                确认次数：
                            </div>
                            <div class="text">
                                确认人：
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="3">
                        <el-card @click.native="change(5)" :class="active>=4 ? 'info-card' : 'info-card info-card-disable'" shadow="hover">
                            <div slot="header">
                                <span>试验</span>
                            </div>
                            <div class="text">
                                确认次数：
                            </div>
                            <div class="text">
                                确认人：
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="3">
                        <el-card @click.native="change(6)" :class="active>=5 ? 'info-card' : 'info-card info-card-disable'" shadow="hover">
                            <div slot="header">
                                <span>存档</span>
                            </div>
                            <div class="text">
                                确认次数：
                            </div>
                            <div class="text">
                                确认人：
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="3">
                        <el-card @click.native="change(7)" :class="active>=6 ? 'info-card' : 'info-card info-card-disable'" shadow="hover">
                            <div slot="header">
                                <span>出产确认</span>
                            </div>
                            <div class="text">
                                确认次数：
                            </div>
                            <div class="text">
                                确认人：
                            </div>
                        </el-card>
                    </el-col>
                    
                </el-row>
                
            </el-main>
        </el-container>
    </div>
</template>



<style lang="scss" scoped>
    .process {
        &-container {
            margin: 30px;
        }

        &-title {
            font-size: 30px;
            margin: 20px;
            margin-bottom: 30px;
            line-height: 46px;
        }
    }

    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }

    .el-container {
        margin-top: 80px;
    }

    .info-card {
        margin-bottom: 20px;
        margin-top: 20px;
        &-disable {
            color: lightgray;
        }
    }

    .text {
        font-size: 14px;
        line-height: 30px;
    }

    .next {
        font-size: 30px;
        line-height: 30px;
    }
</style>

<script>
  export default {
    data() {
        // active是当前进度
      return {
        active: 1,
      };
    },

    methods: {
      test() {
        alert("1");
      },
      change(step) {
            if(step > this.active + 1)
                this.$message({
                    showClose: true,
                    message: '请先完成前面的流程',
                    type: 'warning'
                });
      }
    }
  }
</script>