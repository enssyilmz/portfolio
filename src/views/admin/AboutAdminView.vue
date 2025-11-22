<template>
  <section id="hakkimda" class="min-h-screen flex flex-col justify-center gap-4">
    <BasePopup v-model="showPopup" :message="'Hakkımda Bölümü Güncellendi!'" :duration="3000" />
    <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">Hakkımda Bölümünü Düzenle</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="name" class="text-xs sm:text-sm md:text-sm lg:text-base font-medium">Ad</label>
      <input id="name" v-model="aboutInfo.name" class="input text-sm sm:text-base md:text-base lg:text-lg" placeholder="Ad" />

      <label for="surname" class="text-xs sm:text-sm md:text-sm lg:text-base font-medium">Soyad</label>
      <input id="surname" v-model="aboutInfo.surname" class="input text-sm sm:text-base md:text-base lg:text-lg" placeholder="Soyad" />
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="location" class="text-xs sm:text-sm md:text-sm lg:text-base font-medium">Konum</label>
      <input id="location" v-model="aboutInfo.location" class="input text-sm sm:text-base md:text-base lg:text-lg" placeholder="Konum" />

      <label for="email" class="text-xs sm:text-sm md:text-sm lg:text-base font-medium">Email</label>
      <input id="email" v-model="aboutInfo.email" class="input text-sm sm:text-base md:text-base lg:text-lg" placeholder="E-posta" />
    </div>

    <div class="grid grid-cols-1 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="description" class="text-xs sm:text-sm md:text-sm lg:text-base font-medium">Açıklama</label>
      <textarea
        id="description"
        v-model="aboutInfo.description"
        class="textarea text-sm sm:text-base md:text-base lg:text-lg"
        placeholder="Açıklama"
      ></textarea>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="github" class="col-span-2 md:col-span-4 text-xs sm:text-sm md:text-sm lg:text-base font-medium">Bağlantılar</label>

      <font-awesome-icon :icon="['fab', 'github']" class="text-lg sm:text-xl md:text-xl lg:text-2xl" />
      <input id="github" v-model="socialLinks.github" class="input text-sm sm:text-base md:text-base lg:text-lg" placeholder="GitHub Linki" />

      <font-awesome-icon :icon="['fab', 'linkedin']" class="text-lg sm:text-xl md:text-xl lg:text-2xl" />
      <input
        id="linkedin"
        v-model="socialLinks.linkedin"
        class="input text-sm sm:text-base md:text-base lg:text-lg"
        placeholder="LinkedIn Linki"
      />

      <font-awesome-icon :icon="['fab', 'x-twitter']" class="text-lg sm:text-xl md:text-xl lg:text-2xl" />
      <input id="twitter" v-model="socialLinks.twitter" class="input text-sm sm:text-base md:text-base lg:text-lg" placeholder="Twitter Linki" />

      <font-awesome-icon :icon="['fab', 'instagram']" class="text-lg sm:text-xl md:text-xl lg:text-2xl" />
      <input
        id="instagram"
        v-model="socialLinks.instagram"
        class="input text-sm sm:text-base md:text-base lg:text-lg"
        placeholder="Instagram Linki"
      />

      <font-awesome-icon :icon="['fab', 'facebook']" class="text-lg sm:text-xl md:text-xl lg:text-2xl" />
      <input
        id="facebook"
        v-model="socialLinks.facebook"
        class="input text-sm sm:text-base md:text-base lg:text-lg"
        placeholder="Facebook Linki"
      />

      <font-awesome-icon :icon="['fab', 'youtube']" class="text-lg sm:text-xl md:text-xl lg:text-2xl" />
      <input id="youtube" v-model="socialLinks.youtube" class="input text-sm sm:text-base md:text-base lg:text-lg" placeholder="YouTube Linki" />
    </div>
    <div id="button" class="flex justify-center">
      <button @click="saveChanges" class="btn px-3 py-2 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 rounded-lg text-sm sm:text-base md:text-base lg:text-lg">
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
