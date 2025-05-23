import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/Login.vue'

const routes = [
    { path: '/', name: 'Login', component: Login },
    // Add more routes here
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
