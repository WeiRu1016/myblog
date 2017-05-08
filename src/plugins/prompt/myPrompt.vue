<template>
    <div class="prompt-dialog" :id="id" v-if="show">
        <div class="prompt-hover"></div>
        <div class="prompt-box">
          <p class="prompt-header">{{title}}</p>
          <input v-focus type="text" name="" v-model="inputValue" class="prompt-input">
          <div class="btn-group">
            <a @click="submit" class="btn default">确定</a>
            <a @click="hide" class="btn blue">取消</a>
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
        default: Math.random().toString(36).slice(2, 5)
      },
      value: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: '提示'
      },
      successCB: {
        type: Function
      },
      failCB: {
        type: Function
      }
    },
    data () {
      console.log(this)
      return {
        inputValue: this.value,
        show: true
      }
    },
    methods: {
      submit () {
        this.show = false
        if (typeof (this.successCB) === 'function') {
          this.successCB(this.inputValue)
        }
      },
      hide () {
        this.show = false
        if (typeof (this.failCB) === 'function') {
          this.failCB()
        }
      }
    }
  }
</script>
<style lang="scss">
  .prompt-hover{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.7);
  }
  .prompt-box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    min-width: 300px;
  }
  .prompt-header{
    font-weight: bold;
    line-height: 50px;
  }
  .prompt-input{
    border: 1px solid #cccccc;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    transition: border linear 0.2s, box-shadow linear 0.2s;
    background-color: white;
    padding: 5px;
    width: 80%;
    box-sizing:border-box;
    display: inline-block;
  }
  .btn-group{
    margin: 5px;
  }
  .btn-group > a{
    margin: 5px 10px;
  }
</style>
