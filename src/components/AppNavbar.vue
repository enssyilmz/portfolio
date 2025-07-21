<template>
  <nav
    class="fixed top-0 left-0 right-0 bg-yellow-sea-600 text-white px-4 py-3 flex items-center justify-between z-50 shadow-md lg:hidden"
  >
    <!-- Menü Butonu -->
    <button @click="open = !open" class="focus:outline-none">
      <svg
        v-if="!open"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Menü Öğeleri -->
    <div
      :class="[open ? 'block' : 'hidden']"
      class="absolute top-full left-0 w-full bg-yellow-sea-600 shadow-md transition-all duration-300"
    >
      <button
        v-for="item in props.sections"
        :key="item.id"
        @click="handleMenuClick(item.id)"
        :class="[
          'block px-3 py-2 font-bold transition-colors duration-300 w-full text-left',
          activeSection === item.id ? 'text-white' : 'text-yellow-200 hover:text-white',
        ]"
      >
        {{ item.name }}
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const open = ref(false)
const activeSection = ref('')
const props = defineProps({
  sections: {
    type: Array,
    default: () => [
      { id: 'hakkimda', name: 'HAKKIMDA' },
      { id: 'deneyimler', name: 'DENEYİMLER' },
      { id: 'egitim', name: 'EĞİTİM HAYATIM' },
      { id: 'yetenekler', name: 'YETENEKLERİM' },
      { id: 'iletisim', name: 'İLETİŞİM' },
    ],
  },
})

function handleMenuClick(id) {
  const el = document.getElementById(id)
  if (!el) return

  setTimeout(() => {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }, 100)
  open.value = false
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
    { threshold: 0.5 },
  )

  const targets = document.querySelectorAll('section[id]')
  targets.forEach((section) => observer.observe(section))

  onUnmounted(() => {
    targets.forEach((section) => observer.unobserve(section))
  })
})
</script>

<style scoped>
body,
#app {
  padding-top: 3.5rem;
}
</style>
