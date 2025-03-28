import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TablaLogs from '../components/tablaLogs.vue'
import GraficaLogs from '../components/graficaLogs.vue'
import detalle from '../components/detalle.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tabla',
      name: 'tabla',
      component: TablaLogs,
      children: [
        {
          path: 'detalle/:index',
          name: 'detalle',
          component: detalle,
          props: true
        },]
    },
    {
      path: '/grafica',
      name: 'grafica',
      component: GraficaLogs,
    },
  ],
})

export default router
