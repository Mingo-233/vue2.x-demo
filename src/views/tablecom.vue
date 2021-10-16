<template>
  <div class="box">
    <el-table :data="tableData"
    border
              height="400px"
              style="width: 100%">
      <el-table-column prop="date"
                       label="日期"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="address"
                       label="地址">
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       width="580">
      </el-table-column>
      <el-table-column prop="name"
       fixed
                       label="姓名"
                       width="380">
      </el-table-column>

    </el-table>
<p>1231</p>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]

    }
  },
  methods: {

  },
  mounted () {
  }
}
</script>

<style scoped lang="less">
.box {
  // width: 500px;
  height: 700px;
  border: 1px solid black;
  overflow: scroll;
  .el-table {
    overflow: scroll;
  }
}
</style>
