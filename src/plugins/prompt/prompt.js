import promptCompoent from './myPrompt'

let Prompt = {}
Prompt.install = function (Vue, options) {
  Vue.prototype.$prompt = function (data) {
    let MyPrompt = Vue.extend(promptCompoent)
    let node = document.createElement('div')
    node.id = 'myPrompt'
    let instance = new MyPrompt({
      propsData: data
    })
    document.getElementById('app').appendChild(node)
    instance.$mount('#myPrompt')
  }
}
export default Prompt
