<template>
  <section id="beceriler" class="min-h-screen px-6 py-12 bg-gray-50">
    <h1
      ref="mainTitle"
      :class="[
        'text-5xl font-bold mb-6 text-yellow-600 transition-all duration-1000 ease-out',
        mainTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
      ]"
    >
      BECERİLERİM
    </h1>

    <div class="grid md:grid-cols-3 gap-8">
      <div
        ref="firstField"
        :class="[
          'transition-all duration-1000 ease-out delay-200',
          firstFieldVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10',
        ]"
      >
        <h2 class="text-2xl font-bold mb-3 text-gray-800">Programlama Dilleri</h2>
        <ul class="list-disc list-inside text-gray-700 space-y-1">
          <li>C</li>
          <li>C++</li>
          <li>C#</li>
          <li>Java</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div
        ref="secondField"
        :class="[
          'transition-all duration-1000 ease-out delay-200',
          secondFieldVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-y-10',
        ]"
      >
        <h2 class="text-2xl font-bold mb-3 text-gray-800">Web Geliştirme</h2>
        <ul class="list-disc list-inside text-gray-700 space-y-1">
          <li>HTML</li>
          <li>CSS</li>
          <li>PHP</li>
          <li>Bootstrap</li>
          <li>TailwindCSS</li>
          <li>ASP.NET</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Vue.js</li>
        </ul>
      </div>

      <div
        ref="thirdField"
        :class="[
          'transition-all duration-1000 ease-out delay-200',
          thirdFieldVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10',
        ]"
      >
        <h2 class="text-2xl font-bold mb-3 text-gray-800">Backend & Veritabanı</h2>
        <ul class="list-disc list-inside text-gray-700 space-y-1">
          <li>MSSQL</li>
          <li>Firebase (Auth, Firestore, Hosting)</li>
          <li>Supabase</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const mainTitle = ref(false)
const firstField = ref(false)
const secondField = ref(false)
const thirdField = ref(false)

const mainTitleVisible = ref(false)
const firstFieldVisible = ref(false)
const secondFieldVisible = ref(false)
const thirdFieldVisible = ref(false)

useIntersectionObserver(
  mainTitle,
  ([{ isIntersecting }]) => {
    mainTitleVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)
useIntersectionObserver(
  firstField,
  ([{ isIntersecting }]) => {
    firstFieldVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)
useIntersectionObserver(
  secondField,
  ([{ isIntersecting }]) => {
    secondFieldVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)
useIntersectionObserver(
  thirdField,
  ([{ isIntersecting }]) => {
    thirdFieldVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)
</script>
