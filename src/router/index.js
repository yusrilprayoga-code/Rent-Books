import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from "../views/login.vue"
import BooksView from "../views/books.vue"
import PeminjamanView from "../views/peminjaman.vue"
import addbook from "../views/addbook.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/books',
    name: 'BooksView',
    component: BooksView
  },
  {
    path: '/login',
    name: 'login',
    component: loginView
  },
  {
    path: '/peminjaman',
    name: 'PeminjamanView',
    component: PeminjamanView
  },
  {
    path: '/books/addbook',
    name: 'addbook',
    component: addbook
  }, 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
