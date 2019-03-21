<template>
  <div id="app">
    <!--<HelloWorld msg="hello vuex"/>-->
    <el-container>
      <el-header>HEADER</el-header>
      <el-container>
        <el-aside width="200px">adide</el-aside>
        <el-main>
          main
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  }
}
</script>

<style  scoped>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
