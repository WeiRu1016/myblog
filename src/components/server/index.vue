<template>
  <div id="page">
    <left-bar width="10%" class="f-left"></left-bar>
    <artcile-left width="25%" class="f-left"></artcile-left>
    <editor width="60%" class="f-left"></editor>
  </div>
</template>
<script>
  import editor from './editor'
  import leftBar from './leftBar'
  import artcileLeft from './artcileLeft'
  export default {
    name: 'index',
    data () {
      return {
      }
    },
    components: {
      editor,
      leftBar,
      artcileLeft
    },
    computed: {
    },
    mounted () {
      // this.$nextTick(() => {
        // debugger
        // let editor = new SimpleMDE({
        //   autofocus: true,
        //   autosave: {
        //     enabled: true,
        //     uniqueId: 'editor',
        //     delay: 1000
        //   },
        //   // element: document.getElementById('editor'),
        //   forceSync: true,
        //   // hideIcons: ['guide', 'heading'],// 要隐藏的图标数组名
        //   indentWithTabs: false, // 使用空格缩进
        //   initialValue: 'Hello orld', // 初始化内容
        //   insertTexts: {
        //     horizontalRule: ['', '\n\n-----\n\n'],
        //     image: ['![](http://', ')'],
        //     link: ['[', '](http://)'],
        //     table: ['', '\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n']
        //   }, // 自定义插入文本的特定按钮的行为
        //   lineWrapping: true, // 如果设置为false，禁止换行
        //   parsingConfig: {
        //     allowAtxHeaderWithoutSpace: true,
        //     strikethrough: false,
        //     underscoresBreakWords: true
        //   },
        //   placeholder: 'Type hear...', // 自定义占位符
        //   // previewRender: function (plainText) {
        //   //   return customMarkdownParser(plainText) // Returns HTML from a custom parser
        //   // },
        //   // previewRender: function (plainText, preview) { // Async method
        //   //   setTimeout(function () {
        //   //     preview.innerHTML = customMarkdownParser(plainText)
        //   //   }, 250)

        //   //   return 'Loading...'
        //   // },
        //   promptURLs: true,
        //   renderingConfig: {
        //     singleLineBreaks: false,
        //     codeSyntaxHighlighting: true
        //   },
        //   shortcuts: {
        //     drawTable: 'Cmd-Alt-T'
        //   },
        //   // showIcons: ['code', 'table'],
        //   spellChecker: false,
        //   status: false,
        //   styleSelectedText: false,
        //   tabSize: 4,
        //   // toolbar: false,
        //   toolbarTips: true
        // })
        // return editor
      // })
    }
  }
</script>
<style scopedSlots lang='scss'>
  #page{
    height: 100%;
    width: 100%;
    overflow: hidden
  }
</style>
