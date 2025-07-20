import './assets/main.css'

import { createApp } from 'vue'
import HomeView from './views/HomeView.vue'

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

const app = createApp(HomeView)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
