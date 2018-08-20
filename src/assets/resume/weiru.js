export default {
  name: '卫茹',
  personInfo: [
    {
      label: '性别',
      value: '女',
      icon: '\ue600'
    },
    {
      label: '电话',
      value: '18311440307',
      icon: '\ue601'
    },
    {
      label: '邮箱',
      value: '1216391540@qq.com',
      icon: '\ue608'
    },
    {
      label: '年龄',
      value: '25',
      icon: '\ue682'
    }
  ],
  jobInfo: [
    {
      label: '求职目标',
      value: '前端工程师',
      icon: '\ue608'
    },
    {
      label: '工作经验',
      value: '2年'
    }
  ],
  timeList: [
    {
      name: '教育经历',
      icon: '\ue8c8',
      list: [
        {
          startTime: new Date(2012, 8, 1),
          endTime: new Date(2016, 5, 1),
          block: '大连理工大学',
          degree: '本科',
          post: '软件工程专业'
        }
      ]
    },
    {
      name: '工作经历',
      icon: '\ue620',
      list: [
        {
          startTime: new Date(2017, 4, 23),
          endTime: '至今',
          block: '转转精神科技有限责任公司',
          post: '前端工程师',
          desc: '主要负责58app的二手前端改版维护迭代，转转的商业系统的前端开发维护，采用React，Vue，Webpack等技术栈'
        },
        {
          startTime: new Date(2016, 6, 1),
          endTime: new Date(2017, 4, 19),
          block: '折800（团博百众有限责任公司）',
          post: '前端工程师',
          desc: '负责折800移动端网页开发，采用JavaScript，Zepto.js，Sea.js，以及部分的Vue改版迁移'
        }
      ]
    },
    {
      name: '项目经历',
      icon: '\ue61b',
      list: [
        {
          degree: '转转商业业务端',
          startTime: new Date(2017, 11),
          endTime: '至今',
          desc: [
            {
              label: '项目描述',
              value: '面向一些小型商家在58三端以及转转app中广告投放推广商品的后台管理系统'
            },
            {
              label: '使用技术',
              value: 'antd组件库，React，React-router，Redux，Webpack，ES6'
            },
            {
              label: '负责工作',
              value: ['基于antd组件库，构建商家投放列表以及商家创建投放', '整体项目后期的维护和迭代']
            }
          ]
        },
        {
          degree: '转转商业系统0.1',
          startTime: new Date(2017, 8),
          endTime: new Date(2017, 11),
          desc: [
            {
              label: '项目描述',
              value: '商业项目的一个MVP项目，主要是对于商业方向的试错，为后来的整体商业项目做个市场调查'
            },
            {
              label: '使用技术',
              value: 'antd组件库，React，React-router，Redux，Webpack，ES6'
            },
            {
              label: '负责工作',
              value: [
                '主要负责投放后台，供商户通过58登录后，按类别分城市进行购买推广时间段，以及展示商户的订单列表',
                ' react生态的初体验，理解组件化的思想'
              ]
            }
          ]
        },
        {
          degree: '58app二手商家详情页native转h5',
          startTime: new Date(2017, 7),
          endTime: new Date(2017, 8),
          desc: [
            {
              label: '项目描述',
              value: '因为转转独立，方便二手业务的迭代，将商家详情页native版本替换成h5，方便日后迭代和维护'
            },
            {
              label: '使用技术',
              value: 'Java velocity模版，es6，webpack'
            },
            {
              label: '负责工作',
              value: [
                '根据现有的商家详情页功能，复刻出一套h5的商家详情页',
                '纯手工搭建webpack打包，对前端工程化有深刻的理解'
              ]
            }
          ]
        },
        {
          degree: '58app二手大类页改版',
          startTime: new Date(2017, 5),
          endTime: new Date(2017, 7),
          desc: [
            {
              label: '项目描述',
              value:
                '因为58二手存在很严重的代码历史包袱，代码的维护和需求的迭代都有很高的人力成本，所以要对老旧代码进行组件化改版，降低维护成本，适应敏捷开发，快速迭代'
            },
            {
              label: '使用技术',
              value: 'Vue，Vue-router，Webpack，ES6'
            },
            {
              label: '负责工作',
              value: [
                '将现有的Java velocity模版的二手大类页，拆解分析成各个子模块',
                '通过Vue组件化，构建出新的大类页',
                '利用vue实现一个通用的swipe的组件',
                '利用webpack插件实现无损雪碧图（webpack-spritesmith），并深入分析实现了一个雪碧图制作工具'
              ]
            }
          ]
        },
        {
          degree: 'vue项目学习和实践',
          startTime: new Date(2017, 3),
          endTime: new Date(2017, 4),
          desc: [
            {
              label: '项目描述',
              value: '原项目向vue迁移，实现我的优惠券功能的开发和迁移'
            },
            {
              label: '使用技术',
              value: 'Vue，Vuex，Vue-router，Webpack，ES6'
            },
            {
              label: '负责工作',
              value: [
                '通过vue框架实现我的优惠券，查看无效优惠券，优惠券跳转，兑换优惠券等功能',
                '学习webpack打包，实现前端工程化'
              ]
            }
          ]
        },
        {
          degree: '折800移动端立即购买下单页',
          startTime: new Date(2017, 5),
          endTime: new Date(2016, 11),
          desc: [
            {
              label: '项目描述',
              value: '微商城、折800app、手机wap三端立即购买下单页改版、迭代、维护'
            },
            {
              label: '使用技术',
              value: 'JavaScript，Zepto.js，Sea.js'
            },
            {
              label: '负责工作',
              value: '立即购买下单页的开发和维护，实现页面的渲染，活动和优惠的计算等逻辑处理'
            }
          ]
        },
        {
          degree: '折800移动端登录页',
          startTime: new Date(2017, 7),
          endTime: new Date(2016, 11),
          desc: [
            {
              label: '项目描述',
              value: '微商城、折800app、手机wap三端登录页改版、迭代、维护'
            },
            {
              label: '使用技术',
              value: 'JavaScript，Zepto.js，Sea.js'
            },
            {
              label: '负责工作',
              value:
                '登录注册改版，利用native中webView内嵌h5页面，客户端和h5之间通过商定的协议进行数据和状态的传输，实现用户登录，注册，滑块验证码的接入'
            }
          ]
        }
      ]
    }
  ],
  skill: [
    {
      percent: 99,
      name: 'HTML/HTML5'
    },
    {
      percent: 90,
      name: 'CSS/CSS3'
    },
    {
      percent: 90,
      name: 'JavaScript'
    },
    {
      percent: 80,
      name: 'ES6'
    },
    {
      percent: 80,
      name: 'Vue'
    },
    {
      percent: 70,
      name: 'React'
    },
    {
      percent: 50,
      name: 'Koa/NodeJS'
    }
  ],
  hobby: [
    {
      icon: '\ue6bb',
      name: '影视'
    },
    {
      icon: '\ue685',
      name: '音乐'
    },
    {
      icon: '\ue605',
      name: '购物'
    },
    {
      icon: '\ue936',
      name: '运动'
    }
  ],
  language: ['英语六级', '日语二级'],
  assessment: [
    '熟悉使用各种前端框架，技术基础扎实，前端开发经验近2年，对node也有一点了解',
    '有较强的学习能力，能够短时间内学会并完成任务，有很大的抗压能力。',
    '有良好的沟通、合作能力，在项目合作中，能够很好地与同事沟通和相处，提升工作效率，创建共赢。'
  ]
}
