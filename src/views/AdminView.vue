<template>
  <div class="p-10">
    <AppNavbar :sections="adminSections" />
    <Sidebar :sections="adminSections" />

    <h1 class="text-3xl font-bold text-yellow-600">Admin Paneli</h1>
    <p class="mb-4">Giriş başarılı! Hoş geldiniz.</p>

    <button @click="logout" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
      Çıkış Yap
    </button>
  </div>
</template>

<script setup>
import Sidebar from '../components/AppSidebar.vue'
import AppNavbar from '@/components/AppNavbar.vue'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { useRouter } from 'vue-router'

const router = useRouter()

const adminSections = [
  { id: 'hakkimda', name: 'HAKKIMDAYI DÜZENLE' },
  { id: 'deneyimler', name: 'DENEYİMLERİ DÜZENLE' },
  { id: 'egitim', name: 'EĞİTİM HAYATINI DÜZENLE' },
  { id: 'yetenekler', name: 'YETENEKLERİNİ DÜZENLE' },
  { id: 'iletisim', name: 'İLETİŞİMİ DÜZENLE' },
]

async function logout() {
  try {
    await signOut(auth)
    localStorage.removeItem('userLoggedIn')
    router.push('/login')
  } catch (error) {
    console.error('Çıkış hatası:', error)
  }
}
</script>
