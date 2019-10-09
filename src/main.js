import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import './styles/global.scss'

Vue.use(VueRouter)
Vue.use(VueResource)

import App from './App.vue'
import Home from './pages/HomePage/HomePage.vue'
import AppPage from './pages/AppPage/AppPage.vue'
import Login from './pages/LoginPage/LoginPage.vue'
import recoveryPassword from './pages/RecoveryPasswordPage/RecoveryPasswordPage.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/app',
      name: 'app',
      component: AppPage
    },
    { 
      path: '/login',
      name: 'login', 
      component: Login 
    },
    {
      path: '/recovery-password',
      name: 'recoveryPassword',
      component: recoveryPassword
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
