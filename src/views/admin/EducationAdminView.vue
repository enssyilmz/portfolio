<template>
  <section id="egitim" class="min-h-screen flex flex-col justify-center gap-4">
    <BasePopup
      v-model="showPopup"
      :message="'Eğitim Hayatım Bölümü Güncellendi!'"
      :duration="3000"
    />
    <h1 class="text-3xl md:text-5xl font-bold">Eğitim Hayatım Bölümünü Düzenle</h1>
    <h2 class="text-xl md:text-2xl font-bold mt-4">İlk Üniversite</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="firstUniversity" class="text-sm md:text-base font-medium">Üniversite Adı</label>
      <input
        id="firstUniversity"
        v-model="educationInfo.firstUniversity"
        class="input"
        placeholder="Üniversite Adı"
      />

      <label for="firstUniversityDate" class="text-sm md:text-base font-medium">Üniversite Tarihi</label>
      <input
        id="firstUniversityDate"
        v-model="educationInfo.firstUniversityDate"
        class="input"
        placeholder="Üniversite Tarihi"
      />
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="firstUniversityDegree" class="text-sm md:text-base font-medium">Diploma Türü</label>
      <input
        id="firstUniversityDegree"
        v-model="educationInfo.firstUniversityDegree"
        class="input"
        placeholder="Diploma Türü"
      />

      <label for="firstUniversityDepartment" class="text-sm md:text-base font-medium">Üniversite Bölüm</label>
      <input
        id="firstUniversityDepartment"
        v-model="educationInfo.firstUniversityDepartment"
        class="input"
        placeholder="Üniversite Bölüm"
      />
    </div>
    <h2 class="text-xl md:text-2xl font-bold mt-4">İkinci Üniversite</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="secondUniversity" class="text-sm md:text-base font-medium">Üniversite Adı</label>
      <input
        id="secondUniversity"
        v-model="educationInfo.secondUniversity"
        class="input"
        placeholder="Üniversite Adı"
      />

      <label for="secondUniversityDate" class="text-sm md:text-base font-medium">Üniversite Tarihi</label>
      <input
        id="secondUniversityDate"
        v-model="educationInfo.secondUniversityDate"
        class="input"
        placeholder="Üniversite Tarihi"
      />
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="secondUniversityDegree" class="text-sm md:text-base font-medium">Diploma Türü</label>
      <input
        id="secondUniversityDegree"
        v-model="educationInfo.secondUniversityDegree"
        class="input"
        placeholder="Diploma Türü"
      />

      <label for="secondUniversityDepartment" class="text-sm md:text-base font-medium">Üniversite Bölüm</label>
      <input
        id="secondUniversityDepartment"
        v-model="educationInfo.secondUniversityDepartment"
        class="input"
        placeholder="Üniversite Bölüm"
      />
    </div>
    <div id="button" class="flex justify-center">
      <button @click="saveChanges" class="btn px-4 py-2 rounded-lg">
        Eğitim Hayatım Bölümünü Kaydet
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import BasePopup from '@/components/BasePopup.vue'

const educationInfo = ref({
  firstUniversity: '',
  firstUniversityDate: '',
  firstUniversityDegree: '',
  firstUniversityDepartment: '',
  secondUniversity: '',
  secondUniversityDate: '',
  secondUniversityDegree: '',
  secondUniversityDepartment: '',
})
const educationInfoRef = doc(db, 'education', 'educationInfo')
onMounted(async () => {
  const [aboutSnap] = await Promise.all([getDoc(educationInfoRef)])

  if (aboutSnap.exists()) {
    educationInfo.value = aboutSnap.data()
  }
})
const showPopup = ref(false)
async function saveChanges() {
  await updateDoc(educationInfoRef, educationInfo.value)
  showPopup.value = true
}
</script>
