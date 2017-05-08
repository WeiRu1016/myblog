import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import routes from './route'

Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.isLoginAuthCheck) {
    let response = await fetch('/api/login/islogin', {
      credentials: 'include'
    })
    let data = await response.json()
    if (data.data.login) {
      next()
    } else {
      next({
        path: '/server/login'
      })
    }
  } else {
    next()
  }
})

export default router
