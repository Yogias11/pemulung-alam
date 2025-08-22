import { createRouter, createWebHistory } from 'vue-router'
import Home from '../App.vue'
import DetailNews from '../components/DetailNews.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/berita/:id', component: DetailNews }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
