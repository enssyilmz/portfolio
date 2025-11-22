<template>
  <div>
    <AppNavbar />
    <Sidebar />
    <main class="md:ml-64 p-6 bg-gray-50 min-h-screen pt-16 md:pt-6">
      <section id="hakkimda" class="sticky top-16 md:top-6 z-1 bg-gray-50 h-screen flex flex-col section-transition">
        <AboutView />
      </section>

      <section id="deneyimler" class="sticky top-16 md:top-6 z-2 bg-gray-50 h-screen flex flex-col section-transition">
        <ExperienceView />
      </section>

      <section id="projeler" class="sticky top-16 md:top-6 z-3 bg-gray-50 min-h-screen flex flex-col section-transition">
        <ProjectsView />
      </section>

      <section id="egitim" class="sticky top-16 md:top-6 z-4 bg-gray-50 h-screen flex flex-col section-transition">
        <EducationView />
      </section>

      <section id="beceriler" class="sticky top-16 md:top-6 z-5 bg-gray-50 min-h-screen flex flex-col section-transition">
        <SkillsView />
      </section>

      <section id="iletisim" class="sticky top-16 md:top-6 z-6 bg-gray-50 h-screen flex flex-col section-transition">
        <ContactView />
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
import ProjectsView from './user/ProjectsView.vue'
import ContactView from './user/ContactView.vue'
import SkillsView from './user/SkillsView.vue'
</script>

<style scoped>
.section-transition {
  animation: slideIn 0.6s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>
