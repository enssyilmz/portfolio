<template>
  <section
    v-if="educationInfo"
    id="egitim"
    class="min-h-screen flex flex-col justify-center items-start gap-4 overflow-x-hidden"
  >
    <h1
      ref="mainTitle"
      :class="[
        'text-5xl font-bold transition-all duration-1000 ease-out',
        mainTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
      ]"
    >
      EĞİTİM HAYATIM
    </h1>
    <br />
    <div
      ref="firstEducation"
      :class="[
        'w-full transition-all duration-1000 ease-out delay-200',
        firstEduVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10',
      ]"
    >
      <div class="flex items-center justify-between w-full">
        <h1 class="text-xl font-semibold text-gray-800">{{ educationInfo?.firstUniversity }}</h1>
        <span class="text-sm">{{ educationInfo?.firstUniversityDate }}</span>
      </div>
      <h2 class="text-xl font-semibold text-paynes-gray mt-1">
        {{ educationInfo?.firstUniversityDepartment }}
      </h2>
      <p class="text-xl text-charcoal">{{ educationInfo?.firstUniversityDegree }}</p>
    </div>
    <br />
    <div
      ref="secondEducation"
      :class="[
        'w-full transition-all duration-1000 ease-out delay-400',
        secondEduVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10',
      ]"
    >
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
import { useIntersectionObserver } from '@vueuse/core'

const educationInfo = ref(null)

const mainTitle = ref(null)
const firstEducation = ref(null)
const secondEducation = ref(null)

const mainTitleVisible = ref(false)
const firstEduVisible = ref(false)
const secondEduVisible = ref(false)

useIntersectionObserver(
  mainTitle,
  ([{ isIntersecting }]) => {
    mainTitleVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)

useIntersectionObserver(
  firstEducation,
  ([{ isIntersecting }]) => {
    firstEduVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)

useIntersectionObserver(
  secondEducation,
  ([{ isIntersecting }]) => {
    secondEduVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)

onMounted(async () => {
  const educationRef = doc(db, 'education', 'educationInfo')
  const [educationSnap] = await Promise.all([getDoc(educationRef)])

  if (educationSnap.exists()) {
    educationInfo.value = educationSnap.data()
  }
})
</script>
