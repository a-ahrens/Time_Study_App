import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import VideoStudy from '../views/VideoStudy.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/video_study',
    name: 'video_study',
    component: VideoStudy
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router