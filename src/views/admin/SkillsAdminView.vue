<template>
  <section id="beceriler" class="min-h-screen flex flex-col justify-center gap-6 p-4">
    <BasePopup v-model="showPopup" :message="popupMessage" :duration="3000" />
    <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">Beceriler Bölümünü Düzenle</h1>

    <!-- Programlama Dilleri -->
    <div class="border p-6 rounded-lg bg-white shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">Programlama Dilleri</h2>
        <button
          @click="addSkill('programmingLanguages')"
          class="px-3 py-2 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 bg-green-500 text-white rounded-lg text-xs sm:text-sm md:text-sm lg:text-base"
        >
          + Ekle
        </button>
      </div>
      <div class="space-y-3">
        <div
          v-for="(skill, index) in skillsList.programmingLanguages"
          :key="index"
          class="grid grid-cols-12 gap-3 items-center"
        >
          <input
            v-model="skill.name"
            type="text"
            placeholder="İsim (örn: JavaScript)"
            class="col-span-5 p-2 border rounded-lg focus:ring-2 focus:ring-orange-web text-sm sm:text-base md:text-base lg:text-lg"
          />
          <input
            v-model="skill.icon"
            type="text"
            placeholder="İkon (örn: skill-icons:javascript)"
            class="col-span-6 p-2 border rounded-lg focus:ring-2 focus:ring-orange-web text-sm sm:text-base md:text-base lg:text-lg"
          />
          <button
            @click="removeSkill('programmingLanguages', index)"
            class="col-span-1 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xs sm:text-sm"
          >
            ✕
          </button>
        </div>
      </div>
    </div>

    <!-- Web Geliştirme -->
    <div class="border p-6 rounded-lg bg-white shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">Web Geliştirme</h2>
        <button
          @click="addSkill('webDevelopment')"
          class="px-3 py-2 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 bg-green-500 text-white rounded-lg text-xs sm:text-sm md:text-sm lg:text-base"
        >
          + Ekle
        </button>
      </div>
      <div class="space-y-3">
        <div
          v-for="(skill, index) in skillsList.webDevelopment"
          :key="index"
          class="grid grid-cols-12 gap-3 items-center"
        >
          <input
            v-model="skill.name"
            type="text"
            placeholder="İsim (örn: React)"
            class="col-span-5 p-2 border rounded-lg focus:ring-2 focus:ring-orange-web text-sm sm:text-base md:text-base lg:text-lg"
          />
          <input
            v-model="skill.icon"
            type="text"
            placeholder="İkon (örn: skill-icons:react-dark)"
            class="col-span-6 p-2 border rounded-lg focus:ring-2 focus:ring-orange-web text-sm sm:text-base md:text-base lg:text-lg"
          />
          <button
            @click="removeSkill('webDevelopment', index)"
            class="col-span-1 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xs sm:text-sm"
          >
            ✕
          </button>
        </div>
      </div>
    </div>

    <!-- Backend & Veritabanı -->
    <div class="border p-6 rounded-lg bg-white shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold ">Backend & Veritabanı</h2>
        <button
          @click="addSkill('backendAndDatabase')"
          class="px-3 py-2 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 bg-green-500 text-white rounded-lg text-xs sm:text-sm md:text-sm lg:text-base"
        >
          + Ekle
        </button>
      </div>
      <div class="space-y-3">
        <div
          v-for="(skill, index) in skillsList.backendAndDatabase"
          :key="index"
          class="grid grid-cols-12 gap-3 items-center"
        >
          <input
            v-model="skill.name"
            type="text"
            placeholder="İsim (örn: Firebase)"
            class="col-span-5 p-2 border rounded-lg focus:ring-2 focus:ring-orange-web text-sm sm:text-base md:text-base lg:text-lg"
          />
          <input
            v-model="skill.icon"
            type="text"
            placeholder="İkon (örn: skill-icons:firebase)"
            class="col-span-6 p-2 border rounded-lg focus:ring-2 focus:ring-orange-web text-sm sm:text-base md:text-base lg:text-lg"
          />
          <button
            @click="removeSkill('backendAndDatabase', index)"
            class="col-span-1 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xs sm:text-sm"
          >
            ✕
          </button>
        </div>
      </div>
    </div>

    <!-- DevOps & Tools -->
    <div class="border p-6 rounded-lg bg-white shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">DevOps & Tools</h2>
        <button
          @click="addSkill('devopsAndTools')"
          class="px-3 py-2 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 bg-green-500 text-white rounded-lg text-xs sm:text-sm md:text-sm lg:text-base"
        >
          + Ekle
        </button>
      </div>
      <div class="space-y-3">
        <div
          v-for="(skill, index) in skillsList.devopsAndTools"
          :key="index"
          class="grid grid-cols-12 gap-3 items-center"
        >
          <input
            v-model="skill.name"
            type="text"
            placeholder="İsim (örn: Docker)"
            class="col-span-5 p-2 border rounded-lg focus:ring-2 focus:ring-orange-web text-sm sm:text-base md:text-base lg:text-lg"
          />
          <input
            v-model="skill.icon"
            type="text"
            placeholder="İkon (örn: skill-icons:docker)"
            class="col-span-6 p-2 border rounded-lg focus:ring-2 focus:ring-orange-web text-sm sm:text-base md:text-base lg:text-lg"
          />
          <button
            @click="removeSkill('devopsAndTools', index)"
            class="col-span-1 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xs sm:text-sm"
          >
            ✕
          </button>
        </div>
      </div>
    </div>

    <!-- Kaydet Butonu -->
    <div class="flex justify-center gap-4">
      <button
        @click="saveChanges"
        class="px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3 lg:px-6 lg:py-3 bg-orange-web text-white rounded-lg hover:bg-orange-600 font-semibold text-sm sm:text-base md:text-base lg:text-lg"
      >
        Değişiklikleri Kaydet
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import BasePopup from '@/components/BasePopup.vue'

