// let login = require('../components/server/views/login')
// let index = require('../components/server/views/index')
// let hello = require('../components/Hello')
// let clientIndex = require('../components/client/views/index')
// let clientArticle = require('../components/client/views/article')
/**
 * 后台管理登录页面
 */
let login = (resolve) => {
  require.ensure(['../components/server/views/login'], () => {
    resolve(require('../components/server/views/login'))
  })
}
/**
 * 后台管理首页
 */
let index = (resolve) => {
  require.ensure(['../components/server/views/index'], () => {
    resolve(require('../components/server/views/index'))
  })
}
let hello = (resolve) => {
  require.ensure(['../components/Hello'], () => {
    resolve(require('../components/Hello'))
  })
}
/**
 * 博客客户端首页
 */
let client = (resolve) => {
  require.ensure(['../components/client/views/client'], () => {
    resolve(require('../components/client/views/client'))
  })
}
/**
 * 博客客户端文章列表页
 */
let clientIndex = (resolve) => {
  require.ensure(['../components/client/views/index'], () => {
    resolve(require('../components/client/views/index'))
  })
}
/**
 * 博客客户端单个文章页
 */
let clientArticle = (resolve) => {
  require.ensure(['../components/client/views/article'], () => {
    resolve(require('../components/client/views/article'))
  })
}
/**
 * 博客客户端leetcode页面
 */
let leetcode = (resolve) => {
  require.ensure(['../components/client/views/leetcode'], () => {
    resolve(require('../components/client/views/leetcode'))
  })
}
/**
 * 博客客户端about页面
 */
let about = (resolve) => {
  require.ensure(['../components/client/views/about'], () => {
    resolve(require('../components/client/views/about'))
  })
}

/**
 * 因为博客客户端有固定的导航栏所有利用了子路由
 */
export default [{
  path: '/client', // 整个博客客户端路由
  name: 'clientIndex',
  meta: {
    isLoginAuthCheck: false
  },
  component: client,
  children: [ // 博客客户端分路由
    {
      path: 'index',
      component: clientIndex
    },
    {
      path: 'leetcode',
      component: leetcode
    },
    // {
    //   path: 'about',
    //   component: about
    // },
    {
      path: 'article/:id',
      component: clientArticle
    }
  ]
}, {
  path: '/client/about',
  component: about
}, {
  path: '/server/login', // 后台管理登录页面
  name: 'login',
  meta: {
    isLoginAuthCheck: false
  },
  component: login
}, {
  path: '/server/index', // 后台管理首页
  name: 'index',
  meta: {
    isLoginAuthCheck: true
  },
  component: index
}, {
  path: '/',
  name: 'hello', // 404页面
  meta: {
    isLoginAuthCheck: false
  },
  component: hello
}]
