<template>
    <div class="prompt-dialog" :id="id">
        <div class="prompt-hover"></div>
        <div class="prompt-box">
          <input type="text" name="" v-model="inputValue">
          <div class="btn-group">
            <a @click.prevent="submit">确定</a>
            <a @click.prevent>取消</a>
          </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'myPrompt',
    props: {
      id: {
        type: String,
        default: Math.random().toString(36).slice(2, 5),
        required: false
      },
      value: {
        type: String,
        default: '',
        required: false
      }
    },
    data () {
      console.log(this)
      return {
        inputValue: this.value + 'aaaa'
      }
    },
    metods: {
      submit () {
        this.$emit('submit', this.inputValue)
      }
    }
  }
</script>
