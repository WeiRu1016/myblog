let login = require('../components/server/login')
let index = require('../components/server/index')
let hello = require('../components/Hello')

export default [ {
  path: '/server/login',
  name: 'login',
  component: login
}, {
  path: '/server/index',
  name: 'index',
  component: index
}, {
  path: '/',
  name: 'hello',
  component: hello
}]
