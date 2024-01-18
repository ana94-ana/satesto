import { createRouter, createWebHistory, RouterView } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Pages/Home.vue')
    },
   
    
  ]
})


export default router

