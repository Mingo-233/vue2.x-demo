<template>
  <div>
    <el-input v-model="msg"  v-bind="$attrs" v-on="$listeners"></el-input>
    <div>{{errorTip}}</div>
  </div>
</template>

<script>
export default {
  // inheritAttrs: false,
  name: '',
  props: {
    value: {
      type: String,
      default: ''
    },
    errorTip: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // msg: ''
    }
  },
  methods: {

  },
  computed: {
    msg: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style scoped>
</style>
