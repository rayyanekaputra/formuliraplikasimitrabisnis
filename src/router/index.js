import {createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import RegistrasiCustomerView from '../views/RegistrasiCustomerView.vue'

const routes = [
  { path: '/', 
    name:'home',
    component: HomeView},
  { path: '/RegistrasiCustomer', 
    name:'registercustomer',
    component: RegistrasiCustomerView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;