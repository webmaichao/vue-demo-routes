<!--
* @Author: maichao
* @Date: 2025/8/20 15:04:07
* @LastEditors: maichao
* @LastEditTime: 2025/8/21 12:17:40
* @FilePath: \vue\vue-demo-routes\src\views\AboutView.vue
* @Description:  
-->
<template>
<router-view></router-view>
<router-link to="/about/team">Team</router-link>

</template>

<script>  
// 传递参数到组件
export default {
  name: 'AboutView',
  props: {
    msg: String
  }
} 
</script>