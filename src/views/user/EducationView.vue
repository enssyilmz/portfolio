<template>
  <section id="egitim" class="min-h-screen flex flex-col justify-center items-start gap-4">
    <h1 class="text-5xl font-bold text-gray-800">EĞİTİM HAYATIM</h1>
    <br />
    <div class="w-full">
      <div class="flex items-center justify-between w-full">
        <h1 class="text-xl font-semibold text-gray-800">{{ educationInfo?.firstUniversity }}</h1>
        <span class="text-sm">{{ educationInfo?.firstUniversityDate }}</span>
      </div>
      <h2 class="text-xl font-semibold text-gray-500 mt-1">
        {{ educationInfo?.firstUniversityDepartment }}
      </h2>
      <p class="text-xl text-gray-600">{{ educationInfo?.firstUniversityDegree }}</p>
    </div>
    <br />
    <div class="w-full">
      <div class="flex items-center justify-between w-full">
        <h1 class="text-xl font-semibold text-gray-800">{{ educationInfo?.secondUniversity }}</h1>
        <span class="text-sm"> {{ educationInfo?.secondUniversityDate }}</span>
      </div>
      <h2 class="text-xl font-semibold text-gray-500 mt-1">
        {{ educationInfo?.secondUniversityDepartment }}
      </h2>
      <p class="text-xl text-gray-600">{{ educationInfo?.secondUniversityDegree }}</p>
    </div>
  </section>
</template>
<script setup>
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import { ref, onMounted } from 'vue'

const educationInfo = ref(null)

onMounted(async () => {
  const educationRef = doc(db, 'education', 'educationInfo')
  const [educationSnap] = await Promise.all([getDoc(educationRef)])

  if (educationSnap.exists()) {
    educationInfo.value = educationSnap.data()
  }
})
</script>
