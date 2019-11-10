import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) //adding plugin here

function load (componentName) {
    return () => import(`@/components/${componentName}`)
}

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: load('Home')
        },
        {
            path: '/register',
            name: 'Register',
            component: load('Register')
        },
    ]
})

export default router