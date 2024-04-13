import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import './assets/styles/element-variables.scss'
import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // ruoyi css
import './assets/icons' // icon
import 'element-ui/lib/theme-chalk/index.css'
import test1 from './views/test1.vue'
import './permission';
import plugins from './plugins' // plugins
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(plugins)

Vue.component('test1', test1);

new Vue({
  el:  '#app',
  store,
  router,
  render: h => h(App),
})
