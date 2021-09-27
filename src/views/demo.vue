<template>
  <div>
    <div class="box">
      <div class="vbody"
           v-for='item in list'
           :key='item'>内容区域{{item}}</div>
      <div class="reference"
           ref='reference'></div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    intersectionObserver () {
      let n = 10
      const reference = this.$refs.reference
      // 回调函数
      const callback = (entries) => {
        console.log(entries)
        const myEntry = entries[0]
        if (myEntry.isIntersecting) {
          console.log(`🚀🚀~ 触发了无线滚动,开始模拟请求数据 ${n}`)
          n++
          this.list.push(n)
        }
      }
      // 配置对象
      const options = {
        root: null,
        rootMargin: '0px 100px 0px 0px',
        threshold: [0, 1],
        trackVisibility: true,
        delay: 100
      }
      // 观察器实例
      const myObserver = new IntersectionObserver(callback, options)
      // 开始观察
      myObserver.observe(reference)
    }
  },
  mounted () {
    this.intersectionObserver()
  }
}
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.reference {
  width: 100%;
  visibility: hidden;
}
.vbody {
  width: 100%;
  height: 200px;
  // background-color: red;
  border: 2px solid darkblue;
  color: black;
  font-size: 40px;
  text-align: center;
  line-height: 200px;
  margin: 10px 0;
}
</style>
