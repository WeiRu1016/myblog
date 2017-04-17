import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import routes from './route'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
