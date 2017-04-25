<template>
  <div id="article-left" :style="{width: width,height: height}">

  </div>
</template>
<script>
  export default {
    name: 'leftBar',
    props: {
      width: {
        type: String,
        default: 'auto',
        require: false
      },
      height: {
        type: String,
        default: '100%',
        require: false
      }
    }
  }
</script>
<style lang="scss" scopedSlots>
  #article-left{
    background: #ffffff;
    min-width: 200px;
  }  
</style>
