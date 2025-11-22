<template>
  <section
    class="min-h-screen flex flex-col justify-center items-start gap-4 overflow-x-hidden"
  >
    <div v-if="!skillsList" class="flex flex-col items-center justify-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-web"></div>
      <p class="mt-4 text-lg text-gray-600">Beceriler yükleniyor...</p>
    </div>

    <div v-else class="w-full">
      <h1
        ref="mainTitle"
        :class="[
          'text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-6 transition-all duration-1000 ease-out',
          mainTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        ]"
      >
        BECERİLERİM
      </h1>

      <div class="flex flex-col gap-10">
        <div
          ref="firstField"
          :class="[
            'transition-all duration-800 ease-out border p-4 rounded-lg bg-white shadow',
            firstFieldVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          ]"
        >
          <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 font-semibold text-gray-800 ">
            Programlama Dilleri
          </h2>
          <div class="flex flex-row flex-wrap gap-4">
            <div
              v-for="(skill, index) in skillsList?.programmingLanguages"
              :key="index"
              :class="[
                'transition-all duration-500 ease-out',
                firstFieldVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75',
              ]"
              :style="{ transitionDelay: `${index * 80 + 200}ms` }"
            >
              <Icon :icon="skill.icon" class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
            </div>
          </div>
        </div>

        <div
          ref="secondField"
          :class="[
            'transition-all duration-800 ease-out delay-100 border p-4 rounded-lg bg-white shadow',
            secondFieldVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          ]"
        >
          <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            Web Geliştirme
          </h2>
          <div class="flex flex-row flex-wrap gap-4">
            <div
              v-for="(skill, index) in skillsList?.webDevelopment"
              :key="index"
              :class="[
                'transition-all duration-500 ease-out',
                secondFieldVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75',
              ]"
              :style="{ transitionDelay: `${index * 80 + 200}ms` }"
            >
              <Icon :icon="skill.icon" class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
            </div>
          </div>
        </div>

        <div
          ref="thirdField"
          :class="[
            'transition-all duration-800 ease-out delay-200 border p-4 rounded-lg bg-white shadow',
            thirdFieldVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          ]"
        >
          <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            Backend & Veritabanı
          </h2>
          <div class="flex flex-row flex-wrap gap-4">
            <div
              v-for="(skill, index) in skillsList?.backendAndDatabase"
              :key="index"
              :class="[
                'transition-all duration-500 ease-out',
                thirdFieldVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75',
              ]"
              :style="{ transitionDelay: `${index * 80 + 200}ms` }"
            >
              <Icon :icon="skill.icon" class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
            </div>
          </div>
        </div>

        <div
          ref="fourthField"
          :class="[
            'transition-all duration-800 ease-out delay-300 border p-4 rounded-lg bg-white shadow',
            fourthFieldVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          ]"
        >
          <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-800">
            DevOps & Tools
          </h2>
          <div class="flex flex-row flex-wrap gap-4">
            <div
              v-for="(skill, index) in skillsList?.devopsAndTools"
              :key="index"
              :class="[
                'transition-all duration-500 ease-out',
                fourthFieldVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75',
              ]"
              :style="{ transitionDelay: `${index * 80 + 200}ms` }"
            >
              <Icon :icon="skill.icon" class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const skillsList = ref(null)

const mainTitle = ref(false)
const firstField = ref(false)
const secondField = ref(false)
const thirdField = ref(false)
const fourthField = ref(false)

const mainTitleVisible = ref(false)
const firstFieldVisible = ref(false)
const secondFieldVisible = ref(false)
const thirdFieldVisible = ref(false)
const fourthFieldVisible = ref(false)

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
useIntersectionObserver(
  fourthField,
  ([{ isIntersecting }]) => {
    fourthFieldVisible.value = isIntersecting
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
