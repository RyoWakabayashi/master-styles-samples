import Vue from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import ColorsPage from './pages/ColorsPage/ColorsPage.vue'
import AnimationsPage from './pages/AnimationsPage/AnimationsPage.vue'

const routes = [
  {
    path: '/',
    name: '',
    component: ColorsPage
  },
  {
    path: '/colors',
    name: 'Colors',
    component: ColorsPage
  },
  {
    path: '/animations',
    name: 'Animations',
    component: AnimationsPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
