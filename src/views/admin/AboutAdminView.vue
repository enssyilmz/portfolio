<template>
  <section id="hakkimda" class="min-h-screen flex flex-col justify-center gap-4">
    <BasePopup v-model="showPopup" :message="'Hakkımda Bölümü Güncellendi!'" :duration="3000" />
    <h1 class="text-3xl md:text-5xl font-bold">Hakkımda Bölümünü Düzenle</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="name" class="text-sm md:text-base font-medium">Ad</label>
      <input id="name" v-model="aboutInfo.name" class="input" placeholder="Ad" />

      <label for="surname" class="text-sm md:text-base font-medium">Soyad</label>
      <input id="surname" v-model="aboutInfo.surname" class="input" placeholder="Soyad" />
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="location" class="text-sm md:text-base font-medium">Konum</label>
      <input id="location" v-model="aboutInfo.location" class="input" placeholder="Konum" />

      <label for="email" class="text-sm md:text-base font-medium">Email</label>
      <input id="email" v-model="aboutInfo.email" class="input" placeholder="E-posta" />
    </div>

    <div class="grid grid-cols-1 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="description" class="text-sm md:text-base font-medium">Açıklama</label>
      <textarea
        id="description"
        v-model="aboutInfo.description"
        class="textarea"
        placeholder="Açıklama"
      ></textarea>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="github" class="col-span-2 md:col-span-4 text-sm md:text-base font-medium">Bağlantılar</label>

      <font-awesome-icon :icon="['fab', 'github']" />
      <input id="github" v-model="socialLinks.github" class="input" placeholder="GitHub Linki" />

      <font-awesome-icon :icon="['fab', 'linkedin']" />
      <input
        id="linkedin"
        v-model="socialLinks.linkedin"
        class="input"
        placeholder="LinkedIn Linki"
      />

      <font-awesome-icon :icon="['fab', 'x-twitter']" />
      <input id="twitter" v-model="socialLinks.twitter" class="input" placeholder="Twitter Linki" />

      <font-awesome-icon :icon="['fab', 'instagram']" />
      <input
        id="instagram"
        v-model="socialLinks.instagram"
        class="input"
        placeholder="Instagram Linki"
      />

      <font-awesome-icon :icon="['fab', 'facebook']" />
      <input
        id="facebook"
        v-model="socialLinks.facebook"
        class="input"
        placeholder="Facebook Linki"
      />

      <font-awesome-icon :icon="['fab', 'youtube']" />
      <input id="youtube" v-model="socialLinks.youtube" class="input" placeholder="YouTube Linki" />
    </div>
    <div id="button" class="flex justify-center">
      <button @click="saveChanges" class="btn px-4 py-2 rounded-lg">
        Hakkımda Bölümünü Kaydet
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import BasePopup from '@/components/BasePopup.vue'

const aboutInfo = ref({
  name: '',
  surname: '',
  location: '',
  email: '',
  description: '',
})
const socialLinks = ref({
  github: '',
  linkedin: '',
  twitter: '',
  instagram: '',
  facebook: '',
  youtube: '',
})

const aboutRef = doc(db, 'about', 'aboutInfo')
const socialRef = doc(db, 'about', 'socialLinks')

onMounted(async () => {
  const [aboutSnap, socialSnap] = await Promise.all([getDoc(aboutRef), getDoc(socialRef)])

  if (aboutSnap.exists()) {
    aboutInfo.value = aboutSnap.data()
  }

  if (socialSnap.exists()) {
    socialLinks.value = socialSnap.data()
  }
})
const showPopup = ref(false)
async function saveChanges() {
  await updateDoc(aboutRef, aboutInfo.value)
  await updateDoc(socialRef, socialLinks.value)
  showPopup.value = true
}
</script>
