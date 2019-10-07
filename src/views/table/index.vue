<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="设备编号">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="备修工号" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="设备档案号" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="电机分类" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="回厂时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="要求完工日期" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="单位">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="型号">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="容量">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="当前状况">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
    </el-table>



    <div @click="handleOpen" class="add-btn">
      <el-button class="add-btn-size" type="primary" icon="el-icon-plus" circle></el-button>
    </div>

    <el-drawer
      title="新增回厂电机"
      :visible.sync="drawer"
      :direction="direction">
        <el-form class="add-form" ref="form" :model="form" label-position="top">
          <el-form-item prop="commissionID" label="设备委托单号">
            <el-input v-model="form.commissionID"></el-input>
          </el-form-item>
          <el-form-item prop="repairNumber" label="设备备修工号">
            <el-input v-model="form.repairNumber"></el-input>
          </el-form-item>
          <el-form-item prop="fileNumber" label="设备档案号">
            <el-input v-model="form.fileNumber"></el-input>
          </el-form-item>
          <el-form-item prop="sort" label="电机备修质量管理分类">
            <el-select v-model="form.sort" placeholder="请选择类别">
              <el-option label="A类" value="A类"></el-option>
              <el-option label="B类" value="B类"></el-option>
              <el-option label="C类" value="C类"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="form-btn">
            <el-button type="primary" @click="onSubmit">确认</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
    </el-drawer>
  </div>
</template>



<style lang="scss">
  .add-btn {
    position: fixed;
    right: 30px;
    bottom: 30px;

    &-size {
      width: 60px;
      height: 60px;
      font-size: 30px;
    }
  }

  .add-form {
    margin: 20px;
  }

  .form-btn {
    margin-top: 150px;
  }


</style>
<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      drawer: false,
      direction: 'rtl',
      
      form: {
        commissionID: '',
        repairNumber: '',
        fileNumber: '',
        sort: '',
      },
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    handleOpen() {
      this.drawer = true;
    },
    onSubmit() {
        this.drawer = false;
        this.$refs.form.resetFields();
    }
  }
}
</script>
