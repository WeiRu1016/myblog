<template>
  <div class="article-list-item" v-if="item">
    <header>
      <router-link class="title" :to="`/client/article/${item._id}`">{{item.title}}</router-link>
      <section class="date">{{item.create_time | formatTime}}</section>
    </header>
    <article v-html="item.content | excerpt" class="article"></article>
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
  .article-list-item {
    text-align: left;
    margin: 10px 0;
    .title {
      font-size: 20px;
      line-height: 1.2;
      margin: 10px 0;
      color: #2c3e50;
      font-weight: 600;
    }
    .date {
      color: #7f8c8d;
      font-size: 12px;
      margin: 10px 0;
    }
    .article,a {
      font-size: 14px;
      line-height: 1.2;
      word-spacing: 5px;
      margin: 5px 0;
    }
    a{
      color: #ec7259;
    }
  }
</style>
