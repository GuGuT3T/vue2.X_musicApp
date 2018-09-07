// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babal-polyfill'
import Vue from 'vue'
import App from './App'
import Router from './router'
import fastclick from 'fastclick' // 解决app点击事件延迟300毫秒
import '../src/common/stylus/index.styl'
Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  Router
})