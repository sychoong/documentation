import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Prism from 'prismjs';
import './assets/tailwind.css'

Prism.highlightAll();


Vue.config.productionTip = false

new Vue({
  router,
  store,
  Prism,
  render: h => h(App)
}).$mount('#app')
