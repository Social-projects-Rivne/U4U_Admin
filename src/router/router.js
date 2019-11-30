import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home-page/home-page.vue'
import AppPage from '../pages/app-page/app-page.vue'
import Login from '../pages/login-page/login-page.vue'
import Dashboard from '../pages/dashboard-page/dashboard-page.vue';
import Moderators from '../pages/app-moderators';
import BannedUsers from '../pages/app-banned-users';
import BusinessUsers from '../pages/app-business-users';
import UserReviews from '../pages/app-user-reviews';
import Role from '../services/check.role';
import RecoveryPassword from '../pages/recovery-password-page/recovery-password-page.vue'
import AccessDeniedPage from '../pages/403-page/403-page.vue'
import { TokenService } from '../services/token.service.js'
import CreateModerator from '../pages/create-moderator';
import ApprovePlaces from '../pages/approve-places';
import ApprovedPlaces from '../pages/approved-places';
import RejectedPlaces from '../pages/rejected-places';
import AllUsers from '../pages/app-allUsers'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {

            path: '/',
            name: 'home',
            component: Home,

            meta: {
                guest: true,
                admin: false,
                moderator: false,
            }
        },
        {
            path: '/app',
            name: 'app',
            component: AppPage,

            meta: {
                guest: false,
                admin: true,
                moderator: true
            }
        },
        {

            path: '/login',
            name: 'login',
            component: Login,

            meta: {
                guest: true,
                admin: false,
                moderator: false
            }
        },
        {
            path: '/recovery-password',
            name: 'recoveryPassword',
            component: RecoveryPassword,

            meta: {
                guest: true,
                admin: false,
                moderator: false
            }

        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,

            meta: {
                guest: false,
                admin: true,
                moderator: true
            }
        },
        {
            path: '/baned-users',
            name: 'baned-users',
            component: BannedUsers,

            meta: { 
                guest: false,
                admin: true,
                moderator: true
            }
        },
        {
            path: '/approve-places',
            name: 'approve-places',
            component: ApprovePlaces,

            meta: { 
                guest: false,
                admin: true,
                moderator: true
            }
        },
        {
            path: '/approved-places',
            name: 'approved-places',
            component: ApprovedPlaces,

            meta: { 
                guest: false,
                admin: true,
                moderator: true
            }
        },
        {
            path: '/rejected-places',
            name: 'rejected-places',
            component: RejectedPlaces,

            meta: { 
                guest: false,
                admin: true,
                moderator: true
            }
        },
        {
            path: '/user-reviews',
            name: 'user-reviews',
            component: UserReviews,

            meta: { 
                guest: false,
                admin: true,
                moderator: true
            }
        },
        {
            path: '/business-users',
            name: 'business-users',
            component: BusinessUsers,

            meta: { 
                guest: false,
                admin: true,
                moderator: true
            }
        },
        {
            path: '/moderators',
            name: 'moderators',
            component: Moderators,

            meta: {
                guest: false,
                admin: true,
                moderator: false
            }
        },
        {
            path: '/create-moderator',
            name: 'create-moderator',
            component: CreateModerator,

            meta: {
                guest: false,
                admin: true,
                moderator: true
            }
        },
        {
            path: '/403',
            name: '403',
            component: AccessDeniedPage,

            meta: {
                guest: false,
                admin: false,
                moderator: true 
            }
        },
    ]
})


router.beforeEach(async (to, from, next) => {

    try {
        //routs available only for loggined users
        await TokenService.checkToken()

        const isAdmin = await Role.checkRole();

        if (to.matched.some(record => record.meta.admin && record.meta.moderator)) {

            next()

        } else if (to.matched.some(record => record.meta.admin && !record.meta.moderator)) {

            if(isAdmin)
                next()
            else{
                next('/403')
            }
        } else if (to.matched.some(record => !record.meta.admin && record.meta.moderator)) {

            if(!isAdmin)

                next()

            else{

                next('/dashboard')
            }
        } else {

            next('/dashboard')

        }

    } catch (error) {

         //routs available only for loggined guests

        if (to.matched.some(record => record.meta.admin || record.meta.moderator)) {           

            next('/login')

        } else if (to.matched.some(record => record.meta.guest)) {

            if (to.name === 'home') {
                next('/login') //workaround for home page, maybe home page will be lending page in feature
            }

            next();
        }
    }
})

export default router
