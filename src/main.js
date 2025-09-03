/*
* @Author: maichao
* @Date: 2025/8/20 16:36:05
* @LastEditors: maichao
* @LastEditTime: 2025/8/20 16:43:26
* @FilePath: \vue\vue-demo-routes\src\main.js
* @Description:  
*/
import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index'

createApp(App).use(router).mount('#app')  
