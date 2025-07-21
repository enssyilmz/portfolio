<template>
  <aside
    class="hidden lg:block fixed top-0 left-0 h-full w-64 bg-yellow-sea-600 text-white shadow-lg z-10"
  >
    <nav class="h-full flex justify-center flex-col gap-3 px-4 items-center text-center">
      <img
        src="/src/assets/vesikalik.jpg"
        alt="Vesikalik Fotograf"
        class="rounded-full border-8 border-yellow-sea-400 shadow-md object-cover w-48 h-48 mb-4"
      />
      <button
        v-for="item in sections"
        :key="item.id"
        @click="scrollToSection(item.id)"
        :class="[
          'block font-bold transition-colors duration-300 bg-transparent border-none cursor-pointer',
          activeSection === item.id ? 'text-white' : 'text-yellow-200 hover:text-white',
        ]"
      >
        {{ item.name }}
      </button>
    </nav>
  </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('')
const sections = [
  { id: 'hakkimda', name: 'HAKKIMDA' },
  { id: 'deneyimler', name: 'DENEYİMLER' },
  { id: 'egitim', name: 'EĞİTİM HAYATIM' },
  { id: 'yetenekler', name: 'YETENEKLERİM' },
  { id: 'iletisim', name: 'İLETİŞİM' },
]
function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return

  // Smooth scroll için alternatif yöntem
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
      threshold: 0.5, // %50 görünüyorsa aktif say
    },
  )

  const targets = document.querySelectorAll('section[id]')
  targets.forEach((el) => observer.observe(el))

  onUnmounted(() => {
    targets.forEach((el) => observer.unobserve(el))
  })
})
</script>
