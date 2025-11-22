<template>
  <section id="projeler" class="min-h-screen flex flex-col justify-center gap-6 p-4">
    <BasePopup v-model="showPopup" :message="popupMessage" :duration="3000" />
    <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold ">Projeler Bölümünü Düzenle</h1>

    <div class="space-y-6">
      <!-- Her Proje -->
      <div
        v-for="(project, index) in projectsList"
        :key="index"
        class="border p-6 rounded-lg bg-white shadow-lg"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">Proje {{ index + 1 }}</h2>
          <button
            @click="removeProject(index)"
            class="px-3 py-2 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 bg-red-500 hover:bg-red-600 text-xs sm:text-sm md:text-sm lg:text-base"
          >
            Sil
          </button>
        </div>

        <div class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs sm:text-sm md:text-sm lg:text-base font-medium mb-2">Proje Adı</label>
              <input
                v-model="project.title"
                type="text"
                placeholder="Örn: Forever Elite"
                class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-web text-sm sm:text-base md:text-base lg:text-lg"
              />
            </div>

            <div>
              <label class="block text-xs sm:text-sm md:text-sm lg:text-base font-medium mb-2">Tarih</label>
              <input
                v-model="project.date"
                type="text"
                placeholder="Örn: Ağu 2025 - Eyl 2025"
                class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-web text-sm sm:text-base md:text-base lg:text-lg"
              />
            </div>
          </div>

          <div>
            <label class="block text-xs sm:text-sm md:text-sm lg:text-base font-medium mb-2">Açıklama</label>
            <textarea
              v-model="project.description"
              rows="3"
              placeholder="Proje açıklaması..."
              class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-web text-sm sm:text-base md:text-base lg:text-lg"
            ></textarea>
          </div>

          <div>
            <label class="block text-xs sm:text-sm md:text-sm lg:text-base font-medium mb-2">Kullanılan Teknolojiler</label>
            <input
              v-model="project.technologies"
              type="text"
              placeholder="Örn: Next.js, React, TypeScript, Tailwind CSS"
              class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-web text-sm sm:text-base md:text-base lg:text-lg"
            />
          </div>

          <div>
            <label class="block text-xs sm:text-sm md:text-sm lg:text-base font-medium mb-2">Proje URL (Opsiyonel)</label>
            <input
              v-model="project.url"
              type="text"
              placeholder="Örn: https://foreverelite.co.uk"
              class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-web text-sm sm:text-base md:text-base lg:text-lg"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Butonlar -->
    <div class="flex flex-col md:flex-row justify-center gap-4">
      <button
        @click="addProject"
        class="px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3 lg:px-6 lg:py-3 bg-green-500 hover:bg-green-600 text-sm sm:text-base md:text-base lg:text-lg"
      >
        + Yeni Proje Ekle
      </button>
      <button
        @click="saveChanges"
        class="px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3 lg:px-6 lg:py-3 hover:text-white text-sm sm:text-base md:text-base lg:text-lg"
      >
        Değişiklikleri Kaydet
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import BasePopup from '@/components/BasePopup.vue'

const showPopup = ref(false)
const popupMessage = ref('')
const projectsList = ref([])

// Firebase'den projeleri yükle
onMounted(async () => {
  try {
    const projectsRef = collection(db, 'projects')
    const querySnapshot = await getDocs(projectsRef)

    projectsList.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    // Sırala
    projectsList.value.sort((a, b) => (a.order || 0) - (b.order || 0))
  } catch (error) {
    console.error('Projeler yüklenirken hata:', error)
  }
})

// Yeni proje ekle
function addProject() {
  projectsList.value.push({
    title: '',
    date: '',
    description: '',
    technologies: '',
    url: '',
    order: projectsList.value.length + 1,
  })
}

// Proje sil
function removeProject(index) {
  projectsList.value.splice(index, 1)
}


// Değişiklikleri kaydet
async function saveChanges() {
  try {
    // Önce tüm mevcut projeleri sil
    const projectsRef = collection(db, 'projects')
    const querySnapshot = await getDocs(projectsRef)

    for (const docSnap of querySnapshot.docs) {
      await deleteDoc(doc(db, 'projects', docSnap.id))
    }

    // Yeni projeleri ekle
    for (let i = 0; i < projectsList.value.length; i++) {
      const project = projectsList.value[i]

      // Boş olanları kaydetme
      if (!project.title || !project.description) continue

      const projectDoc = {
        title: project.title,
        date: project.date,
        description: project.description,
        technologies: project.technologies,
        url: project.url || '',
        order: project.order || i + 1,
      }

      await setDoc(doc(db, 'projects', `project_${i + 1}`), projectDoc)
    }

    popupMessage.value = 'Projeler başarıyla güncellendi!'
    showPopup.value = true
  } catch (error) {
    console.error('Kaydetme hatası:', error)
    popupMessage.value = 'Kaydetme sırasında hata oluştu!'
    showPopup.value = true
  }
}
</script>
