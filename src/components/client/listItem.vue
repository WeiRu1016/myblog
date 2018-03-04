<template v-if="item">
  <div class="article-list-item" @click="$router.push(`/client/article/${item._id}`)">
    <header>
      <router-link class="title" :to="`/client/article/${item._id}`">{{item.title}}</router-link>
      <section class="date">{{item.create_time | formatTime}}</section>
    </header>
    <article class="article">{{ item.text | excerpt }}</article>
    <footer>
      <router-link class="more" :to="`/client/article/${item._id}`">...阅读全文</router-link>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'listItem',
    props: {
      item: {
        type: Object,
        default: null
      }
    }
  }
</script>
<style lang="scss">
  @import '../../assets/css/var.scss';

  .article-list-item {
    text-align: left;
    margin: 10px 0;
    .title {
      font-size: 24px;
      line-height: 1.2em;
      margin: 10px 0;
      color: #2c3e50;
      font-weight: 600;
    }
    .date {
      color: #7f8c8d;
      font-size: 14px;
      margin: 10px 0;
    }
    .article {
      font-size: 16px;
      line-height: 1.6em;
      word-spacing: .5em;
      margin: 1rem 0;
      text-indent: 2em;
      @include text2line;
    }
    // .article,a {
    //   font-size: 14px;
    //   line-height: 1.2;
    //   word-spacing: 5px;
    //   margin: 5px 0;
    // }
    a{
      color: #ec7259;
    }
  }
</style>
