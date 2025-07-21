<template>
  <div>
    <AppNavbar />
    <Sidebar />

    <main class="lg:ml-64 p-6 bg-gray-50 min-h-screen">
      <section id="hakkimda" class="min-h-screen flex flex-col justify-center items-start gap-4">
        <h1 class="text-5xl font-bold">
          <span class="text-gray-700">MUHAMMED ENES </span>
          <span>YILMAZ</span>
        </h1>
        <h1 class="text-xl">
          <span class="text-gray-700">ORDU/KUMRU -</span>
          <span> enssyilmzx@gmail.com</span>
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
            href="https://github.com/enssyilmz"
            target="_blank"
            class="text-gray-600 hover:text-black transition-colors duration-300 text-5xl"
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
            href="https://twitter.com/enssjpg"
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
        <h1 class="text-5xl font-bold text-gray-800">DENEYİMLERİM</h1>
        <br />
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <h1 class="text-xl font-semibold text-gray-800">Softtech Yazılım Teknolojileri A.Ş.</h1>
            <span class="text-sm">Haziran 2025 - Temmuz 2025</span>
          </div>
          <h2 class="text-xl font-semibold text-gray-500">Full Stack Developer Stajyer</h2>
          <p class="text-lg text-gray-600">
            Kurumun veri senkronizasyon ihtiyacına yönelik olarak, Node.js ve TypeScript ile
            geliştirdiğim mikroservis mimarili backend uygulamada, dakikada bir dış servisten veri
            çeken zamanlayıcı sistem kurarak Kafka ile mesajlaşma üzerinden gelen verileri MSSQL
            veritabanına ve bellek içi cache'e entegre ettim.
          </p>
        </div>
        <br />
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <h1 class="text-xl font-semibold text-gray-800">Beyoğlu Belediyesi</h1>
            <span class="text-sm">Ağustos 2024 - Eylül 2024</span>
          </div>
          <h2 class="text-xl font-semibold text-gray-500">Full Stack Developer Stajyer</h2>
          <p class="text-lg text-gray-600">
            ASP.NET MVC mimarisi ile geliştirdiğim stajyer yönetim sistemi sayesinde, kullanıcılar
            sistem üzerinden stajyer kayıt, görüntüleme, güncelleme ve silme işlemlerini kolaylıkla
            gerçekleştirebilmektedir.
          </p>
        </div>
      </section>

      <hr class="my-12 border-t-2 border-gray-300" />

      <section id="egitim" class="min-h-screen flex flex-col justify-center items-start gap-4">
        <h1 class="text-5xl font-bold text-gray-800">EĞİTİM HAYATIM</h1>
        <br />
        <div class="w-full">
          <div class="flex items-center justify-between w-full">
            <h1 class="text-xl font-semibold text-gray-800">
              Zonguldak Bülent Ecevit Üniversitesi
            </h1>
            <span class="text-sm"> Eylül 2022 - Temmuz 2025</span>
          </div>
          <h2 class="text-xl font-semibold text-gray-500 mt-1">Bilgisayar Mühendisliği</h2>
          <p class="text-xl text-gray-600">Lisans Derecesi</p>
        </div>
        <br />
        <div class="w-full">
          <div class="flex items-center justify-between w-full">
            <h1 class="text-xl font-semibold text-gray-800">Karadeniz Teknik Üniversitesi</h1>
            <span class="text-sm"> Ağustos 2019 - Temmuz 2021</span>
          </div>
          <h2 class="text-xl font-semibold text-gray-500 mt-1">Bilgisayar Programcılığı</h2>
          <p class="text-xl text-gray-600">Ön Lisans Derecesi</p>
        </div>
      </section>

      <hr class="my-12 border-t-2 border-gray-300" />

      <section id="yetenekler" class="min-h-screen flex flex-col justify-center items-start gap-4">
        <h1 class="text-5xl font-bold text-gray-800">YETENEKLERİM</h1>
        <p class="text-lg text-gray-600">Yeteneklerini buraya yazabilirsin.</p>
      </section>

      <hr class="my-12 border-t-2 border-gray-300" />

      <section id="iletisim" class="min-h-screen flex flex-col justify-center items-start gap-4">
        <h1 class="text-5xl font-bold text-gray-800">İLETİŞİM</h1>
        <p class="text-lg text-gray-600">İletişim bilgilerini buraya koyabilirsin.</p>
      </section>
    </main>
  </div>
</template>

<script setup>
import Sidebar from '../components/AppSidebar.vue'
import AppNavbar from '@/components/AppNavbar.vue'
</script>
