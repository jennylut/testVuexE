import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/common.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI, {size:'small',zIndex:3000})

new Vue({
  render: h => h(App),
}).$mount('#app')
