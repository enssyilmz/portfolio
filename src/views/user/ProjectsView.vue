<template>
  <section
    class="min-h-screen flex flex-col justify-center items-start gap-4 overflow-y-hidden overflow-x-hidden"
  >
    <div v-if="!projectsList" class="flex flex-col items-center justify-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-web"></div>
      <p class="mt-4 text-lg text-gray-600">Projeler yükleniyor...</p>
    </div>

    <div v-else class="w-full">
      <!-- Header with title and navigation -->
      <div class="flex justify-between items-center mb-10">
        <h1
          ref="mainTitle"
          :class="[
            'text-3xl md:text-5xl font-bold transition-all duration-700 ease-out',
            mainTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ]"
        >
          PROJELER
        </h1>

        <!-- Navigation Buttons -->
        <div class="flex gap-3">
          <!-- Left Navigation Button -->
          <button
            v-if="currentPage > 0"
            @click="previousPage"
            class="rounded-full p-3 shadow-lg transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Right Navigation Button -->
          <button
            v-if="currentPage < totalPages - 1"
            @click="nextPage"
            class="rounded-full p-3 shadow-lg transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Carousel Container -->
      <div class="relative">

        <!-- Projects Grid - 2 per page stacked vertically -->
        <div class="grid grid-cols-1 gap-5">
          <div
            v-for="(project, index) in visibleProjects"
            :key="project.id"
            :ref="el => { if (el) projectCards[index] = el }"
            :class="[
              'border p-6 rounded-lg bg-white shadow-lg transition-all duration-700 ease-out',
              visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
            ]"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <div class="flex flex-col justify-between h-full">
              <div>
                <div class="flex items-center justify-between mb-1">
                  <h2 class="text-2xl font-bold text-gray-800">{{ project.title }}</h2>
                  <span class="text-sm text-gray-500">{{ project.date }}</span>
                </div>

                <p class="text-gray-600 mb-4">{{ project.description }}</p>

                <div class="mb-1">
                  <span class="font-semibold text-orange-web">Kullanılan Teknolojiler: </span>
                  <span class="text-gray-600">{{ project.technologies }}</span>
                </div>
              </div>

              <div v-if="project.url" class="flex justify-center mt-1">
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

        <!-- Page Indicators -->
        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="goToPage(page - 1)"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-300',
              currentPage === page - 1 ? 'bg-orange-web w-8' : 'bg-gray-300 hover:bg-gray-400'
            ]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import { useIntersectionObserver } from '@vueuse/core'

const projectsList = ref(null)
const mainTitle = ref(null)
const projectCards = ref([])
const mainTitleVisible = ref(false)
const visibleCards = ref([])
const currentPage = ref(0)
const projectsPerPage = 2

// Toplam sayfa sayısı
const totalPages = computed(() => {
  if (!projectsList.value) return 0
  return Math.ceil(projectsList.value.length / projectsPerPage)
})

// Görünür projeler (mevcut sayfadaki)
const visibleProjects = computed(() => {
  if (!projectsList.value) return []
  const start = currentPage.value * projectsPerPage
  const end = start + projectsPerPage
  return projectsList.value.slice(start, end)
})

// Başlık için intersection observer
useIntersectionObserver(
  mainTitle,
  ([{ isIntersecting }]) => {
    mainTitleVisible.value = isIntersecting
  },
  { threshold: 0.3 }
)

// Sayfa değiştiğinde animasyonları tetikle
watch(currentPage, () => {
  // Önce tüm kartları gizle
  visibleCards.value = []

  // Kısa gecikme sonrası göster
  setTimeout(() => {
    visibleProjects.value.forEach((_, index) => {
      setTimeout(() => {
        visibleCards.value[index] = true
      }, index * 100)
    })
  }, 50)
})

// Projeler yüklendikten sonra ilk kartları göster
watch(projectsList, (newProjects) => {
  if (newProjects) {
    setTimeout(() => {
      visibleProjects.value.forEach((_, index) => {
        setTimeout(() => {
          visibleCards.value[index] = true
        }, index * 100)
      })
    }, 100)
  }
})

// Navigation functions
const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++
  }
}

const previousPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}

const goToPage = (page) => {
  currentPage.value = page
}

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
