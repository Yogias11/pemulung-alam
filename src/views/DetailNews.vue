<template>
  <section class="max-w-4xl mx-auto p-6">
    <!-- Tombol kembali -->
    <div class="mb-6">
      <router-link
        to="/event"
        class="inline-flex items-center text-green-700 dark:text-green-300 hover:underline"
      >
        ← Kembali ke daftar berita
      </router-link>
    </div>

    <!-- Judul & tanggal -->
    <header class="mb-4">
      <h1 class="text-3xl font-bold text-green-900">{{ berita.title }}</h1>
      <p class="text-sm text-green-700 dark:text-green-300">{{ berita.date }}</p>
    </header>

    <!-- Gambar utama -->
    <div class="mb-6">
      <img
        :src="berita.image"
        :alt="berita.title"
        class="w-full rounded-2xl shadow-md border border-green-200 dark:border-green-700"
      />
    </div>

    <!-- Konten berita -->
    <article
      class="prose prose-green max-w-none dark:prose-invert prose-headings:text-green-900 dark:prose-headings:text-green-100 prose-a:text-green-700 dark:prose-a:text-green-300"
    >
      <p>
        {{ berita.content }}
      </p>
      <p>
        Aliquam erat volutpat. Cras porttitor viverra augue, at porta enim
        viverra sed. Sed consequat dignissim eros, vitae scelerisque lorem
        fermentum nec. Sed dictum sodales erat, ac tristique ipsum tincidunt in.
      </p>
      <h2>Upaya Komunitas</h2>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Maecenas faucibus mollis interdum. Sed posuere consectetur est at
        lobortis.
      </p>
    </article>

    <!-- Bagikan -->
    <div class="mt-8 flex items-center gap-3">
      <span class="text-sm font-medium text-green-900 dark:text-green-100">Bagikan:</span>
      <a href="#" class="p-2 rounded-full hover:bg-green-200 dark:hover:bg-green-700">
        <!-- Ikon Facebook -->
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          />
        </svg>
      </a>
      <a href="#" class="p-2 rounded-full hover:bg-green-200 dark:hover:bg-green-700">
        <!-- Ikon WhatsApp -->
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6.01L0 24l6.17-1.6A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.93 9.93 0 0 1-5.05-1.37l-.36-.21-3.66.95.98-3.57-.23-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.14-6.42c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.6.14s-.69.9-.85 1.09c-.16.19-.31.21-.59.07-.28-.14-1.19-.44-2.27-1.42-.84-.75-1.4-1.68-1.56-1.96-.16-.28-.02-.43.12-.57.12-.12.28-.31.42-.46.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.6-1.45-.82-1.98-.21-.5-.42-.43-.6-.44h-.51c-.19 0-.49.07-.74.35-.25.28-.97.95-.97 2.31s.99 2.68 1.13 2.86c.14.19 1.94 2.96 4.7 4.15.66.29 1.18.46 1.58.59.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.19-.53-.33z"
          />
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Contoh data dummy
const berita = ref({
  id: 1,
  title: 'Pemulung Alam Bersihkan Pantai dari Sampah Plastik',
  date: '28 Agustus 2025',
  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  content:
    'Komunitas Pemulung Alam berhasil mengumpulkan lebih dari 500 kg sampah plastik di pesisir pantai. Aksi ini dilakukan oleh relawan yang tersebar di berbagai wilayah pesisir dengan tujuan mengurangi pencemaran laut.'
})
</script>

<style>
/* Tambahan styling untuk warna hijau di prose */
.prose-green a {
  color: #166534; /* Tailwind green-800 */
}
</style>
