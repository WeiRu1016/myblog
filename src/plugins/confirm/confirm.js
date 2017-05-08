import confirmCompoent from './myConfirm'

let Confirm = {}
Confirm.install = function (Vue, options) {
  Vue.prototype.$confirm = function (data) {
    let MyConfirm = Vue.extend(confirmCompoent)
    let node = document.createElement('div')
    node.id = 'myConfirm'
    let instance = new MyConfirm({
      propsData: data
    })
    document.getElementById('app').appendChild(node)
    instance.$mount('#myConfirm')
  }
}
export default Confirm
