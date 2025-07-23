import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//hakkında kısmında kullandığım ikonlar
import {
  faGithub,
  faXTwitter,
  faInstagram,
  faFacebook,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
library.add(faGithub, faLinkedin, faXTwitter, faInstagram, faFacebook, faYoutube)

// AOS'u başlat
AOS.init({
  duration: 1000, // Animasyon süresi
  easing: 'ease-in-out', // Animasyon geçiş efekti
  once: false, // Animasyon her görünüme geldiğinde çalışsın
  mirror: true, // Scroll yukarı çıkarken reverse animasyon yapsın
  offset: 50, // Element ne kadar görünür olduğunda animasyon başlasın (px)
  anchorPlacement: 'top-bottom', // Animasyonun tetiklenme noktası
  debounceDelay: 50, // Scroll olaylarını geciktir
  throttleDelay: 99, // Scroll performansını iyileştir
})

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
