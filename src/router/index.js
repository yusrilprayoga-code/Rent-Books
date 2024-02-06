import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView.vue"
import BookView from "../views/BookView.vue"
import RentView from "../views/RentView.vue"
import AddBook from "../views/addbook.vue"
import EditBook from "../views/EditBook.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/books',
    name: 'BookView',
    component: BookView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/rent',
    name: 'RentView',
    component: RentView
  },
  {
    path: '/books/addbook',
    name: 'AddBook',
    component: AddBook
  }, 
  {
    path: '/books/:id',
    name: 'EditBook',
    component: EditBook
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
