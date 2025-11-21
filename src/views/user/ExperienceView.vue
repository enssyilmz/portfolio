<template>
  <section
    id="deneyimler"
    class="min-h-screen flex flex-col justify-center items-start gap-4 overflow-x-hidden"
  >
    <div v-if="!experienceInfo" class="flex flex-col items-center justify-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-web"></div>
      <p class="mt-4 text-lg text-gray-600">Deneyimler yükleniyor...</p>
    </div>

    <div v-else class="w-full">
      <h1
        ref="mainTitle"
        :class="[
          'text-3xl md:text-5xl font-bold transition-all duration-1000 ease-out',
          mainTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        ]"
      >
        DENEYİMLERİM
      </h1>
    <br />
    <div
      ref="firstExperience"
      :class="[
        'flex flex-col gap-2 transition-all duration-1000 ease-out delay-200 border p-4 rounded-lg bg-white shadow',
        firstExpVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10',
      ]"
    >
      <div class="flex justify-between items-center w-full">
        <h1 class="text-lg md:text-xl font-semibold text-gray-800">
          {{ experienceInfo?.firstCompany }}
        </h1>
        <span class="text-xs md:text-sm">{{ experienceInfo?.firstCompanyDate }}</span>
      </div>
      <h2 class="text-lg md:text-xl font-semibold text-gray-500">{{ experienceInfo?.firstCompanyType }}</h2>
      <p class="text-base md:text-lg text-gray-600">
        {{ experienceInfo?.firstCompanyDescription }}
      </p>
    </div>
    <br />
    <div
      ref="secondExperience"
      :class="[
        'flex flex-col gap-2 transition-all duration-1000 ease-out delay-400 border p-4 rounded-lg bg-white shadow',
        secondExpVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10',
      ]"
    >
      <div class="flex justify-between items-center">
        <h1 class="text-lg md:text-xl font-semibold text-gray-800">{{ experienceInfo?.secondCompany }}</h1>
        <span class="text-xs md:text-sm">{{ experienceInfo?.secondCompanyDate }}</span>
      </div>
      <h2 class="text-lg md:text-xl font-semibold text-gray-500">{{ experienceInfo?.secondCompanyType }}</h2>
      <p class="text-base md:text-lg text-gray-600">
        {{ experienceInfo?.secondCompanyDescription }}
      </p>
    </div>
    </div>
  </section>
</template>
<script setup>
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const experienceInfo = ref(null)

const mainTitle = ref(false)
const firstExperience = ref(false)
const secondExperience = ref(false)

const mainTitleVisible = ref(false)
const firstExpVisible = ref(false)
const secondExpVisible = ref(false)

useIntersectionObserver(
  mainTitle,
  ([{ isIntersecting }]) => {
    mainTitleVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)

useIntersectionObserver(
  firstExperience,
  ([{ isIntersecting }]) => {
    firstExpVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)

useIntersectionObserver(
  secondExperience,
  ([{ isIntersecting }]) => {
    secondExpVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)

onMounted(async () => {
  const experienceRef = doc(db, 'experience', 'experienceInfo')
  const [experienceSnap] = await Promise.all([getDoc(experienceRef)])

  if (experienceSnap.exists()) {
    experienceInfo.value = experienceSnap.data()
  }
})
</script>
