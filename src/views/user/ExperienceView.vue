<template>
  <section id="deneyimler" class="min-h-screen flex flex-col justify-center items-start gap-4">
    <h1 class="text-5xl font-bold text-gray-800">DENEYİMLERİM</h1>
    <br />
    <div class="flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <h1 class="text-xl font-semibold text-gray-800">
          {{ experienceInfo?.firstCompany }}
        </h1>
        <span class="text-sm">{{ experienceInfo?.firstCompanyDate }}</span>
      </div>
      <h2 class="text-xl font-semibold text-gray-500">{{ experienceInfo?.firstCompanyType }}</h2>
      <p class="text-lg text-gray-600">
        {{ experienceInfo?.firstCompanyDescription }}
      </p>
    </div>
    <br />
    <div class="flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <h1 class="text-xl font-semibold text-gray-800">{{ experienceInfo?.secondCompany }}</h1>
        <span class="text-sm">{{ experienceInfo?.secondCompanyDate }}</span>
      </div>
      <h2 class="text-xl font-semibold text-gray-500">{{ experienceInfo?.secondCompanyType }}</h2>
      <p class="text-lg text-gray-600">
        {{ experienceInfo?.secondCompanyDescription }}
      </p>
    </div>
  </section>
</template>
<script setup>
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import { ref, onMounted } from 'vue'

const experienceInfo = ref(null)

onMounted(async () => {
  const experienceRef = doc(db, 'experience', 'experienceInfo')
  const [experienceSnap] = await Promise.all([getDoc(experienceRef)])

  if (experienceSnap.exists()) {
    experienceInfo.value = experienceSnap.data()
  }
})
</script>
