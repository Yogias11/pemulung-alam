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

// Import image from assets
import thumbnailImg from '@/assets/img/thumbnail.jpeg'

function openDetail() {
  router.push(`/berita/${props.id}`)
}
</script>

<template>
  <div class="flex flex-col items-center">
    <img :src="img || thumbnailImg" alt="Thumbnail Berita" class="w-full h-32 object-cover rounded mb-2" />
    <p class="text-base font-medium mb-1">{{ title }}</p>
    <p class="text-sm text-gray-500 mb-2">{{ date }}</p>
    <p class="text-sm">{{ summary }}</p>
    <button
      class="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      @click="openDetail"
    >
      {{ t('readMore') }}
    </button>
  </div>
</template>