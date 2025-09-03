<!--
* @Author: maichao
* @Date: 2025/8/20 15:08:06
* @LastEditors: maichao
* @LastEditTime: 2025/8/21 12:08:31
* @FilePath: \vue\vue-demo-routes\src\App.vue
* @Description:  
-->
<template>
  <router-view></router-view>
  <router-link to="/">Home</router-link>
  <br>
 <router-link to="/about">about</router-link>

</template>

<script>


export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
