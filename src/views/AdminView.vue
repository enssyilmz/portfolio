<template>
  <div>
    <AppNavbar :sections="adminSections" />
    <Sidebar :sections="adminSections" />
    <main class="lg:ml-64 p-6 bg-gray-50 min-h-screen">
      <AboutAdminView />
      <hr class="my-12 border-t-2 border-gray-300" />
      <ExperienceAdminView />
      <hr class="my-12 border-t-2 border-gray-300" />
      <EducationAdminView />
      <hr class="my-12 border-t-2 border-gray-300" />
      <button @click="logout" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
        Çıkış Yap
      </button>
    </main>
  </div>
</template>

<script setup>
import Sidebar from '../components/AppSidebar.vue'
import AppNavbar from '@/components/AppNavbar.vue'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { useRouter } from 'vue-router'
import AboutAdminView from './admin/AboutAdminView.vue'
import ExperienceAdminView from './admin/ExperienceAdminView.vue'
import EducationAdminView from './admin/EducationAdminView.vue'
const router = useRouter()
async function logout() {
  try {
    await signOut(auth)
    localStorage.removeItem('userLoggedIn')
    router.push('/login')
  } catch (error) {
    console.error('Çıkış hatası:', error)
  }
}
const adminSections = [
  { id: 'hakkimda', name: 'HAKKIMDAYI DÜZENLE' },
  { id: 'deneyimler', name: 'DENEYİMLERİ DÜZENLE' },
  { id: 'egitim', name: 'EĞİTİM HAYATINI DÜZENLE' },
  { id: 'yetenekler', name: 'YETENEKLERİNİ DÜZENLE' },
]
</script>
