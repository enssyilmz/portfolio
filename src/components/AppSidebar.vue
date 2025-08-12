<template>
  <aside class="hidden md:block fixed top-0 left-0 h-full w-64 bg-cocoa-brown shadow-lg z-10 text-md">
    <nav class="h-full flex justify-center flex-col gap-3 px-4 items-center text-center">
      <img
        v-if="!isAdmin"
        src="/src/assets/vesikalik.jpg"
        alt="Vesikalik Fotograf"
        class="rounded-full border-8 border-orange-web shadow-md object-cover w-48 h-48 mb-4"
      />
      <button
        v-for="item in props.sections"
        :key="item.id"
        @click="scrollToSection(item.id)"
        :class="[
          'block font-bold transition-colors duration-300 bg-transparent border-none cursor-pointer',
          activeSection === item.id
            ? 'text-champagne-pink hover:text-white'
            : 'text-buff hover:text-white',
        ]"
      >
        {{ item.name }}
      </button>
      <div v-if="isAdmin" id="button" class="flex justify-center">
        <button @click="logout" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
          Çıkış Yap
        </button>
      </div>
    </nav>
  </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { useRouter } from 'vue-router'
const router = useRouter()
async function logout() {
  try {
    await signOut(auth)
    localStorage.removeItem('userLoggedIn')
    router.push('/')
  } catch (error) {
    console.error('Çıkış hatası:', error)
  }
}

const activeSection = ref('')
const props = defineProps({
  sections: {
    type: Array,
    default: () => [
      { id: 'hakkimda', name: 'HAKKIMDA' },
      { id: 'deneyimler', name: 'DENEYİMLER' },
      { id: 'egitim', name: 'EĞİTİM HAYATIM' },
      { id: 'beceriler', name: 'BECERİLERİM' },
      { id: 'iletisim', name: 'İLETİŞİM' },
    ],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
})
function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return

  setTimeout(() => {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }, 100)
}
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      threshold: 0.5,
    },
  )

  const targets = document.querySelectorAll('section[id]')
  targets.forEach((el) => observer.observe(el))

  onUnmounted(() => {
    targets.forEach((el) => observer.unobserve(el))
  })
})
</script>
