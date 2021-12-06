<template>
  <div>
    <p>This is an about page</p>
    <header-label :content="msg">
      <template v-slot:toolTip>oknk</template>
    </header-label>
    <MyInput v-model="input" :disabled="false" :errorTip="errorTip" @blur="handleBlur"></MyInput>
    <el-button @click="openDialog">confirm dialog</el-button>
  </div>
</template>

<script>
// import headerLabel from '../components/headerLabelComponent.vue'
import MyInput from '../components/my-input.vue'
export default {
  name: '',
  data () {
    return {
      msg: '个人信息',
      errorTip: '1111',
      input: ''
    }
  },
  methods: {
    hanlde () {
      console.log('hanlde')
    },
    handleBlur () {
      console.log('blur')
    },
    openDialog () {
      this.$confirmm({
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(res => {
        console.log(res)
        console.log(22)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
  },
  activated () {
    console.log('acc')
    this.hanlde()
  },
  components: {
    // headerLabel
    headerLabel: {
      functional: true,
      props: {
        render: Function,
        msg: {
          type: String,
          default: ''
        }
      },
      render: function (h, context) {
        // 完全透传任何 attribute、事件监听器、子节点等。
        const vnodes = []
        vnodes.push(<div>wdnm</div>)
        console.log(vnodes)
        return vnodes
      }
    },
    MyInput
  }
}
</script>

<style scoped>
</style>
