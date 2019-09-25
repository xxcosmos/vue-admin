<template>
  <div class="dashboard-container">
    <div class="dashboard-text">代办事项</div>
    <el-table :data="tableData" height="250" border style="width: 30%">
      <el-table-column prop="number" label="编号" width="50"></el-table-column>
      <el-table-column prop="todo" label="代办事项"></el-table-column>
    </el-table>
    <div class="dashboard-text">在厂机电信息</div>
    <el-table :data="tableData" height="250" border style="width: 30%">
      <el-table-column prop="number" label="编号" width="50"></el-table-column>
      <el-table-column prop="todo" label="在厂机电信息"></el-table-column>
    </el-table>
    <div class="dashboard-text">昨日试验合格电机</div>
    <el-table :data="tableData" height="250" border style="width: 30%">
      <el-table-column prop="number" label="编号" width="50"></el-table-column>
      <el-table-column prop="todo" label="昨日试验合格电机"></el-table-column>
    </el-table>
    <div class="dashboard-text">当日巡检问题</div>
    <el-table :data="tableData" height="250" border style="width: 30%">
      <el-table-column prop="number" label="编号" width="50"></el-table-column>
      <el-table-column prop="todo" label="当日巡检问题"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "主页",
  /**
   * 这是数据区
   */
  data() {
    return {
      tableData: [
        {
          number: 1,
          todo: "这是一条代办事项"
        },
        {
          number: 1,
          todo: "这是一条代办事项"
        },
        {
          number: 1,
          todo: "这是一条代办事项"
        },
        {
          number: 1,
          todo: "这是一条代办事项"
        },
        {
          number: 1,
          todo: "这是一条代办事项"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["name"])
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
