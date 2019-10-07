<template>
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
</template>

<style lang="scss">
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
</style>


<script>
export default {
    name: 'Formhead'
}
</script>