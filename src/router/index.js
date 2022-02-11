import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/acknowledgement',
    name: 'Acknowledgement',
    component: () => import('../views/Acknowledgement.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
