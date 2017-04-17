var login = require('../components/server/login.vue')
var index = require('../components/Hello')

export default [{
  path: '/',
  name: 'index',
  component: index
}, {
  path: '/server/login',
  name: 'login',
  component: login
}, {
  path: '/server/index'
}]
