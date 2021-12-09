import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cachedViews: []
  },
  mutations: {
    // 删除缓存页面
    DEL_CACHED_VIEW: (state, payload) => {
      const index = state.cachedViews.indexOf(payload)
      console.log(index)
      index > -1 && state.cachedViews.splice(index, 1)
    },
    // 记录设置了缓存的页面path
    SET_CACHED_VIEW: (state, payload = []) => {
      state.cachedViews = payload
    },
    // 新增缓存页面
    ADD_CACHED_VIEW: (state, payload) => {
      if (!state.cachedViews.includes(payload)) {
        state.cachedViews.push(payload)
      }
    },
    // 记录跳转路径
    SET_JUMP_PATH: (state, payload) => {
      state.jumpFromPath = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
