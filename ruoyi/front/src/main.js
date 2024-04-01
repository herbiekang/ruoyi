import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import './assets/icons' // icon
import 'element-ui/lib/theme-chalk/index.css'
import test1 from './views/test1.vue'
Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.component('test1', test1);

new Vue({
  el:  '#app',
  store,
  router,
  render: h => h(App),
})
