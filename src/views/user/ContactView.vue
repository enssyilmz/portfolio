<template>
  <section
    id="iletisim"
    class="min-h-screen flex flex-col justify-center items-center px-4 py-16 bg-white"
  >
    <div class="w-full">
      <h2 class="text-5xl font-bold text-gray-700">İLETİŞİM</h2>
      <br />
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="font-medium">Ad</label>
            <input
              v-model="form.FirstName"
              type="text"
              class="w-full p-2 rounded-lg border focus:outline-none"
              required
            />
          </div>

          <div>
            <label class="font-medium">Soyad</label>
            <input
              v-model="form.LastName"
              type="text"
              class="w-full p-2 rounded-lg border focus:outline-none"
              required
            />
          </div>
        </div>

        <div>
          <label class="font-medium mb-2">E-posta</label>
          <input
            v-model="form.Email"
            type="email"
            class="w-full p-2 rounded-lg border focus:outline-none"
            required
          />
        </div>

        <div>
          <label class="font-medium mb-2">Konu</label>
          <input
            v-model="form.Subject"
            type="text"
            class="w-full p-2 rounded-lg border focus:outline-none"
            required
          />
        </div>

        <div>
          <label class="font-medium mb-2">Mesaj</label>
          <textarea
            v-model="form.Message"
            rows="6"
            class="w-full p-2 rounded-lg border focus:outline-none"
            required
          ></textarea>
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="bg-yellow-sea-400 hover:bg-yellow-sea-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
          >
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
    alert('Mesajınız gönderildi! 💌')
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
