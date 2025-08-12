<template>
  <section
    v-if="skillsList"
    id="beceriler"
    class="min-h-screen flex flex-col justify-center gap-4 overflow-x-hidden"
  >
    <h1
      ref="mainTitle"
      :class="[
        'text-5xl font-bold mb-6 transition-all duration-1000 ease-out',
        mainTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
      ]"
    >
      BECERİLERİM
    </h1>

    <div class="grid md:grid-cols-3 gap-8">
      <div
        ref="firstField"
        :class="[
          'transition-all duration-1000 ease-out delay-200',
          firstFieldVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10',
        ]"
      >
        <h2 class="text-2xl mb-3 font-semibold text-gray-800">Programlama Dilleri</h2>
        <ul class="list-disc list-inside font-semibold text-paynes-gray space-y-1">
          <li v-for="(lang, i) in skillsList?.programmingLanguages" :key="i">{{ lang }}</li>
        </ul>
      </div>

      <div
        ref="secondField"
        :class="[
          'transition-all duration-1000 ease-out delay-200',
          secondFieldVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-y-10',
        ]"
      >
        <h2 class="text-2xl font-semibold mb-3 text-gray-800">Web Geliştirme</h2>
        <ul class="list-disc list-inside font-semibold text-paynes-gray space-y-1">
          <li v-for="(lang, i) in skillsList?.webDevelopment" :key="i">{{ lang }}</li>
        </ul>
      </div>

      <div
        ref="thirdField"
        :class="[
          'transition-all duration-1000 ease-out delay-200',
          thirdFieldVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10',
        ]"
      >
        <h2 class="text-2xl font-semibold mb-3 text-gray-800">Backend & Veritabanı</h2>
        <ul class="list-disc list-inside font-semibold text-paynes-gray space-y-1">
          <li v-for="(lang, i) in skillsList?.backendAndDatabase" :key="i">{{ lang }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const skillsList = ref(null)

const mainTitle = ref(false)
const firstField = ref(false)
const secondField = ref(false)
const thirdField = ref(false)

const mainTitleVisible = ref(false)
const firstFieldVisible = ref(false)
const secondFieldVisible = ref(false)
const thirdFieldVisible = ref(false)

useIntersectionObserver(
  mainTitle,
  ([{ isIntersecting }]) => {
    mainTitleVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)
useIntersectionObserver(
  firstField,
  ([{ isIntersecting }]) => {
    firstFieldVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)
useIntersectionObserver(
  secondField,
  ([{ isIntersecting }]) => {
    secondFieldVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)
useIntersectionObserver(
  thirdField,
  ([{ isIntersecting }]) => {
    thirdFieldVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)
onMounted(async () => {
  const skillsRef = doc(db, 'skills', 'skillsList')
  const [skillsSnap] = await Promise.all([getDoc(skillsRef)])

  if (skillsSnap.exists()) {
    skillsList.value = skillsSnap.data()
  }
})
</script>
