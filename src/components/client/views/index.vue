<template>
  <div class="post-list">
    <list-item v-for="article in articleList" :item="article" :key="article._id"></list-item>
  </div>
</template>
<script>
  import listItem from '../listItem'
  import { mapGetters } from 'vuex'
  export default {
    name: 'index',
    computed: {
      ...mapGetters({
        articleList: 'getclientPublishedArticleList'
      })
    },
    created () {
      this.$store.dispatch('getAllArticle')
    },
    components: {
      listItem
    }
  }
</script>
