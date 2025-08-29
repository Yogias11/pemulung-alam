<template>
  <div class="max-w-3xl mx-auto">
    <!-- Slider -->
    <div class="relative mb-8">
      <img
        :src="slides[current].img"
        :alt="slides[current].caption"
        class="w-full h-56 object-cover rounded shadow"
      />
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

    <!-- Thumbnail Berita Responsive Cards -->
    <div class="mt-12">
      <header class="mb-1 flex items-center justify-between">
        <div>
          <h2 class="text-xl font-bold mb-4">Berita Terbaru</h2>
        </div>
        <div class="hidden sm:flex gap-2">
          <button>Semua</button>
        </div>
      </header>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:max-w-none">
        <ThumbnailNews
          v-for="news in newsList"
          :key="news.id"
          :img="news.img"
          :title="news.title"
          :date="news.date"
          :summary="news.summary"
          :id="news.id"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ThumbnailNews from '@/components/ThumbnailNews.vue'

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

const newsList = [
  {
    id: 1,
    img: 'https://source.unsplash.com/random/400x200?news,1',
    title: 'Judul Berita Menarik 1',
    date: '23 Agustus 2025',
    summary: 'Ringkasan berita pertama yang sedang trending di Pemulung Alam.'
  },
  {
    id: 2,
    img: 'https://source.unsplash.com/random/400x200?news,2',
    title: 'Judul Berita Menarik 2',
    date: '22 Agustus 2025',
    summary: 'Ringkasan berita kedua yang sedang trending di Pemulung Alam.'
  },
  {
    id: 3,
    img: 'https://source.unsplash.com/random/400x200?news,3',
    title: 'Judul Berita Menarik 3',
    date: '21 Agustus 2025',
    summary: 'Ringkasan berita ketiga yang sedang trending di Pemulung Alam.'
  }
]
</script>

<style scoped>
@media (min-width: 1024px) {
  .lg\:max-w-none {
    max-width: none !important;
  }
}
</style>