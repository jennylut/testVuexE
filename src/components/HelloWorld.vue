<template>
  <!--<div class="hello">-->
    <!--<h1>{{ msg }}</h1>-->
    <!---->
  <!--</div>-->
  <el-container>
    <el-header>HEADER</el-header>
    <el-container>
      <el-aside width="200px">aside</el-aside>
      <el-main>
        <ClassList></ClassList>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ClassList from './classManagement/list'

export default {
  name: 'HelloWorld',
  components:{ ClassList },
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
