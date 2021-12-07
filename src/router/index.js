import { createRouter, createWebHistory } from 'vue-router'
import TodoApp from '../components/TodoApp.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: TodoApp
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../components/Detail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
