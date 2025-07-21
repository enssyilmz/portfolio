<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-100">
    <form @submit.prevent="handleLogin" class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Giriş Yap</h2>
      <div class="mb-4">
        <label for="email" class="block mb-1 font-semibold">E-posta</label>
        <input
          id="email"
          type="email"
          v-model="email"
          required
          placeholder="example@mail.com"
          class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block mb-1 font-semibold">Şifre</label>
        <input
          id="password"
          type="password"
          v-model="password"
          required
          placeholder="Şifrenizi girin"
          class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 rounded transition-colors"
      >
        Giriş Yap
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function handleLogin() {
  // Burada login işlemini yapabilirsin (Firebase auth veya kendi backend)
  alert(`Giriş yapılıyor:\nE-posta: ${email.value}\nŞifre: ${password.value}`)
}
</script>
