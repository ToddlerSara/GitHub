import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
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
        component: () => import('../views/Practice.vue')
    },
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
})

export default router