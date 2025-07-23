<template>
  <section id="hakkimda" class="min-h-screen flex flex-col justify-center items-start gap-4">
    <h1 class="text-5xl font-bold" data-aos="fade-up" data-aos-delay="100">
      <span class="text-gray-700">{{ aboutInfo?.name + ' ' }}</span>
      <span>{{ aboutInfo?.surname }}</span>
    </h1>
    <h1 class="text-xl" data-aos="fade-up" data-aos-delay="200">
      <span class="text-gray-700">{{ aboutInfo?.location + ' ' + '-' + ' ' }}</span>
      <span>{{ aboutInfo?.email }}</span>
    </h1>
    <br />
    <p class="text-lg text-gray-600" data-aos="fade-right" data-aos-delay="300">
      {{ aboutInfo?.description }}
    </p>
    <div class="flex gap-4 mt-6" data-aos="fade-up" data-aos-delay="400">
      <a
        :href="socialLinks?.github"
        target="_blank"
        class="text-gray-600 hover:text-black transition-colors duration-300 text-5xl"
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a
        :href="socialLinks?.linkedin"
        target="_blank"
        class="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-5xl"
        data-aos="zoom-in"
        data-aos-delay="550"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a
        :href="socialLinks?.twitter"
        target="_blank"
        class="text-gray-600 hover:text-black transition-colors duration-300 text-5xl"
        data-aos="zoom-in"
        data-aos-delay="600"
      >
        <font-awesome-icon :icon="['fab', 'x-twitter']" />
      </a>
      <a
        :href="socialLinks?.instagram"
        target="_blank"
        class="text-gray-600 hover:text-pink-500 transition-colors duration-300 text-5xl"
        data-aos="zoom-in"
        data-aos-delay="650"
      >
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
      <a
        :href="socialLinks?.facebook"
        target="_blank"
        class="text-gray-600 hover:text-blue-700 transition-colors duration-300 text-5xl"
        data-aos="zoom-in"
        data-aos-delay="700"
      >
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </a>
      <a
        :href="socialLinks?.youtube"
        target="_blank"
        class="text-gray-600 hover:text-red-600 transition-colors duration-300 text-5xl"
        data-aos="zoom-in"
        data-aos-delay="750"
      >
        <font-awesome-icon :icon="['fab', 'youtube']" />
      </a>
    </div>
  </section>
</template>
<script setup>
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import { ref, onMounted } from 'vue'
import AOS from 'aos'
const aboutInfo = ref(null)
const socialLinks = ref(null)

onMounted(async () => {
  const aboutRef = doc(db, 'about', 'aboutInfo')
  const socialRef = doc(db, 'about', 'socialLinks')

  const [aboutSnap, socialSnap] = await Promise.all([getDoc(aboutRef), getDoc(socialRef)])

  if (aboutSnap.exists()) {
    aboutInfo.value = aboutSnap.data()
  }

  if (socialSnap.exists()) {
    socialLinks.value = socialSnap.data()
  }
  AOS.refresh()
})
</script>
