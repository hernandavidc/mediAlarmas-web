import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/Login.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/medicamentos',
      name: 'medicine',
      component: () => import('../views/Medicine.vue')
    }
  ]
})

export default router
