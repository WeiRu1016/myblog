<template>
  <div id="leftBar" :style="{width: width,height: height}">

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
  #leftBar{
    background: #3f3f3f;
    min-width: 200px;
  }  
</style>
