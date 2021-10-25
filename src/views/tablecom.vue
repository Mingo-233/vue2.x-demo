<template>
  <div class="box">
    <el-table :data="tableData"
              border
              row-key="name"
              @header-dragend="changeWidth"
              height="400px"
              style="width: 100%">
      <el-table-column prop="date"
                       label="日期"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       width="320">
      </el-table-column>
      <el-table-column prop="address"
                       label="地址"
                        width="320">
      </el-table-column>
      <el-table-column v-for="(item,i) in testDate"
      width="200px"
      ref="eltablec"
                       :key="Math.random()"
                       :prop="testDate[i].prop"
                       :label="testDate[i].name +num">
        <template slot-scope="{row}">
           <!-- <span>{{item.prop}} </span> -->
          <i>{{row}}</i>
          <!-- <span>{{Math.random()}}</span> -->
        </template>
      </el-table-column>

    </el-table>
    <p>{{num}}</p>
    <button @click="update">uptad</button>
  </div>
</template>

<script>
import Sortable from 'sortablejs'
export default {
  name: '',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎2',
        address: '上海市普陀区金沙江路 1517 弄',
        aa: 'aa2',
        bb: 'bb2',
        cc: 'cc3'
      }, {
        date: '2016-05-01',
        name: '王小虎3',
        address: '上海市普陀区金沙江路 1519 弄',
        aa: 'aa3',
        bb: 'bb3',
        cc: 'cc3'
      }, {
        date: '2016-05-03',
        name: '王小虎4',
        address: '上海市普陀区金沙江路 1516 弄',
        aa: 'aa4',
        bb: 'bb4',
        cc: 'cc4'
      }],
      testDate: [{
        date: '2sadasd',
        name: 'mock111',
        prop: 'aa'
      },
      {
        date: '2sadasd',
        name: 'mock1222',
        prop: 'bb'

      },
      {
        date: '2sadasd',
        name: 'mock333',
        prop: 'cc'
      },
      {
        date: '2sadasd',
        name: 'mock333',
        prop: 'cc'
      },
      {
        date: '2sadasd',
        name: 'mock333',
        prop: 'cc'
      },
      {
        date: '2sadasd',
        name: 'mock333',
        prop: 'cc'
      },
      {
        date: '2sadasd',
        name: 'mock333',
        prop: 'cc'
      },
      {
        date: '2sadasd',
        name: 'mock333',
        prop: 'cc'
      }],
      num: 0
    }
  },
  methods: {
    changeWidth (newWidth, oldWidth, column, event) {
      console.log(column)
    },
    update () {
      // this.$forceUpdate()
      this.num++
      console.log(this.$refs.eltablec)
      // this.testDate.push({ date: '22', name: 'xiba', prop: 'cc' })
    }
  },
  mounted () {
    const el = document.querySelector('.el-table__header-wrapper tr')
    const a = new Sortable(el, {
      delay: 0,
      animation: 180,
      onEnd: evt => {
        console.log(evt)
        // const oldItem = this.tableData[evt.oldIndex]
        const newi = evt.newIndex - 3
        const oldi = evt.oldIndex - 3
        console.log(newi)
        console.log(oldi)
        // const newItem = this.testDate[newi]
        const oldItem = this.testDate[oldi]
        // console.log(newItem)
        this.testDate.splice(oldi, 1)
        this.testDate.splice(newi, 0, oldItem)
        console.log(this.testDate)
      }
    })
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
