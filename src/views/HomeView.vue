<template>
  <div>
    <AppNavbar />
    <Sidebar />
    <main class="md:ml-64 p-6 bg-gray-50 min-h-screen overflow-x-hidden pt-16 md:pt-6">
      <AboutView />
      <hr class="my-12 border-t-2 border-gray-300" />
      <ExperienceView />
      <hr class="my-12 border-t-2 border-gray-300" />
      <EducationView />
      <hr class="my-12 border-t-2 border-gray-300" />
      <SkillsView />
      <hr class="my-12 border-t-2 border-gray-300" />
      <ContactView />
    </main>
  </div>
</template>

<script setup>
import Sidebar from '../components/AppSidebar.vue'
import AppNavbar from '@/components/AppNavbar.vue'
import AboutView from './user/AboutView.vue'
import ExperienceView from './user/ExperienceView.vue'
import EducationView from './user/EducationView.vue'
import ContactView from './user/ContactView.vue'
import SkillsView from './user/SkillsView.vue'
</script>
