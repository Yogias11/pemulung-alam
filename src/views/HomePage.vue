<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-0">
    <!-- Slider -->
    <div class="relative mb-8">
      <img
        :src="slides[current].img"
        :alt="slides[current].caption"
        class="w-full h-56 object-cover rounded shadow"
      />
      <!-- tombol navigasi & dots tetap sama -->
    </div>

    <!-- Thumbnail Berita Responsive Cards -->
    <div class="mt-12">
      <header class="mb-1 flex items-center justify-between">
        <div>
          <h2 class="text-xl font-bold mb-4">Berita Terbaru</h2>
        </div>
        <div class="hidden sm:flex gap-2">
           <button
              @click="goToEvent"
              class="px-4 py-2 text-green hover:bg-green-100 text-green-900 transition"
            >
              Semua
            </button>
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
import { useRouter } from 'vue-router'
import ThumbnailNews from '@/components/ThumbnailNews.vue'

const router = useRouter()

const slides = [
  { img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6', caption: 'Slide 1' },
  { img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee', caption: 'Slide 2' },
  { img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470', caption: 'Slide 3' }
]
const current = ref(0)
let intervalId


function goToEvent() {
  router.push('/event')
}

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
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    title: 'Judul Berita Menarik 1',
    date: '23 Agustus 2025',
    summary: 'Ringkasan berita pertama yang sedang trending di Pemulung Alam.'
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    title: 'Judul Berita Menarik 2',
    date: '22 Agustus 2025',
    summary: 'Ringkasan berita kedua yang sedang trending di Pemulung Alam.'
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
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