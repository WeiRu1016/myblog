<template>
  <div id="editor" :style="{height:height,width:width}">
    <h2 class="title">{{title}}</h2>
    <textarea name="_my-editor" id="_my-editor">{{value}}</textarea>
  </div>
</template>
<script>
  import SimpleMDE from 'simplemde'
  import '../../../node_modules/simplemde/src/css/simplemde.css'

  export default {
    name: 'editor',
    props: {
      value: {
        type: String,
        default: '',
        require: false
      },
      height: {
        type: String,
        default: '100%',
        require: false
      },
      width: {
        type: String,
        default: '100%',
        require: false
      },
      title: {
        type: String,
        default: '无标题文章',
        require: false
      }
    },
    data () {
      return {}
    },
    computed: {
    },
    mounted () {
      let editor = new SimpleMDE({
        // autosave: {
        //   enabled: true,
        //   uniqueId: '_my-editor',
        //   delay: 1000
        // },
        element: document.getElementById('_my-editor'),
        spellChecker: false
      })
      return editor
    }
  }
</script>
<style lang="scss" scopedSlots>
  #editor{
    min-width: 400px;
    font-size: 18px;
    .title{
      font-size: 40px;
      line-height: 2;
    }
    .CodeMirror {
      height: 100%;
      text-align: left;
    }
  }
</style>
