import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VuelazyLoad from 'vue-lazyload';

import toast from 'components/common/toast'
// import axios from 'axios'

Vue.config.productionTip = false

//添加事件总线对象
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)
FastClick.attach(document.body)
//使用懒加载插件
Vue.use(VuelazyLoad, {
  loading: require('./assets/images/placeholder.jpg')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

