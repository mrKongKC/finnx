import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {    
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 60 }
    }
  }
})

export default router
