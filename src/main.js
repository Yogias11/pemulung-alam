import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import router from './router'
import './assets/main.css' // <-- Add this line

const messages = {
  id: {
    welcome: 'Selamat Datang di Pemulung Alam!',
    menu: {
      home: 'Beranda',
      event: 'Event',
      about: 'Tentang'
    },
    readMore: 'Baca Selengkapnya'
  },
  en: {
    welcome: 'Welcome to Pemulung Alam!',
    menu: {
      home: 'Home',
      event: 'Event',
      about: 'About'
    },
    readMore: 'Read More'
  }
}

const i18n = createI18n({
  locale: 'id', // default bahasa
  messages,
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
