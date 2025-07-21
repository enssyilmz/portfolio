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
//giriş işlemleri
function isLoggedIn() {
  return !!localStorage.getItem('userLoggedIn') // Örnek: login olduğunda localStorage’a bir key koyuyorsun
}

router.beforeEach((to, _from, next) => {
  const loggedIn = isLoggedIn()

  if (to.path === '/login' && loggedIn) {
    // Eğer login olmuşsa login sayfasına gitmesin, ana sayfaya veya admin sayfasına yönlendir
    return next('/')
  }

  if (to.path === '/admin' && !loggedIn) {
    // Admin sayfasına gitmek isteyen ama login olmayan kullanıcıyı login sayfasına yönlendir
    return next('/login')
  }

  // Diğer durumlarda direkt devam et
  next()
})
export default router
