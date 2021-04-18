import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login'
import Home from '../components/home/Home'

Vue.use(VueRouter)

// const routes = [
//     { path: '/login', name: 'Login', components: 'Login' }
// ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', name: 'Login', component: Login },
        { path: '/home', name: 'Home', component: Home }
    ]


})
router.beforeEach((to, from, next) => {
    //只有登陆成功才可以访问别的页面
    if (to.path === '/login') return next()
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/login')
    next()

})

export default router