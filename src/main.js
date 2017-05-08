// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index'
import directive from './directive/directive'
import globalData from './global'
import prompt from './plugins/prompt/prompt'
import confirm from './plugins/confirm/confirm'
// import 'iview/dist/styles/iview.css'    // 使用 CSS

// Vue.config.productionTip = false
// Vue.use('iview')
Object.keys(directive).forEach(function (key) {
  Vue.directive(key, directive[key])
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

