<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="max-w-2xl mx-auto mt-32 p-6 bg-white rounded shadow">
    <h1 class="text-2xl font-bold mb-4">Detail Berita ID: {{ route.params.id }}</h1>
    <p>Isi detail berita di sini...</p>
  </div>
</template>