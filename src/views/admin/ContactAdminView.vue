<template>
  <section id="iletisim" class="min-h-screen flex flex-col justify-center gap-6 px-4 py-8">
    <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">İletişim Bölümünü Düzenle</h1>

    <div v-if="messages.length === 0" class="text-sm sm:text-base md:text-lg lg:text-xl text-paynes-gray text-center">
      Henüz mesaj gönderilmemiş.
    </div>

    <div v-else class="overflow-x-auto rounded-lg shadow border bg-white">
      <table class="min-w-full table-auto">
        <thead>
          <tr class="bg-cocoa-brown text-white">
            <th class="p-3 text-left whitespace-nowrap text-xs sm:text-sm md:text-sm lg:text-base">Ad Soyad</th>
            <th class="p-3 text-left whitespace-nowrap text-xs sm:text-sm md:text-sm lg:text-base">E-posta</th>
            <th class="p-3 text-left whitespace-nowrap text-xs sm:text-sm md:text-sm lg:text-base">Konu</th>
            <th class="p-3 text-left whitespace-nowrap text-xs sm:text-sm md:text-sm lg:text-base">Mesaj</th>
            <th class="p-3 text-left whitespace-nowrap text-xs sm:text-sm md:text-sm lg:text-base">Tarih</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="msg in messages"
            :key="msg.id"
            class="border hover:bg-yellow-100 transition duration-300 shadow"
          >
            <td class="p-3 whitespace-nowrap text-xs sm:text-sm md:text-sm lg:text-base">{{ msg.firstName }} {{ msg.lastName }}</td>
            <td class="p-3 whitespace-nowrap text-xs sm:text-sm md:text-sm lg:text-base">{{ msg.email }}</td>
            <td class="p-3 whitespace-nowrap text-xs sm:text-sm md:text-sm lg:text-base">{{ msg.subject }}</td>
            <td class="p-3 whitespace-normal max-w-sm text-xs sm:text-sm md:text-sm lg:text-base">{{ msg.message }}</td>
            <td class="p-3 whitespace-nowrap text-xs sm:text-sm md:text-sm lg:text-base">{{ formatDate(msg.date) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/firebase/firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

const messages = ref([])

onMounted(async () => {
  const q = query(collection(db, 'contact'), orderBy('date', 'desc'))
  const querySnapshot = await getDocs(q)

  messages.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
})

function formatDate(timestamp) {
  if (!timestamp) return ''
  const date = timestamp.toDate()
  return date.toLocaleString('tr-TR', {
    dateStyle: 'short',
    timeStyle: 'short',
  })
}
</script>
