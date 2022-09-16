<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>子应用 -- Vue@{{version}}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import Vue from 'vue'

// 全局变量测试
var name = 'vue2'
window.username = 'admin'
export default {
  name: 'page1',
  data () {
    return {
      version: Vue.version
    }
  },
  mounted () {
    console.log(name, window.username) // js沙箱，子应用能访问，基座不能
  },
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
