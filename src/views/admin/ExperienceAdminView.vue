<template>
  <section id="deneyimler" class="min-h-screen flex flex-col justify-center gap-4">
    <BasePopup v-model="showPopup" :message="'Deneyimler Bölümü Güncellendi!'" :duration="3000" />
    <h1 class="text-3xl font-bold">Deneyimler Bölümünü Düzenle</h1>
    <h2 class="text-xl font-bold mt-4">İlk Şirket</h2>
    <div class="grid grid-cols-2 md:grid-cols-6 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="firstCompany">Şirket Adı</label>
      <input
        id="firstCompany"
        v-model="experienceInfo.firstCompany"
        class="input"
        placeholder="Şirket Adı"
      />

      <label for="firstCompanyDate">Şirket Tarihi</label>
      <input
        id="firstCompanyDate"
        v-model="experienceInfo.firstCompanyDate"
        class="input"
        placeholder="Şirket Tarihi"
      />

      <label for="firstCompanyType">Pozisyon</label>
      <input
        id="firstCompanyType"
        v-model="experienceInfo.firstCompanyType"
        class="input"
        placeholder="Pozisyon"
      />
    </div>

    <div class="grid grid-cols-1 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="firstCompanyDescription">Açıklama</label>
      <textarea
        id="firstCompanyDescription"
        v-model="experienceInfo.firstCompanyDescription"
        class="textarea"
        placeholder="Açıklama"
      ></textarea>
    </div>
    <h2 class="text-xl font-bold mt-4">İkinci Şirket</h2>
    <div class="grid grid-cols-2 md:grid-cols-6 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="secondCompany">Şirket Adı</label>
      <input
        id="secondCompany"
        v-model="experienceInfo.secondCompany"
        class="input"
        placeholder="Şirket Adı"
      />

      <label for="secondCompanyDate">Şirket Tarihi</label>
      <input
        id="secondCompanyDate"
        v-model="experienceInfo.secondCompanyDate"
        class="input"
        placeholder="Şirket Tarihi"
      />

      <label for="secondCompanyType">Pozisyon</label>
      <input
        id="secondCompanyType"
        v-model="experienceInfo.secondCompanyType"
        class="input"
        placeholder="Pozisyon"
      />
    </div>

    <div class="grid grid-cols-1 gap-4 border p-4 rounded-lg bg-white shadow">
      <label for="secondCompanyDescription">Açıklama</label>
      <textarea
        id="secondCompanyDescription"
        v-model="experienceInfo.secondCompanyDescription"
        class="textarea"
        placeholder="Açıklama"
      ></textarea>
    </div>
    <div id="button" class="flex justify-center">
      <button @click="saveChanges" class="btn px-4 py-2 rounded-lg">
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
