<template>
  <section id="beceriler" class="min-h-screen flex flex-col justify-center gap-4">
    <BasePopup v-model="showPopup" :message="'Yetenekler Güncellendi!'" :duration="3000" />
    <h1 class="text-3xl md:text-5xl font-bold">Beceriler Bölümünü Düzenle</h1>

    <div class="grid grid-cols-2 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="programmingLanguages" class="text-sm md:text-base font-medium">Programlama Dilleri</label>
      <textarea
        id="programmingLanguages"
        v-model="skillsList.programmingLanguagesText"
        class="textarea"
        placeholder="Virgül ile ayırarak yazın: JavaScript, TypeScript, Python"
      ></textarea>
    </div>

    <div class="grid grid-cols-2 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="webDevelopment" class="text-sm md:text-base font-medium">Web Geliştirme</label>
      <textarea
        id="webDevelopment"
        v-model="skillsList.webDevelopmentText"
        class="textarea"
        placeholder="Virgül ile ayırarak yazın: Vue.js, React, TailwindCSS"
      ></textarea>
    </div>

    <div class="grid grid-cols-2 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="backendAndDatabase" class="text-sm md:text-base font-medium">Backend & Veritabanı</label>
      <textarea
        id="backendAndDatabase"
        v-model="skillsList.backendAndDatabaseText"
        class="textarea"
        placeholder="Virgül ile ayırarak yazın: Node.js, Firebase, Supabase"
      ></textarea>
    </div>

    <div class="flex justify-center">
      <button @click="saveChanges" class="btn px-4 py-2 rounded-lg">
        Beceriler Bölümünü Kaydet
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import BasePopup from '@/components/BasePopup.vue'

const showPopup = ref(false)

const skillsDocRef = doc(db, 'skills', 'skillsList')

const skillsList = ref({
  programmingLanguagesText: '',
  webDevelopmentText: '',
  backendAndDatabaseText: '',
})

// On mount, fetch from Firebase
onMounted(async () => {
  const snapshot = await getDoc(skillsDocRef)
  if (snapshot.exists()) {
    const data = snapshot.data()
    skillsList.value.programmingLanguagesText = data.programmingLanguages?.join(', ') || ''
    skillsList.value.webDevelopmentText = data.webDevelopment?.join(', ') || ''
    skillsList.value.backendAndDatabaseText = data.backendAndDatabase?.join(', ') || ''
  }
})

async function saveChanges() {
  const updatedData = {
    programmingLanguages: skillsList.value.programmingLanguagesText
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item),
    webDevelopment: skillsList.value.webDevelopmentText
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item),
    backendAndDatabase: skillsList.value.backendAndDatabaseText
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item),
  }

  await updateDoc(skillsDocRef, updatedData)
  showPopup.value = true
}
</script>
