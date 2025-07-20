<template>
  <nav
    class="fixed top-0 left-0 right-0 bg-yellow-sea-600 text-white px-4 py-3 flex items-center justify-between z-50 shadow-md lg:hidden"
  >
    <!-- Menü Butonu (Mobilde görünür) -->
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

    <!-- Menü (Mobil açıkken görünür) -->
    <div
      :class="[open ? 'block' : 'hidden']"
      class="absolute top-full left-0 w-full bg-yellow-sea-600 shadow-md"
    >
      <a href="#hakkimda" class="block px-3 py-2 text-yellow-200 hover:text-white font-bold"
        >HAKKIMDA</a
      >
      <a href="#deneyimler" class="block px-3 py-2 text-yellow-200 hover:text-white font-bold"
        >DENEYİMLER</a
      >
      <a href="#egitim" class="block px-3 py-2 text-yellow-200 hover:text-white font-bold"
        >EĞİTİM HAYATIM</a
      >
      <a href="#yetenekler" class="block px-3 py-2 text-yellow-200 hover:text-white font-bold"
        >YETENEKLERİM</a
      >
      <a href="#sertifikalar" class="block px-3 py-2 text-yellow-200 hover:text-white font-bold"
        >SERTİFİKALARIM</a
      >
      <a href="#iletisim" class="block px-3 py-2 text-yellow-200 hover:text-white font-bold"
        >İLETİŞİM</a
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
body,
#app {
  padding-top: 3.5rem;
}
</style>
