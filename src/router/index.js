import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Capital from '../components/Capital.vue'
import Region from '../components/Region.vue'
import CallingCode from '../components/CallingCode.vue';
import CurrencyCode from '../components/CurrencyCode.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search-by',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search-by" */ '../views/SearchBy.vue'),
  },
  {
    path: '/search-by/capital',
    name: 'Capital',
    component: Capital
  },
  {
    path: '/search-by/region',
    name: 'Region',
    component: Region
  },
  {
    path: '/search-by/calling-code',
    name: 'CallingCode',
    component: CallingCode
  },
  {
    path: '/search-by/currency-code',
    name: 'CurrencyCode',
    component: CurrencyCode
  },
  {
    path: '/all-countries',
    name: 'AllCountries',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "all-countries" */ '../views/AllCountries.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
