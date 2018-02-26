<template>
  <li :class="{selected:selected, published: published}" class="list-item list-item-article" @click="setCurrentArticle">
    <div class="icon name">
      {{item.title}}<small class="content">{{item.text}}</small>
    </div>
    <span class="font-num">字数：{{fontCount}}</span>
    <a v-show="selected" class="setting" @click.prevent="ShowTips">&#xe6b5;</a>
    <div v-show="show && selected" class="tips" tabindex="-1" @blur.prevent.stop="ShowTips" ref="tips">
      <div>
        <a @click.prevent.stop="showPublish" class="icon published">发布文章</a>
      </div>
      <div>
        <a @click.prevent.stop="showDelete" class="icon delete">删除文章</a>
      </div>
    </div>
 </li>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default{
    name: 'list-item',
    props: {
      selected: {
        type: Boolean
      },
      item: {
        type: Object
      }
    },
    data () {
      return {
        show: false
      }
    },
    computed: {
      ...mapGetters({
        currentCatagory: 'getCurrentCatagory'
      }),
      fontCount () {
        return this.item.text.length
      },
      published () {
        return this.item.status === 'published'
      }
    },
    methods: {
      showConfirm (options) {
        this.$refs.tips.blur()
        this.$confirm(options)
      },
      showDelete () {
        this.showConfirm({
          content: '确认删除此文章？',
          id: 'myConfirm',
          successCB: this.deleteArticle
        })
      },
      showPublish () {
        this.showConfirm({
          content: '确认发布此文章？发布操作不可撤回',
          id: 'myConfirm',
          successCB: this.publishedArticle
        })
      },
      async  deleteArticle () {
        let response = await fetch('/api/article/delete', {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            id: this.item._id
          })
        })
        let data = await response.json()
        if (data.code === this.GLOBAL.STATUS.SUCCESS) {
          window.alert('删除成功')
          this.$store.dispatch('refreshArticle')
        } else {
          window.alert(data.msg)
        }
      },
      async publishedArticle () {
        debugger
        let response = await fetch('/api/article/published', {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({id: this.item._id})
        })
        let data = await response.json()
        if (data.code === this.GLOBAL.STATUS.SUCCESS) {
          window.alert('发布成功')
          this.$store.dispatch('getArticleList', this.currentCatagory._id)
        } else {
          window.alert(data.msg)
        }
      },
      setCurrentArticle () {
        this.$store.dispatch('setCurrentArticle', this.item._id)
      },
      ShowTips () {
        this.show = !this.show
        if (this.show) {
          this.$nextTick(() => {
            this.$refs.tips.focus()
          })
        }
      }
    }
  }
</script>
<style lang="scss">
  .list-item-article.selected{
    background-color: #ececec;
  }
  .list-item-article.published{
    .name{
      &::before{
        content: '\e72e';
        font-size: 30px;
        vertical-align: middle;
        padding-right: 5px;
      }
    }
  }
  .list-item-article{
    .setting{
      color: #555555;
    }
    .name{
      color: #555555;
      &::before{
        content: '\e640';
        font-size: 26px;
        vertical-align: middle;
        padding-right: 5px;
      }
    }
    small{
      display: block;
      font-size: 12px;
      margin-left: 40px;
      color: #555555;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .font-num{
      font-size: 12px;
      color: #555555;
    }
  }
  a.published::before{
    content: "\e606";
    font-size: 24px;
    vertical-align: sub;
  }
  a.delete::before{
    content: "\e69d";
    font-size: 24px;
    vertical-align: sub;
  }
</style>
