<template>
  <div id="app">
    <span v-if="$route.fullPath !== '/'" @click="backHome" id="dragbtn" >首页{{cachedViews}}</span>
    <keep-alive :include="cachedViews" :max="15">
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      dev: null
    }
  },
  computed: {
    ...mapState(['cachedViews'])
  },
  created () {
  },
  async mounted () {
    console.log(this.cachedViews)
  },
  methods: {
    ...mapMutations(['SET_CACHED_VIEW']),

    backHome () {
      this.$router.push({
        path: '/'
      })
    }
  }

}
</script>

<style>
#dragbtn {
  position: absolute;
  border-radius: 5px;
  background-color: #409eff;
  font-size: 16px;
  color: #fff;
  z-index: 9999;
  top: 65px;
  right: 30px;
  cursor: pointer;
  width: 300px;
  height: 300px;
  text-align: center;
  line-height: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a::after {
  content: "|";
  padding: 5px;
}
#nav a:last-child::after {
  content: "";
  padding: 5px;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
