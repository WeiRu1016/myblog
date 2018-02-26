// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index'
import directive from './directive/directive'
import filters from './filter'
import globalData from './global'
import prompt from './plugins/prompt/prompt'
import confirm from './plugins/confirm/confirm'
// import 'iview/dist/styles/iview.css'    // 使用 CSS

// Vue.config.productionTip = false
// Vue.use('iview')
(function initRem () {
  let _document = document.documentElement
  let winWidth = window.innerWidth
  _document.style.fontSize = winWidth / 40 + 'px'
})()
Object.keys(directive).forEach((key) => {
  Vue.directive(key, directive[key])
})
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
Vue.prototype.GLOBAL = globalData
Vue.use(prompt)
Vue.use(confirm)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

