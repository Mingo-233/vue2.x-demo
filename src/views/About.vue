<template>
  <div>
    <p>This is an about page</p>
    <header-label :content="msg">
      <template v-slot:toolTip>oknk</template>
    </header-label>
  </div>
</template>

<script>
// import headerLabel from '../components/headerLabelComponent.vue'

export default {
  name: '',
  data () {
    return {
      msg: '个人信息'
    }
  },
  methods: {
    hanlde () {
      console.log(1)
    }
  },
  mounted () {
    this.hanlde()
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
        // return h(appropriateListComponent(),
        //   context.data,
        //   context.children)
      }
    }
  }
}
</script>

<style scoped>
</style>
