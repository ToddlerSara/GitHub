import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/sara',
        name: 'sara',
        component: () => import('../views/SaraHtml.vue')
    },
    {
        path: '/homework',
        name: 'homework',
        component: () => import('../views/practice.vue')
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router