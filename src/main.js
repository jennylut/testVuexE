import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/common.css'
import router from './router'
import store from './store'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI, {size:'small',zIndex:3000})

new Vue({
  router:router,
  store:store,
  render: h => h(App),
}).$mount('#app')
