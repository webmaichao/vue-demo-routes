/*
* @Author: maichao
* @Date: 2025/8/20 14:09:37
* @LastEditors: maichao
* @LastEditTime: 2025/8/20 16:39:03
* @FilePath: \vue\vue-demo-routes\.eslintrc.js
* @Description:  
*/
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
