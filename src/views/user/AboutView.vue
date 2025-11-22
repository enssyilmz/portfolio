<template>
  <section
    class="min-h-screen flex flex-col justify-center items-start gap-4"
  >
    <div v-if="!aboutInfo" class="flex flex-col items-center justify-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-web"></div>
      <p class="mt-4 text-lg text-gray-600">Veriler yükleniyor...</p>
    </div>

    <div v-else>
      <h1
        ref="nameAndSurname"
        :class="[
          'text-3xl md:text-5xl font-bold transition-all duration-1000 ease-out',
          nameAndSurnameVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        ]"
      >
        <span class="text-gray-700">{{ aboutInfo?.name + ' ' }}</span>
        <span>{{ aboutInfo?.surname }}</span>
      </h1>
    <h1
      ref="mailAndLocation"
      :class="[
        'text-lg md:text-xl font-semibold transition-all duration-1000 ease-out delay-200',
        mailAndLocationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
      ]"
    >
      <span class="text-gray-700">{{ aboutInfo?.location + ' ' + '-' + ' ' }}</span>
      <span>{{ aboutInfo?.email }}</span>
    </h1>
    <br />
    <p
      ref="description"
      :class="[
        'text-base md:text-lg text-gray-600 transition-all duration-1000 ease-out delay-400 border p-4 rounded-lg bg-white shadow',
        descriptionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10',
      ]"
    >
      {{ aboutInfo?.description }}
    </p>
    <div
      ref="socialLink"
      :class="[
        'flex gap-4 mt-4 transition-all duration-1000 ease-out delay-400 border p-4 rounded-lg bg-white shadow',
        socialLinkVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10',
      ]"
    >
      <a
        :href="socialLinks?.github"
        target="_blank"
        class="text-gray-600 hover:text-black transition-colors duration-300 text-3xl md:text-5xl"
      >
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a
        :href="socialLinks?.linkedin"
        target="_blank"
        class="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-3xl md:text-5xl"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a
        :href="socialLinks?.twitter"
        target="_blank"
        class="text-gray-600 hover:text-black transition-colors duration-300 text-3xl md:text-5xl"
      >
        <font-awesome-icon :icon="['fab', 'x-twitter']" />
      </a>
      <a
        :href="socialLinks?.instagram"
        target="_blank"
        class="text-gray-600 hover:text-pink-500 transition-colors duration-300 text-3xl md:text-5xl"
      >
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
      <a
        :href="socialLinks?.facebook"
        target="_blank"
        class="text-gray-600 hover:text-blue-700 transition-colors duration-300 text-3xl md:text-5xl"
      >
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </a>
      <a
        :href="socialLinks?.youtube"
        target="_blank"
        class="text-gray-600 hover:text-red-600 transition-colors duration-300 text-3xl md:text-5xl"
      >
        <font-awesome-icon :icon="['fab', 'youtube']" />
      </a>
    </div>
    </div>
  </section>
</template>
<script setup>
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const nameAndSurname = ref(false)
const mailAndLocation = ref(false)
const description = ref(false)
const socialLink = ref(false)

const nameAndSurnameVisible = ref(false)
const mailAndLocationVisible = ref(false)
const descriptionVisible = ref(false)
const socialLinkVisible = ref(false)

useIntersectionObserver(
  nameAndSurname,
  ([{ isIntersecting }]) => {
    nameAndSurnameVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)
useIntersectionObserver(
  mailAndLocation,
  ([{ isIntersecting }]) => {
    mailAndLocationVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)
useIntersectionObserver(
  description,
  ([{ isIntersecting }]) => {
    descriptionVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)
useIntersectionObserver(
  socialLink,
  ([{ isIntersecting }]) => {
    socialLinkVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)

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
})
</script>
