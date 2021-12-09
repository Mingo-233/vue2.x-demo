<template>
    <div class="style-box">
        <!-- <h1></h1> -->
        <ul class="ul-box">
            <li v-for="(li, index) in liList" :key="index" @click="routeToClick(li.path)">
                <span>{{ li.name }}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      liList: [
        { name: 'demo', path: '/demo' },
        { name: 'Treecom', path: '/Treecom' },
        { name: 'tablecom', path: '/tablecom' },
        { name: 'about', path: '/about' },
        { name: 'A', path: '/A' }
      ]
    }
  },
  methods: {
    routeToClick (path) {
      this.$router.push({ path })
    }
  }
}
</script>
<style lang="less" scoped>
.style-box {
    margin-top: 80px;
    h1 {
        text-align: center;
    }
}
.ul-box {
    display: flex;
    flex-wrap: wrap;
    // margin-top: 30px;
    padding: 0 100px;

    & > li {
        width: 200px;
        height: 80px;
        text-align: center;
        margin-left: 20px;
        margin-top: 30px;
        // background-color: - linear-gradient(to bottom, #f66, #66f);
background-image: linear-gradient(to bottom, #f66, #66f);
        line-height: 80px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
    }
}
</style>
