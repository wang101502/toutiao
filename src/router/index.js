import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    // 登陆页
    {
        name: 'login',
        path: '/login',
        component: () => import('@/view/login')
    },
    // 首页
    {
        name: 'home',
        path: '/',
        redirect: '/welcome',
        component: () => import('@/view/home'),
        children: [
            // 欢迎页面
            {
                name: 'welcome',
                path: '/welcome',
                component: () => import('@/view/welcome')
            },
            // 内容管理页面
            {
                name: 'article',
                path: '/article',
                component: () => import('@/view/article')
            },
            // 个人设置页面
            {
                name: 'setting',
                path: '/setting',
                component: () => import('@/view/setting')
            }
        ]
    },
    {
        name: '404',
        path: '*',
        component: () => import('@/view/404')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    const userInfo = window.sessionStorage.getItem('wxq-toutiao')
    if (to.path !== '/login' && !userInfo) return next('/login')
    next()
})
export default router