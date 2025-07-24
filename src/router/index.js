import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import AdminView from '@/views/AdminView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/admin', component: AdminView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
function isLoggedIn() {
  return !!localStorage.getItem('userLoggedIn')
}
router.beforeEach((to, _from, next) => {
  const loggedIn = isLoggedIn()

  if (to.path === '/login' && loggedIn) {
    return next('/')
  }

  if (to.path === '/admin' && !loggedIn) {
    return next('/login')
  }
  next()
})
export default router
