import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Pocetna.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/make_party',
    name: 'make_party',
    component: () => import(/* webpackChunkName: "about" */ '../views/MakeParty.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
