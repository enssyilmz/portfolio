<template>
  <section
    id="projeler"
    class="min-h-screen flex flex-col justify-center items-start gap-4 overflow-y-hidden overflow-x-hidden"
  >
    <div v-if="!projectsList" class="flex flex-col items-center justify-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-web"></div>
      <p class="mt-4 text-lg text-gray-600">Projeler yükleniyor...</p>
    </div>

    <div v-else class="w-full">
      <h1
        ref="mainTitle"
        :class="[
          'text-3xl md:text-5xl font-bold mb-10 transition-all duration-700 ease-out',
          mainTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        PROJELER
      </h1>

      <div class="space-y-8">
        <div
          v-for="(project, index) in projectsList"
          :key="index"
          :ref="el => { if (el) projectCards[index] = el }"
          :class="[
            'border p-6 rounded-lg bg-white shadow-lg transition-all duration-700 ease-out',
            visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          ]"
        >
          <div class="flex flex-col md:flex-row justify-between items-start gap-4">
            <div class="flex-1">
              <div class="flex items-center justify-between mb-2">
                <h2 class="text-2xl font-bold text-gray-800">{{ project.title }}</h2>
                <span class="text-sm text-gray-500">{{ project.date }}</span>
              </div>

              <p class="text-gray-600 mb-4">{{ project.description }}</p>

              <div class="mb-3">
                <span class="font-semibold text-orange-web">Kullanılan Teknolojiler: </span>
                <span class="text-gray-600">{{ project.technologies }}</span>
              </div>

              <div v-if="project.url" class="flex justify-center">
                <a
                  :href="project.url"
                  target="_blank"
                  class="btn px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Projeyi Görüntüle
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import { useIntersectionObserver } from '@vueuse/core'

const projectsList = ref(null)
const mainTitle = ref(null)
const projectCards = ref([])
const mainTitleVisible = ref(false)
const visibleCards = ref([])

// Başlık için intersection observer (her seferinde animasyon)
useIntersectionObserver(
  mainTitle,
  ([{ isIntersecting }]) => {
    mainTitleVisible.value = isIntersecting
  },
  { threshold: 0.3 }
)

// Projeler yüklendikten sonra her kart için observer ekle
watch(projectsList, (newProjects) => {
  if (newProjects) {
    // Her kart için observer ekle
    newProjects.forEach((_, index) => {
      visibleCards.value[index] = false

      // Küçük bir gecikme ile observer'ları kur
      setTimeout(() => {
        const card = projectCards.value[index]
        if (card) {
          useIntersectionObserver(
            () => card,
            ([{ isIntersecting }]) => {
              // Her scroll'da animasyonu tekrarla
              visibleCards.value[index] = isIntersecting
            },
            { threshold: 0.2 }
          )
        }
      }, 100)
    })
  }
})

onMounted(async () => {
  try {
    const projectsRef = collection(db, 'projects')
    const q = query(projectsRef, orderBy('order', 'asc'))
    const querySnapshot = await getDocs(q)

    projectsList.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error('Projeler yüklenirken hata:', error)
  }
})
</script>
