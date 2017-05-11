let login = require('../components/server/views/login')
let index = require('../components/server/views/index')
let hello = require('../components/Hello')
let clientIndex = require('../components/client/views/index')

export default [ {
  path: '/index',
  name: 'clientIndex',
  meta: {
    isLoginAuthCheck: false
  },
  component: clientIndex
}, {
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