const showPopup = ref(false)
const popupMessage = ref('')

const skillsDocRef = doc(db, 'skills', 'skillsList')

const skillsList = ref({
  programmingLanguages: [],
  webDevelopment: [],
  backendAndDatabase: [],
  devopsAndTools: [],
})

// Firebase'den veriyi çek
onMounted(async () => {
  try {
    const snapshot = await getDoc(skillsDocRef)
    if (snapshot.exists()) {
      const data = snapshot.data()

      // Yeni format kontrolü (icon içeren)
      if (data.programmingLanguages && data.programmingLanguages.length > 0 && data.programmingLanguages[0]?.icon) {
        skillsList.value = {
          programmingLanguages: [...data.programmingLanguages],
          webDevelopment: [...data.webDevelopment],
          backendAndDatabase: [...data.backendAndDatabase],
          devopsAndTools: data.devopsAndTools ? [...data.devopsAndTools] : [],
        }
      } else {
        // Eski format varsa boş başlat
        skillsList.value = {
          programmingLanguages: [],
          webDevelopment: [],
          backendAndDatabase: [],
          devopsAndTools: [],
        }
      }
    }
  } catch (error) {
    console.error('Veri yükleme hatası:', error)
    popupMessage.value = 'Veri yüklenirken hata oluştu!'
    showPopup.value = true
  }
})

// Yeni skill ekle
function addSkill(category) {
  skillsList.value[category].push({ name: '', icon: '' })
}

// Skill sil
function removeSkill(category, index) {
  skillsList.value[category].splice(index, 1)
}

// Değişiklikleri Firebase'e kaydet
async function saveChanges() {
  try {
    // Boş olan skilleri filtrele
    const cleanData = {
      programmingLanguages: skillsList.value.programmingLanguages.filter(
        (s) => s.name && s.icon
      ),
      webDevelopment: skillsList.value.webDevelopment.filter((s) => s.name && s.icon),
      backendAndDatabase: skillsList.value.backendAndDatabase.filter((s) => s.name && s.icon),
      devopsAndTools: skillsList.value.devopsAndTools.filter((s) => s.name && s.icon),
    }

    await setDoc(skillsDocRef, cleanData)
    popupMessage.value = 'Beceriler başarıyla güncellendi!'
    showPopup.value = true
  } catch (error) {
    console.error('Kaydetme hatası:', error)
    popupMessage.value = 'Kaydetme sırasında hata oluştu!'
    showPopup.value = true
  }
}
</script>
