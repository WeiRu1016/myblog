<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <!--<input type="text" name="" value="" autofocus ref="input" id="input">-->
    <button type="" ref="btn" @click="test" id="btn">lalal</button>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    test () {
      let node = document.createElement('div')
      node.id = 'test'
      // let node = document.getElementById('test')
      node.innerHTML = '<input type="text" name="" value="" autofocus ref="input" id="input">'
      document.getElementById('app').appendChild(node)
      // setTimeout(function () {
      document.getElementById('input').focus()
      // }, 0)
      // alert('aaa')
      // this.$nextTick(() => {
      //   document.getElementById('input').focus()
      // })
      // this.$refs.input.focus()
    }
  },
  mounted () {
    // this.$nextTick(() => {
    //   // debugger
    //   // document.getElementById('input').click()
    //   document.getElementById('btn').click()
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
