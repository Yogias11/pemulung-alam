import { createRouter, createWebHistory } from 'vue-router'
import DetailNews from '../views/DetailNews.vue'
import AboutPage from '../views/AboutPage.vue'
import HomePage from '../views/HomePage.vue'
import EventPage from '../views/EventPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/berita/:id', component: DetailNews },
  { path: '/about', component: AboutPage },
  { path: '/event', component: EventPage}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
