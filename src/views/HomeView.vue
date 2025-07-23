<template>
  <div>
    <AppNavbar />
    <Sidebar />

    <main class="lg:ml-64 p-6 bg-gray-50 min-h-screen">
      <AboutView />
      <hr class="my-12 border-t-2 border-gray-300" />
      <ExperienceView />
      <hr class="my-12 border-t-2 border-gray-300" />
      <EducationView />
      <hr class="my-12 border-t-2 border-gray-300" />
      <section id="yetenekler" class="min-h-screen flex flex-col justify-center items-start gap-4">
        <h1 class="text-5xl font-bold text-gray-800">YETENEKLERİM</h1>
        <p class="text-lg text-gray-600">Yeteneklerini buraya yazabilirsin.</p>
      </section>

      <hr class="my-12 border-t-2 border-gray-300" />

      <section id="iletisim" class="min-h-screen flex flex-col justify-center items-start gap-4">
        <h1 class="text-5xl font-bold text-gray-800">İLETİŞİM</h1>
        <p class="text-lg text-gray-600">İletişim bilgilerini buraya koyabilirsin.</p>
      </section>
    </main>
  </div>
</template>

<script setup>
import Sidebar from '../components/AppSidebar.vue'
import AppNavbar from '@/components/AppNavbar.vue'
import AboutView from './user/AboutView.vue'
import ExperienceView from './user/ExperienceView.vue'
import EducationView from './user/EducationView.vue'
</script>
