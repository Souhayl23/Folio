import { createRouter, createWebHistory } from 'vue-router'

import ContactView from '../views/contact.vue'
import IndexView from '../views/index.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/about',
        name: 'About',
        component: About
      }
    ],
    hash: true // active le mode de hash
  })

const routes = [
    
    {
        path: '/',
        name: '/',
        component: IndexView,
        hash: '#about'
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

router.beforeEach((to, from, next) => {
    console.log('window.scrollY:', window.scrollY)
    from.meta?.scrollTop && (from.meta.scrollTop = window.scrollY)
    console.log('from:\t', from.name, '\t', from.meta)
    console.log('to:\t\t', to.name, '\t', to.meta)
    return next()
})

export default router
