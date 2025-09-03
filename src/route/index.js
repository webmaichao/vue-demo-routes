/*
* @Author: maichao
* @Date: 2025/8/20 16:47:42
* @LastEditors: maichao
* @LastEditTime: 2025/8/21 12:17:24
* @FilePath: \vue\vue-demo-routes\src\route\index.js
* @Description:  
*/
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/HomeView.vue")
  }
  ,
  {
    path: "/about",
    component: () => import("../views/AboutView.vue"),
    // 二级菜单
    children: [
      {
        path: "team",
        component: () => import("../views/TeamView.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router 