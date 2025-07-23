<template>
  <div>
    <AppNavbar :sections="adminSections" />
    <Sidebar :sections="adminSections" />
    <main class="lg:ml-64 p-6 bg-gray-50 min-h-screen">
      <div class="p-6 space-y-4">
        <h1 class="text-2xl font-bold text-yellow-600">Hakkımda Bölümünü Düzenle</h1>
        <input v-model="aboutData.name" class="input" placeholder="Ad" />
        <input v-model="aboutData.surname" class="input" placeholder="Soyad" />
        <input v-model="aboutData.location" class="input" placeholder="Konum" />
        <input v-model="aboutData.email" class="input" placeholder="E-posta" />
        <input v-model="aboutData.linkedin" class="input" placeholder="LinkedIn Linki" />
        <input v-model="aboutData.github" class="input" placeholder="GitHub Linki" />
        <input v-model="aboutData.twitter" class="input" placeholder="Twitter Linki" />
        <input v-model="aboutData.instagram" class="input" placeholder="Instagram Linki" />
        <input v-model="aboutData.youtube" class="input" placeholder="YouTube Linki" />
        <input v-model="aboutData.website" class="input" placeholder="Kişisel Web Sitesi" />
        <textarea
          v-model="aboutData.description"
          class="textarea"
          placeholder="Açıklama"
        ></textarea>

        <div v-for="(link, index) in aboutData.socialLinks" :key="index" class="flex gap-2">
          <input v-model="link.name" class="input" placeholder="platform (github, linkedin)" />
          <input v-model="link.url" class="input flex-1" placeholder="URL" />
          <button @click="aboutData.socialLinks.splice(index, 1)" class="btn bg-red-500">
            Sil
          </button>
        </div>

        <button @click="aboutData.socialLinks.push({ name: '', url: '' })" class="btn bg-green-500">
          Sosyal Link Ekle
        </button>

        <button @click="saveChanges" class="btn bg-blue-600">Kaydet</button>
      </div>
      <button @click="logout" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
        Çıkış Yap
      </button>
    </main>
  </div>
</template>

<script setup>
import Sidebar from '../components/AppSidebar.vue'
import AppNavbar from '@/components/AppNavbar.vue'
import { ref, onMounted } from 'vue'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { useRouter } from 'vue-router'

const aboutData = ref({
  name: '',
  surname: '',
  location: '',
  email: '',
  description: '',
  socialLinks: {
    github: '',
    linkedin: '',
    twitter: '',
    instagram: '',
    facebook: '',
    youtube: '',
  },
})

const docRef = doc(db, 'about', 'aboutInfo')
onMounted(async () => {
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    aboutData.value = docSnap.data()
  }
})
async function saveChanges() {
  await updateDoc(docRef, aboutData.value)
  alert('Güncellendi!')
}

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
