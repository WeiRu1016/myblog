<template>
  <div id="editor" style={height:height,width:width}>
    <textarea name="_my-editor" id="_my-editor"></textarea>
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
        type: Number,
        default: '100%',
        require: false
      }
    },
    mounted () {
      this.$nextTick(() => {
        return new SimpleMDE({
          element: document.getElementById('_my-editor'),
          initialValue: this.value
        })
      })
    }
  }
</script>
<style lang="scss" scopedSlots>
</style>
