import Vue from 'vue'
import App from './app.vue'
import router from './router/router.js'

import './styles/global.scss'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
