<template>
  <div class="progress">
    <p class="progress-name" v-if="name">{{ name }}</p>
    <div class="progress-line"><span class="inner" :style="{right: `${right}`}"></span></div>
  </div>
</template>
<script>
  export default {
    name: 'progress',
    props: {
      name: {
        type: String,
        default: ''
      },
      value: {
        type: Number,
        default: 0
      }
    },
    computed: {
      right () {
        return `${100 - this.value}%`
      }
    }
  }
</script>
<style lang="scss">
  .progress-name {
    text-align: left;
    line-height: 2em;
  }
  .progress-line {
    width: 100%;
    height: 10px;
    position: relative;
    .inner {
      content: '';
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 0;
      background-color: #465364;
    }
  }
</style>

