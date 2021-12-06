<template>
  <div v-show="show">
    <h1>dialog</h1>
    <div @click="ok">ok</div>
    <div @click="cancel">cancel</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    ok () {
      this.show = false
      this.resolve('ab')
    },
    cancel () {
      this.show = false
      this.reject('xx')
    }
  }
}
</script>
