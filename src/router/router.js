import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home-page/home-page.vue'
import AppPage from '../pages/app-page/app-page.vue'
import Login from '../pages/login-page/login-page.vue'
import Dashboard from '../pages/dashboard-page/dashboard-page.vue';
import BannedUsers from '../pages/app-banned-users';
import RecoveryPassword from '../pages/recovery-password-page/recovery-password-page.vue'
import AccessDeniedPage from '../pages/403-page/403-page.vue'
import { TokenService } from '../services/token.service.js'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                guest: true
            }
        },
        {
            path: '/app',
            name: 'app',
            component: AppPage,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                guest: true
            }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                guest: true
            }
        },
        {
            path: '/baned-users',
            name: 'baned-users',
            component: BannedUsers,
            meta: {
            component: RecoveryPassword,
            meta: { 
                guest: true
            }
        },
        { 
            path: '/403',
            name: '403',
            component: AccessDeniedPage,
            meta: { 
                requiresAuth: true
            }
        },
    ]
})

router.beforeEach(async (to, from, next) => {
    try {
        await TokenService.checkToken()

        if (to.matched.some(record => record.meta.requiresAuth)) {
            next()
        } else if (to.matched.some(record => record.meta.guest)) {
            next('/app')
        }
    } catch (error) {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            next('/login')
        } else if (to.matched.some(record => record.meta.guest)) {
            if (to.name === 'home') {
                next('/login')
            }
            next()
        }
    }
})

export default router
