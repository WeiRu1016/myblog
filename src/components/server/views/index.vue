<template>
  <div id="page">
    <left-bar class="f-left"></left-bar>
    <artcile-left class="f-left"></artcile-left>
    <editor class="f-left"></editor>
  </div>
</template>
<script>
  /**
   * 1.获取全部分类
   * 2.获取当前选中的分类下的文章
   * **/
  import editor from '../editor'
  import leftBar from '../leftBar'
  import artcileLeft from '../artcileLeft'
  export default {
    name: 'serverIndex',
    components: {
      editor,
      leftBar,
      artcileLeft
    },
    created () {
      this.$store.dispatch('refresh')
    }
  }
</script>
<style scopedSlots lang='scss'>
  #page{
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
</style>
