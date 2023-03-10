import { createRouter, createWebHistory } from 'vue-router'

import ContactView from '../views/contact.vue'
import IndexView from '../views/index.vue'




const routes = [
    {
        path: '/',
        name: '/',
        component: IndexView,
        meta: {
            scrollTop: 0,
        },
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView,
    },
]
const scrollBehavior = (to, from, savedPosition) => {
    return to ||
        {
            top: to.meta?.scrollTop || 0,
            left: 0
        }
}
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior,
})
router.beforeEach((to, from, next) => {
    console.log('window.scrollY:', window.scrollY)
    from.meta?.scrollTop && (from.meta.scrollTop = window.scrollY)
    console.log('from:\t', from.name, '\t', from.meta)
    console.log('to:\t\t', to.name, '\t', to.meta)
    return next()
})

export default router
