<template>
  <div>
    <p>this is a</p>
    <el-button @click="jump">去B页面 </el-button>
  </div>
</template>

<script>
export default {
  name: 'AS',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    jump () {
      this.$router.push({
        path: '/B'
      })
    }
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
