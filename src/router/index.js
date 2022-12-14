import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/make_party',
    name: 'make_party',
    component: () => import(/* webpackChunkName: "about" */ '../views/MakeParty.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/matched_party',
    name: 'matched_party',
    component: () => import('../views/MatchedParty.vue')
  },
  {
    path: '/matched_party_list',
    name: 'matched_party_list',
    component: () => import('../views/MatchedPartyList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
