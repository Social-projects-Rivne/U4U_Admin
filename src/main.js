import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './pages/App.vue'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
