let login = require('../components/server/login')
let index = require('../components/server/index')
let hello = require('../components/Hello')

export default [ {
  path: '/server/login',
  name: 'login',
  meta: {
    isLoginAuthCheck: false
  },
  component: login
}, {
  path: '/server/index',
  name: 'index',
  meta: {
    isLoginAuthCheck: true
  },
  component: index
}, {
  path: '/',
  name: 'hello',
  meta: {
    isLoginAuthCheck: false
  },
  component: hello
}]
