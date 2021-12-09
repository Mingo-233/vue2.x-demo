<template>
  <div>
    <p>this is b</p>
    <input type="text">
    <el-button @click="jump">去C页面 </el-button>
    <el-button @click="back">go back </el-button>
    <el-button @click="del">手动删除cache </el-button>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'B',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    ...mapMutations(['ADD_CACHED_VIEW', 'DEL_CACHED_VIEW']),

    jump () {
      this.$router.push({
        path: '/C'
      })
    },
    back () {
      this.$router.go(-1)
    },
    del () {
      this.DEL_CACHED_VIEW('B')
    }
  },
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //     if (from.path.slice(1) === 'B') {
  //       vm.ADD_CACHED_VIEW('C')
  //     }
  //   })
  // },
  beforeRouteLeave (to, from, next) {
    if (to.path.slice(1) === 'C') {
      this.ADD_CACHED_VIEW('B')
    }
    console.log('zoule')
    // else {
    //   this.DEL_CACHED_VIEW('B')
    // }
    next()
  },
  mounted () {
    console.log('mounted')
  },
  activated () {
    console.log('activated')
  }
}
</script>

<style scoped>
</style>
