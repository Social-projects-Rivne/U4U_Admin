import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

import './styles/global.scss'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

import App from './pages/App.vue'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import PasswordRecovery from './pages/PasswordRecovery.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/',
      name: 'home',
      component: Home
    },
    { 
      path: '/login',
      name: 'login', 
      component: Login 
    },
    {
      path: '/passwordRecovery',
      name: 'passwordRecovery',
      component: PasswordRecovery
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
