<template>
  <div id="editor">
    <div v-show="article" class="container">
      <input class="title" v-model="title" @change="setTitle">
      <textarea name="_my-editor" id="_my-editor" v-model="content"></textarea>
    </div>
    <div v-if="!article">
      <p class="tips">BaoMax</p>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import SimpleMDE from 'simplemde'
  import { throttle } from '../../assets/js/untils'
  import '../../assets/css/editor.css'

  export default {
    name: 'editor',
    data () {
      return {
        title: '',
        dem: null,
        content: ''
      }
    },
    computed: {
      ...mapGetters({
        article: 'getCurrentArticle'
      })
    },
    watch: {
      article () {
        if (this.article) {
          this.$nextTick(() => {
            this.title = this.article.title
            this.dem.value(this.article.content)
          })
        }
      }
    },
    methods: {
      async setTitle () {
        let data = await this.edit({
          title: this.title
        })
        if (data.code === this.GLOBAL.STATUS.SUCCESS) {
          this.article.title = this.title
        }
      },
      async edit (obj) {
        debugger
        let response = await fetch(`/api/article/edit?id=${this.article._id}`, {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify(obj)
        })
        let data = await response.json()
        return data
      },
      async saveArticle () {
        let con = this.dem.value()
        let data = await this.edit({
          content: this.dem.markdown(con)
        })
        if (data.code === this.GLOBAL.STATUS.SUCCESS) {
          this.article.content = con
        }
      }
    },
    mounted () {
      if (this.$el.getElementsByTagName('textarea').length) {
        this.dem = new SimpleMDE({
          element: document.getElementById('_my-editor'),
          spellChecker: false,
          autofocus: true,
          lineWrapping: true,
          forceSync: true,
          status: false
          // autosave: {
          //   enabled: true,
          //   delay: 1000
          // }
        })
        this.dem.codemirror.on('change', throttle(this.saveArticle, 100, this))
      }
    }
  }

</script>
<style lang="scss">
  #editor {
    /*min-width: 400px;*/
    font-size: 18px;
    width: 55%;
    height: 100%;
    /*overflow-y: hidden;*/
    overflow-x: hidden;
    box-sizing: border-box;
    border-left: 1px solid #ddd;
    background-color: #ddd;
    .title {
      font-size: 40px;
      line-height: 2;
      border: none;
      display: block;
      text-align: center;
      width: 100%;
      height: 10%;
      min-height: 40px;
    }
    .container{
      height: 100%;
    }
    .CodeMirror {
      height: 83%;
      min-height: 300px;
      text-align: left;
      border: none;
      overflow: auto; 
    }
    .editor-toolbar{
      border: none;
      background-color: #dedede;
      box-shadow: 1px 1px #dedede;
      min-height: 40px;
      height: 5%;
    }
    .tips{
      font-size: 40px;
      margin-top: 50%;
      text-align: center;
      transform: translateY(-50%);
      color: #555;
    }
  }
  
  @media (max-width: 768px) {
    #editor {
      width: 100%;
      height: auto;
    }
    .container{
      height: auto;
      min-height: 360px;
    }
    .CodeMirror {
      height: auto;
      min-height: 300px;
    }
  }
</style>
