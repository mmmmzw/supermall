import Toast from './Toast.vue'

const obj = {

}
obj.install = function(Vue) {
  // 创建组建构造器
  const toastConstrustor = Vue.extend(Toast)
  // new的方式，根据组建构造器，可以创建出来一个组建对象
  const toast = new toastConstrustor()
  //将组建对象，手动的挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  // toast.$el对应的就是div
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast;
}

export default obj  