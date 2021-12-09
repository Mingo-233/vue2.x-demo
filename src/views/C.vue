<template>
  <div>
        <p>this is c</p>
    <el-button @click="back">go back </el-button>
  </div>
</template>

<script>
export default {
  name: 'C',
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
    },
    back () {
      this.$router.go(-1)
    }
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
