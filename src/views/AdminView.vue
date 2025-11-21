<template>
  <div>
    <AppNavbar :sections="adminSections" :isAdmin="true" />
    <Sidebar :sections="adminSections" :isAdmin="true" />
    <main class="md:ml-64 p-6 bg-gray-50 min-h-screen pt-16 md:pt-6">
      <AboutAdminView />
      <hr class="my-12 border-t-2 border-gray-300" />
      <ExperienceAdminView />
      <hr class="my-12 border-t-2 border-gray-300" />
      <ProjectsAdminView />
      <hr class="my-12 border-t-2 border-gray-300" />
      <EducationAdminView />
      <hr class="my-12 border-t-2 border-gray-300" />
      <SkillsAdminView />
      <hr class="my-12 border-t-2 border-gray-300" />
      <ContactAdminView />
    </main>
  </div>
</template>

<script setup>
import Sidebar from '../components/AppSidebar.vue'
import AppNavbar from '@/components/AppNavbar.vue'

import AboutAdminView from './admin/AboutAdminView.vue'
import ExperienceAdminView from './admin/ExperienceAdminView.vue'
import EducationAdminView from './admin/EducationAdminView.vue'
import ProjectsAdminView from './admin/ProjectsAdminView.vue'
import SkillsAdminView from './admin/SkillsAdminView.vue'
import ContactAdminView from './admin/ContactAdminView.vue'

const adminSections = [
  { id: 'hakkimda', name: 'HAKKIMDAYI DÜZENLE' },
  { id: 'deneyimler', name: 'DENEYİMLERİ DÜZENLE' },
  { id: 'projeler', name: 'PROJELERİ DÜZENLE' },
  { id: 'egitim', name: 'EĞİTİM HAYATINI DÜZENLE' },
  { id: 'beceriler', name: 'BECERİLERİNİ DÜZENLE' },
  { id: 'iletisim', name: 'İLETİŞİM DÜZENLE' },
]
</script>
