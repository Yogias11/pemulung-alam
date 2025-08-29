<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const router = useRouter()
const { t } = useI18n()

const props = defineProps({
  img: String,
  title: String,
  date: String,
  summary: String,
  id: [String, Number]
})

// Import image default dari assets
import thumbnailImg from '@/assets/img/thumbnail.jpeg'

function openDetail() {
  router.push(`/berita/${props.id}`)
}
</script>

<template>
  <div
    class="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition duration-300"
  >
    <img
      :src="img || thumbnailImg"
      alt="Thumbnail Berita"
      class="w-full h-40 object-cover rounded-lg mb-3"
    />
    <p class="text-lg font-semibold text-green-800 mb-1 line-clamp-2">{{ title }}</p>
    <p class="text-sm text-gray-500 mb-2">{{ date }}</p>
    <p class="text-sm text-gray-700 line-clamp-3">{{ summary }}</p>
    <button
      class="mt-4 px-4 py-2 bg-green-700 text-white font-medium rounded-lg shadow hover:bg-green-800 transition"
      @click="openDetail"
    >
      {{ t('readMore') }}
    </button>
  </div>
</template>

<style scoped>
/* Membatasi teks agar tidak terlalu panjang */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
