<template>
  <section
    id="iletisim"
    class="min-h-screen flex flex-col justify-center items-center px-4 py-16"
  >
    <BasePopup v-model="showPopup" :message="'Mesajınız gönderildi!'" :duration="3000" />
    <div class="w-full">
      <h2
        ref="mainTitle"
        :class="[
          'text-3xl md:text-5xl font-bold transition-all duration-1000 ease-out',
          mainTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        ]"
      >
        İLETİŞİM
      </h2>
      <br />
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            ref="nameField"
            :class="[
              'transition-all duration-1000 ease-out',
              nameVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10',
            ]"
          >
            <label class="font-medium">Ad</label>
            <input
              v-model="form.FirstName"
              type="text"
              class="w-full p-2 rounded-lg border focus:outline-none"
              required
            />
          </div>

          <div
            ref="surnameField"
            :class="[
              'transition-all duration-1000 ease-out',
              surnameVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10',
            ]"
          >
            <label class="font-medium">Soyad</label>
            <input
              v-model="form.LastName"
              type="text"
              class="w-full p-2 rounded-lg border focus:outline-none"
              required
            />
          </div>
        </div>

        <div
          ref="emailField"
          :class="[
            'transition-all duration-1000 ease-out',
            emailVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10',
          ]"
        >
          <label class="font-medium mb-2">E-posta</label>
          <input
            v-model="form.Email"
            type="email"
            class="w-full p-2 rounded-lg border focus:outline-none"
            required
          />
        </div>

        <div
          ref="subjectField"
          :class="[
            'transition-all duration-1000 ease-out',
            subjectVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          ]"
        >
          <label class="font-medium mb-2">Konu</label>
          <input
            v-model="form.Subject"
            type="text"
            class="w-full p-2 rounded-lg border focus:outline-none"
            required
          />
        </div>

        <div
          ref="messageField"
          :class="[
            'transition-all duration-1000 ease-out',
            messageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10',
          ]"
        >
          <label class="font-medium mb-2">Mesaj</label>
          <textarea
            v-model="form.Message"
            rows="6"
            class="w-full p-2 rounded-lg border focus:outline-none"
            required
          ></textarea>
        </div>
        <div
          id="button"
          class="flex justify-center"
          ref="buttonfield"
          :class="[
            'transition-all duration-1000 ease-out',
            buttonfieldVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          ]"
        >
          <button @click="saveChanges" class="btn px-4 py-2 rounded-lg" type="submit">
            Gönder
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { db } from '@/firebase/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import BasePopup from '@/components/BasePopup.vue'
import { useIntersectionObserver } from '@vueuse/core'

const showPopup = ref(false)

const mainTitle = ref(null)
const nameField = ref(null)
const surnameField = ref(null)
const emailField = ref(null)
const subjectField = ref(null)
const messageField = ref(null)
const buttonfield = ref(null)

const mainTitleVisible = ref(false)
const nameVisible = ref(false)
const surnameVisible = ref(false)
const emailVisible = ref(false)
const subjectVisible = ref(false)
const messageVisible = ref(false)
const buttonfieldVisible = ref(false)
useIntersectionObserver(
  mainTitle,
  ([{ isIntersecting }]) => {
    mainTitleVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)
useIntersectionObserver(
  nameField,
  ([{ isIntersecting }]) => {
    nameVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)
useIntersectionObserver(
  surnameField,
  ([{ isIntersecting }]) => {
    surnameVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)
useIntersectionObserver(
  emailField,
  ([{ isIntersecting }]) => {
    emailVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)
useIntersectionObserver(
  subjectField,
  ([{ isIntersecting }]) => {
    subjectVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)
useIntersectionObserver(
  messageField,
  ([{ isIntersecting }]) => {
    messageVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)
useIntersectionObserver(
  buttonfield,
  ([{ isIntersecting }]) => {
    buttonfieldVisible.value = isIntersecting
  },
  { threshold: 0.5 },
)
const form = ref({
  FirstName: '',
  LastName: '',
  Email: '',
  Subject: '',
  Message: '',
})

async function handleSubmit() {
  try {
    await addDoc(collection(db, 'contact'), {
      firstName: form.value.FirstName,
      lastName: form.value.LastName,
      email: form.value.Email,
      subject: form.value.Subject,
      message: form.value.Message,
      date: serverTimestamp(),
    })
    showPopup.value = true
    form.value = {
      FirstName: '',
      LastName: '',
      Email: '',
      Subject: '',
      Message: '',
    }
  } catch (err) {
    console.error('Hata oluştu:', err)
    alert('Bir hata oluştu, lütfen tekrar deneyin.')
  }
}
</script>
