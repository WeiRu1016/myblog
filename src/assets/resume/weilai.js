export default {
  name: '魏来',
  personInfo: [
    {
      label: '性别',
      value: '男',
      icon: '\ue600'
    },
    {
      label: '电话',
      value: '18311440729',
      icon: '\ue601'
    },
    {
      label: '邮箱',
      value: '1622103660@qq.com',
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
      value: '后端工程师',
      icon: '\ue608'
    },
    {
      label: '工作经验',
      value: '3年'
    }
  ],
  timeList: [
    {
      name: '教育经历',
      icon: '\ue8c8',
      list: [
        {
          startTime: new Date(2012, 7, 1),
          endTime: new Date(2016, 4, 1),
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
          startTime: new Date(2016, 6, 4),
          endTime: '至今',
          block: '奇虎360',
          post: '服务端开发工程师',
          desc: '负责服务端开发，包括千万量级基础数据服务，数据聚合优化，爬虫服务，评论服务，代理下载，延迟消息中间件等。主要使用技术PHP，GO，Redis，Kafka，Solr，ES，Hadoop'
        }
      ]
    },
    {
      name: '项目经历',
      icon: '\ue61b',
      list: [
        {
          degree: '影视部门服务端',
          startTime: new Date(2016, 6),
          endTime: new Date(2017, 10),
          desc: [
            {
              label: '项目描述',
              value: '该项目为360影视web主站提供过亿量级数据服务访问，使用redis缓存提高服务响应数据和并发，机房之下增量全量数据同步模式进行数据更新，稳定高效。'
            },
            {
              label: '使用技术',
              value: 'PHP，Mysql, Redis，Kafka，SOA，Hadoop ，Html，Css，Js'
            },
            {
              label: '负责工作',
              value: ['基础数据收录流程优化，后台维护优化，短视频收录优化，基础数据服务，业务代码实现，数据修复，数据监控，死链检测等模块']
            }
          ]
        },
        {
          degree: '搜索项目优化',
          startTime: new Date(2018, 2),
          endTime: new Date(2018, 4),
          desc: [
            {
              label: '项目描述',
              value: '短视频搜索相关性低，实现从Solr迁移至Elasticsearch，提升搜索相关性，优化点击转化'
            },
            {
              label: '使用技术',
              value: 'Elasticsearch，Solr，Go'
            },
            {
              label: '负责工作',
              value: [
                '调研学习ES特性及语法，进行Solr数据到ES迁移，优化搜索结果，进行AB测试进行逐步替换，采用Golang开发基础api接口服务'
              ]
            }
          ]
        },
        {
          degree: '推推视频社交APP',
          startTime: new Date(2018, 4),
          endTime: new Date(2018, 11),
          desc: [
            {
              label: '项目描述',
              value: '推推是一款基于短视频聊天交友的社交app，主打熟人视频社交'
            },
            {
              label: '使用技术',
              value: 'Java PHP，SOA，Kafka ，融云IM'
            },
            {
              label: '负责工作',
              value: [
                'app业务端负责人，主要与产品、客户端进行需求沟通，梳理社交聊天流程，实现     短视频聊天，好友关系，红包活动，H5分享等功能，推进项目的不断更新迭代'
              ]
            }
          ]
        },
        {
          degree: '多线程代理下载器',
          startTime: new Date(2018, 11),
          endTime: new Date(2018, 12),
          desc: [
            {
              label: '项目描述',
              value:
                '该项目是基于Golang开发的多线程代理下载器，统一调度下载，通过统一解决方案'
            },
            {
              label: '使用技术',
              value: 'Go，Redis，Kafka ，Docker'
            },
            {
              label: '负责工作',
              value: [
                '开发与实现Golang多线程下载器，采用kafka做消息传递，Docker分布式部署'
              ]
            }
          ]
        },
        {
          degree: '延迟消息中间件',
          startTime: new Date(2018, 11),
          endTime: new Date(2018, 0),
          desc: [
            {
              label: '项目描述',
              value: '该项目是基于Golang开发的延迟消息中间件，通过时间轮盘方式，将延迟消息存储在内存中，延时发送消息至kafka消息队列'
            },
            {
              label: '使用技术',
              value: 'Go，Kafka ，Redis，Docker，测试工具：Jmeter，Gops'
            },
            {
              label: '负责工作',
              value: [
                '调研时间轮盘实现方式，设计实现时间轮盘，延迟消息持久化，异常处理恢复等功能模块。进行功能测试，系统压测，检测系统健壮性，Docker分布式部署'
              ]
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
