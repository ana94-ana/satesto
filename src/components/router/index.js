import { createRouter,  RouterView } from 'vue-router'


const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Pages/Home.vue')
    },
   
    
  ]
})


export default router
