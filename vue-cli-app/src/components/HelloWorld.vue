<template>
  <div class="hello">
    <h1 v-show="visible">{{ msg }}</h1>
    <el-button @click="visible = visible ? false:true">默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      visible: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $text-color: #42b983;
  h1, h2 {
    font-weight: normal;
    color: $text-color;
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
    color: $text-color;
  }
</style>

