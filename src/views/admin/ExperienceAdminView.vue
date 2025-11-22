<template>
  <section id="deneyimler" class="min-h-screen flex flex-col justify-center gap-4">
    <BasePopup v-model="showPopup" :message="'Deneyimler Bölümü Güncellendi!'" :duration="3000" />
    <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">Deneyimler Bölümünü Düzenle</h1>
    <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mt-4">İlk Şirket</h2>
    <div class="grid grid-cols-2 md:grid-cols-6 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="firstCompany" class="text-xs sm:text-sm md:text-sm lg:text-base font-medium">Şirket Adı</label>
      <input
        id="firstCompany"
        v-model="experienceInfo.firstCompany"
        class="input text-sm sm:text-base md:text-base lg:text-lg"
        placeholder="Şirket Adı"
      />

      <label for="firstCompanyDate" class="text-xs sm:text-sm md:text-sm lg:text-base font-medium">Şirket Tarihi</label>
      <input
        id="firstCompanyDate"
        v-model="experienceInfo.firstCompanyDate"
        class="input text-sm sm:text-base md:text-base lg:text-lg"
        placeholder="Şirket Tarihi"
      />

      <label for="firstCompanyType" class="text-xs sm:text-sm md:text-sm lg:text-base font-medium">Pozisyon</label>
      <input
        id="firstCompanyType"
        v-model="experienceInfo.firstCompanyType"
        class="input text-sm sm:text-base md:text-base lg:text-lg"
        placeholder="Pozisyon"
      />
    </div>

    <div class="grid grid-cols-1 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="firstCompanyDescription" class="text-xs sm:text-sm md:text-sm lg:text-base font-medium">Açıklama</label>
      <textarea
        id="firstCompanyDescription"
        v-model="experienceInfo.firstCompanyDescription"
        class="textarea text-sm sm:text-base md:text-base lg:text-lg"
        placeholder="Açıklama"
      ></textarea>
    </div>
    <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mt-4">İkinci Şirket</h2>
    <div class="grid grid-cols-2 md:grid-cols-6 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="secondCompany" class="text-xs sm:text-sm md:text-sm lg:text-base font-medium">Şirket Adı</label>
      <input
        id="secondCompany"
        v-model="experienceInfo.secondCompany"
        class="input text-sm sm:text-base md:text-base lg:text-lg"
        placeholder="Şirket Adı"
      />

      <label for="secondCompanyDate" class="text-xs sm:text-sm md:text-sm lg:text-base font-medium">Şirket Tarihi</label>
      <input
        id="secondCompanyDate"
        v-model="experienceInfo.secondCompanyDate"
        class="input text-sm sm:text-base md:text-base lg:text-lg"
        placeholder="Şirket Tarihi"
      />

      <label for="secondCompanyType" class="text-xs sm:text-sm md:text-sm lg:text-base font-medium">Pozisyon</label>
      <input
        id="secondCompanyType"
        v-model="experienceInfo.secondCompanyType"
        class="input text-sm sm:text-base md:text-base lg:text-lg"
        placeholder="Pozisyon"
      />
    </div>

    <div class="grid grid-cols-1 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="secondCompanyDescription" class="text-xs sm:text-sm md:text-sm lg:text-base font-medium">Açıklama</label>
      <textarea
        id="secondCompanyDescription"
        v-model="experienceInfo.secondCompanyDescription"
        class="textarea text-sm sm:text-base md:text-base lg:text-lg"
        placeholder="Açıklama"
      ></textarea>
    </div>
    <div id="button" class="flex justify-center">
      <button @click="saveChanges" class="btn px-3 py-2 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 rounded-lg text-sm sm:text-base md:text-base lg:text-lg">
        Deneyimler Bölümünü Kaydet
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import BasePopup from '@/components/BasePopup.vue'

const experienceInfo = ref({
  firstCompany: '',
  firstCompanyDate: '',
  firstCompanyDescription: '',
  firstCompanyType: '',
  secondCompany: '',
  secondCompanyDate: '',
  secondCompanyDescription: '',
  secondCompanyType: '',
})

const experienceInfoRef = doc(db, 'experience', 'experienceInfo')

onMounted(async () => {
  const [aboutSnap] = await Promise.all([getDoc(experienceInfoRef)])

  if (aboutSnap.exists()) {
    experienceInfo.value = aboutSnap.data()
  }
})

const showPopup = ref(false)
async function saveChanges() {
  await updateDoc(experienceInfoRef, experienceInfo.value)
  showPopup.value = true
}
</script>
