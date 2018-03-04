<template>
  <div id="article-left">
    <div class="icon add" @click="addArticle">新建文章</div>
    <ul class="article-list" v-if="articleList.length">
      <li v-for="(item, index) in articleList" :key="index" :item="item" :id="item._id" is="article-item" :selected=" currentArticle && currentArticle._id === item._id"></li>
    </ul>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import articleItem from './articleItem'
  export default {
    name: 'leftBar',
    props: {
    },
    data () {
      return {
        selected: ''
      }
    },
    components: {
      articleItem
    },
    computed: {
      ...mapGetters({
        articleList: 'getArticleList',
        currentCatagory: 'getCurrentCatagory',
        currentArticle: 'getCurrentArticle'
      })
    },
    methods: {
      async addArticle () {
        let options = {
          text: '',
          title: this.GLOBAL.DEFAULT_ARTICLE,
          catalog: '',
          catagory: this.currentCatagory._id
        }
        let response = await fetch('/api/article/add', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify(options)
        })
        let data = await response.json()
        if (data.code === this.GLOBAL.STATUS.SUCCESS) {
          console.log('添加文章成功')
          await this.$store.dispatch('getArticleList', options.catagory)
          this.$store.dispatch('setCurrentArticle', data.id)
        }
      }
    }
  }

</script>
<style lang="scss" scoped>
  #article-left {
    background: #ffffff;
    min-height: 200px;
    width: 25%;
    height: 100%;
    .add{
      padding-left: 10px;
      padding-right: 10px;
      text-align: left;
      line-height: 60px;
      &::before{
        content: '\e638';
        font-size: 18px;
        margin: 5px;
      }
    }
    .article-list{
      border-top: 1px solid #ddd;
    }
  }
  
  @media (max-width: 768px) {
    #article-left {
      width: 100%;
      height: auto;
    }
  }
</style>
