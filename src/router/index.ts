import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TablaLogs from '../components/tablaLogs.vue'
import GraficaLogs from '../components/graficaLogs.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tablaLogs',
      name: 'tablaLogs',
      component: TablaLogs,
    },
    {
      path: '/graficaLogs',
      name: 'graficaLogs',
      component: GraficaLogs,
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },*/
  ],
})

export default router
