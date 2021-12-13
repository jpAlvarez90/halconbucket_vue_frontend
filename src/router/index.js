import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Public/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/album',
    name: 'Album',
    component: () => import('../views/Gallery/Album.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile/Profile.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Public/Search.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Auth/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Auth/Register.vue')
  },
  {
    path: '/uploadphoto',
    name: 'uploadphoto',
    component: () => import('../views/Gallery/UploadPhoto.vue')
  },
  {
    path: '/album/:album_id',
    name: 'albumgallery',
    component: () => import('../views/Gallery/Gallery.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
