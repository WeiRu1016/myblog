<template>
  <div class="article">
    <article v-if="article">
      <h1 class="title">{{article.title}}</h1>
      <p class="date-time">
        <span class="created">创建于：{{article.create_time | formatTime}}</span>
        <span class="updated" v-if="modeified">上次修改：{{article.update_time | formatTime}}</span>
      </p>
      <markdown :content="content"></markdown>
    </article>
    <p v-else>{{errorMsg}}</p>
  </div>
</template>
<script>
  import markdown from '../markdown'
  import { md2html } from '../../../assets/js/untils.js'
  export default {
    name: 'article',
    components: {
      markdown
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
  }
</style>
