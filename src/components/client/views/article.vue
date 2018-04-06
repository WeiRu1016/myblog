<template>
  <div class="article">
    <article v-if="article">
      <h1 class="title">{{article.title}}</h1>
      <p class="date-time">
        <span class="created">创建于：{{article.create_time | formatTime}}</span>
        <span class="updated" v-if="modeified">上次修改：{{article.update_time | formatTime}}</span>
      </p>
      <section class="article-content" v-html="content"></section>
    </article>
    <p v-else>{{errorMsg}}</p>
  </div>
</template>
<script>
  import myHeader from '../myHeader'
  import { md2html } from '../../../assets/js/untils.js'
  export default {
    name: 'article',
    components: {
      'my-header': myHeader
    },
    data () {
      return {
        article: null,
        errorMsg: ''
      }
    },
    computed: {
      modeified () {
        return new Date(this.article.create_time) - new Date(this.article.update_time)
      },
      content () {
        return this.article && md2html(this.article.text)
      }
    },
    beforeRouteEnter: (to, from, next) => {
      // ...
      (async function () {
        let id = to.params.id
        let response = await fetch(`/api/article/getOne/${id}`, {
          method: 'get',
          credentials: 'include'
        })
        let data = await response.json()
        next(vm => {
          debugger
          if (data.code === vm.GLOBAL.STATUS.SUCCESS) {
            vm.article = data.article
          } else {
            vm.errorMsg = data.msg
          }
        })
      })()
    }
  }

</script>
<style lang="scss">
    @import '../../../assets/css/article.css';

    .article {
      h1.title {
        text-align: left;
        margin: .8em 0;
        font-size: 2em
      }
      .date-time {
        text-align: left;
        font-size: 12px;
        color: #7f8c8d;
        margin: 1.2em 0;
      }
    .article-content {
      text-align: left;
      font-size: 16px;
      line-height: 1.6em;
      word-spacing: .5em;
      pre {
        background-color: #f8f8f8;
        padding: 1rem 0.5rem;
        line-height: 1.1em;
        border-radius: 2px;
        margin: 1rem 0;
        word-spacing: none;
        code {
          overflow-x: auto;
          display: block;
          padding: 0.2rem 1rem;
          line-height: 1.5rem;
          margin: 0;
          color: #525252;
          border-radius: 0;
          white-space: pre
        }
      }
    }
    .article-content11 {
      text-align: left;
      font-size: 16px;
      img {
        max-width: 100%
      }
      span.light {
        color: #7f8c8d
      }
      span.info {
        font-size: .85em;
        display: inline-block;
        vertical-align: middle;
        width: 280px;
        margin-left: 20px
      }
      h1 {
        margin-bottom: .8rem;
        font-size: 2rem
      }
      h2 {
        margin-bottom: .8rem;
        padding-bottom: 0;
        border-bottom: none;
        a {
          color: #2c3e50;
          &:hover {
            border-bottom: 2px solid #42b983
          }
        }
      }
      h3 {
        margin-bottom: .8rem;
        position: relative;
      }
      h4 {
        color: #7f8c8d;
        margin: 1.2em 0
      }
      /*.pos .post-list {
        padding: 1em 0 2em;
        border-bottom: 1px solid #ddd
      }
      .post h2 {
        margin: 2em 0 .8em;
        padding-bottom: .7em;
        border-bottom: 1px solid #ddd
      }*/
      /*figur o ul {
        margin: 1.2em 0
      }*/
      p {
        word-spacing: .05rem;
        font-size: 16px;
      }
      o ul {
        line-height: 1.6em
      }
      o ul {
        padding-left: 1.5em
      }
      a {
        color: #42b983;
        font-weight: 600
      }
      blockquote {
        padding: 20px;
        margin-bottom: 25px;
        background-color: whitesmoke;
        border-left: 6px solid #b4b4b4;
        word-break: break-word;
        font-size: 16px;
        font-weight: normal;
        line-height: 30px;
      }
      blockquote p {
        font-size: 16px;
        font-weight: normal;
        line-height: 1.7;
      }
      iframe {
        margin: 1em 0
      }
      p.tip {
        padding: 12px 24px 12px 30px;
        margin: 2em 0;
        border-left: 4px solid #f66;
        background-color: #f8f8f8;
        position: relative;
        border-bottom-right-radius: 2px;
        border-top-right-radius: 2px;
        &:before {
          position: absolute;
          top: 14px;
          left: -12px;
          background-color: #f66;
          color: #fff;
          content: "!";
          width: 20px;
          height: 20px;
          border-radius: 100%;
          text-align: center;
          line-height: 20px;
          font-weight: 700;
          font-family: Dosis, Source Sans Pro, Helvetica Neue, Arial, sans-serif;
          font-size: 14px
        }
        pre {
          position: relative;
          background-color: #f8f8f8;
          padding: .8rem .8rem .4rem;
          line-height: 1.1rem;
          border-radius: 2px;
          background: #f6f6f6;
          color: #657b83;
          code {
            overflow-x: auto;
            display: block;
            padding: 1.2rem 1.4rem;
            line-height: 1.5rem;
            margin: 0;
            color: #525252;
            border-radius: 0;
            white-space: pre
          }
        }
        pre code.lang-bash:afte pre code.lang-css:afte pre code.lang-html:afte pre code.lang-java:afte pre code.lang-js:after {
          position: absolute;
          top: 0;
          right: 0;
          color: #ccc;
          text-align: right;
          font-size: .75rem;
          padding: 5px 10px 0;
          line-height: 15px;
          height: 15px;
          font-weight: 600
        }
        pre code.lang-html:after {
          content: 'HTML'
        }
        pre code.lang-js:after {
          content: 'JS'
        }
        pre code.lang-bash:after {
          content: 'Shell'
        }
        pre code.lang-css:after {
          content: 'CSS'
        }
        pre code.lang-java:after {
          content: 'Java'
        }
        ol,
        p,
        ul {
          line-height: 1.6rem;
        }
        p {
          word-spacing: .05rem;
        }
      }
    }
  }
</style>
