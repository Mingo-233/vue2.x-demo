import Vue from 'vue'
import options from '../confirm-dialog'
const Confirm = Vue.extend(options)
let confirm
const ConfirmInit = (options = {}) => {
  console.log(options)
  return new Promise((resolve, reject) => {
    options.resolve = resolve
    options.reject = reject
    confirm = new Confirm({
      el: document.createElement('div'),
      data: options
    })
    document.body.appendChild(confirm.$el)
    Vue.nextTick(() => {
      if (confirm) confirm.show = true
    })
    console.log(confirm)

    return confirm
  })
}
Vue.prototype.$confirmm = ConfirmInit
