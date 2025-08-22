<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Navbar from './components/Navbar.vue'
import ThumbnailNews from './components/ThumbnailNews.vue'

const { t } = useI18n()
const showMenu = ref(false)

// Carousel logic
const slides = [
  { img: 'https://source.unsplash.com/random/800x300?sig=1', caption: 'Slide 1' },
  { img: 'https://source.unsplash.com/random/800x300?sig=2', caption: 'Slide 2' },
  { img: 'https://source.unsplash.com/random/800x300?sig=3', caption: 'Slide 3' }
]
const current = ref(0)
let intervalId

function next() {
  current.value = (current.value + 1) % slides.length
}
function prev() {
  current.value = (current.value - 1 + slides.length) % slides.length
}
function goTo(idx) {
  current.value = idx
}

onMounted(() => {
  intervalId = setInterval(next, 5000)
})
onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Fixed Navbar -->
    <Navbar />

    <h1 class="text-2xl font-bold mb-4">{{ t('welcome') }}</h1>

    <!-- Carousel -->
    <div class="pt-28 max-w-3xl mx-auto">
      <div class="relative">
        <img :src="slides[current].img" :alt="slides[current].caption" class="w-full h-56 object-cover rounded shadow" />
        <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 rounded-b">
          {{ slides[current].caption }}
        </div>
        <!-- Navigator -->
        <button @click="prev" class="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button @click="next" class="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <!-- Dots -->
        <div class="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
          <span
            v-for="(slide, idx) in slides"
            :key="idx"
            @click="goTo(idx)"
            :class="[
              'w-3 h-3 rounded-full cursor-pointer',
              idx === current ? 'bg-blue-600' : 'bg-white border border-blue-600'
            ]"
          ></span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="pt-8 px-2 sm:px-4 max-w-7xl mx-auto">
      <!-- Responsive dashboard widgets -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-4 sm:p-6 rounded shadow">
          <h2 class="text-lg sm:text-xl font-semibold mb-2">Widget 1</h2>
          <p class="text-sm sm:text-base">Some information or stats here.</p>
        </div>
        <!-- Widget 2: Thumbnail Berita -->
        <div class="bg-white p-4 sm:p-6 rounded shadow">
          <h2 class="text-lg sm:text-xl font-semibold mb-2">Thumbnail Berita</h2>
          <ThumbnailNews
            img="https://source.unsplash.com/random/400x200?news"
            title="Judul Berita Menarik"
            date="23 Agustus 2025"
            summary="Ringkasan singkat berita terbaru yang sedang trending di Pemulung Alam."
            id="1"
          />
        </div>
        <div class="bg-white p-4 sm:p-6 rounded shadow">
          <h2 class="text-lg sm:text-xl font-semibold mb-2">Widget 3</h2>
          <p class="text-sm sm:text-base">Extra widget for large screens.</p>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <footer class="mt-12 py-6 bg-blue-600 text-white text-center w-full">
      <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <span class="text-sm">&copy; Pemulung Alam 2025</span>
        <span class="text-xs mt-2 sm:mt-0">All rights reserved.</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Add custom styles if needed */
</style>