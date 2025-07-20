<template>
  <div class="scroll-smooth">
    <AppNavbar />
    <Sidebar />

    <main class="lg:ml-64 p-6 bg-gray-50 min-h-screen">
      <section id="hakkimda" class="min-h-screen flex flex-col justify-center items-start gap-4">
        <h1 class="text-5xl font-bold">
          <span class="text-gray-700">MUHAMMED ENES </span>
          <span class="text-yellow-sea-600">YILMAZ</span>
        </h1>
        <h1 class="text-xl">
          <span class="text-gray-700">ORDU/KUMRU -</span>
          <span class="text-yellow-sea-600"> enssyilmzx@gmail.com</span>
        </h1>
        <br />
        <p class="text-lg text-gray-600">
          Yazılım geliştirme alanında kendini sürekli geliştiren bir Full Stack Developer’ım.
          ASP.NET MVC ve Node.js tabanlı projelerde edindiğim staj deneyimleri sayesinde hem
          frontend hem de backend tarafında üretken çözümler geliştirdim. Java, JavaScript ve SQL
          teknolojileriyle çalışarak gerçek zamanlı sistemler ve veriye dayalı uygulamalar
          geliştirme konusunda pratik bilgiye sahibim. Hedefim; dinamik ve yenilikçi ekiplerle
          çalışarak teknik bilgi birikimimi daha da ileri taşımak.
        </p>
        <div class="flex gap-4 mt-6">
          <a
            href="https://github.com/enssyilmzx"
            target="_blank"
            class="text-gray-600 hover:text-yellow-500 transition-colors duration-300 text-5xl"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a
            href="https://www.linkedin.com/in/enssyilmz/"
            target="_blank"
            class="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-5xl"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a
            href="https://twitter.com/enssjps"
            target="_blank"
            class="text-gray-600 hover:text-black transition-colors duration-300 text-5xl"
          >
            <font-awesome-icon :icon="['fab', 'x-twitter']" />
          </a>
          <a
            href="https://instagram.com/enssyilmz"
            target="_blank"
            class="text-gray-600 hover:text-pink-500 transition-colors duration-300 text-5xl"
          >
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
          <a
            href="https://facebook.com/enssyilmz"
            target="_blank"
            class="text-gray-600 hover:text-blue-700 transition-colors duration-300 text-5xl"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <a
            href="https://youtube.com/c/protegrus"
            target="_blank"
            class="text-gray-600 hover:text-red-600 transition-colors duration-300 text-5xl"
          >
            <font-awesome-icon :icon="['fab', 'youtube']" />
          </a>
        </div>
      </section>

      <hr class="my-12 border-t-2 border-gray-300" />

      <section id="deneyimler" class="min-h-screen flex flex-col justify-center items-start gap-4">
        <h1 class="text-5xl font-bold text-gray-800">Deneyimler</h1>
        <p class="text-lg text-gray-600">Bu alana iş/staj deneyimlerin yazılacak.</p>
      </section>

      <hr class="my-12 border-t-2 border-gray-300" />

      <section id="egitim" class="min-h-screen flex flex-col justify-center items-start gap-4">
        <h1 class="text-5xl font-bold text-gray-800">Eğitim Hayatım</h1>
        <p class="text-lg text-gray-600">Eğitim geçmişin burada olacak.</p>
      </section>

      <hr class="my-12 border-t-2 border-gray-300" />

      <section id="yetenekler" class="min-h-screen flex flex-col justify-center items-start gap-4">
        <h1 class="text-5xl font-bold text-gray-800">Yeteneklerim</h1>
        <p class="text-lg text-gray-600">Yeteneklerini buraya yazabilirsin.</p>
      </section>

      <hr class="my-12 border-t-2 border-gray-300" />

      <section
        id="sertifikalar"
        class="min-h-screen flex flex-col justify-center items-start gap-4"
      >
        <h1 class="text-5xl font-bold text-gray-800">Sertifikalarım</h1>
        <p class="text-lg text-gray-600">Sertifikalarını buraya ekle.</p>
      </section>

      <hr class="my-12 border-t-2 border-gray-300" />

      <section id="iletisim" class="min-h-screen flex flex-col justify-center items-start gap-4">
        <h1 class="text-5xl font-bold text-gray-800">İletişim</h1>
        <p class="text-lg text-gray-600">İletişim bilgilerini buraya koyabilirsin.</p>
      </section>
    </main>
  </div>
</template>

<script setup>
import Sidebar from '../components/AppSidebar.vue'
import AppNavbar from '@/components/AppNavbar.vue'
</script>
<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
