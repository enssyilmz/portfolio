<template>
  <div class="min-h-screen flex justify-center items-center bg-seasalt">
    <form @submit.prevent="handleLogin" class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Giriş Yap</h2>
      <div class="mb-4">
        <label for="email" class="block mb-1 font-semibold">E-Mail</label>
        <input
          id="email"
          type="email"
          v-model="email"
          required
          placeholder="Mail adresinizi girin"
          class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cocoa-brown"
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
          class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cocoa-brown"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-cocoa-brown hover:bg-orange-web text-white font-bold py-2 rounded transition-colors"
      >
        Giriş Yap
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/firebase'

const router = useRouter()

const email = ref('')
const password = ref('')
const errorMessage = ref('')

async function handleLogin() {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    console.log('Giriş başarılı:', userCredential.user)
    localStorage.setItem('userLoggedIn', 'true')
    router.push('/admin')
  } catch (error) {
    console.error('Giriş hatası:', error)
    errorMessage.value = 'Giriş başarısız. Lütfen bilgilerinizi kontrol edin.'
  }
}
</script>
