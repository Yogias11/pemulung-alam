<template>
  <section class="max-w-7xl mx-auto p-6">
    <header class="mb-8">
      <h1 class="text-3xl font-semibold text-green-900 ">Berita Terbaru</h1>
      <p class="text-green-700 dark:text-green-300">Kabar terbaru seputar lingkungan, alam, dan komunitas</p>
    </header>

    <!-- Grid 2 kolom -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <template v-for="post in news" :key="post.id">
        <article
          class="bg-gradient-to-b from-green-50 to-emerald-100 dark:from-emerald-900/80 dark:to-green-800/80 rounded-2xl shadow-md overflow-hidden flex flex-col hover:scale-[1.01] transition-transform duration-200 border border-green-200 dark:border-green-700"
        >
          <!-- Thumbnail -->
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-48 object-cover"
          />

          <!-- Konten -->
          <div class="p-5 flex flex-col flex-1">
            <h2 class="text-xl font-semibold text-green-900 dark:text-green-100 mb-2">{{ post.title }}</h2>
            <p class="text-sm text-green-700 dark:text-green-300 mb-4">{{ post.excerpt }}</p>

            <div class="mt-auto flex justify-between items-center">
              <span class="text-xs text-green-600 dark:text-green-300">{{ post.date }}</span>
              <a
                :href="`/berita/${post.id}`"
                class="text-sm font-medium text-green-700 dark:text-green-200 hover:underline"
              >
                Baca Selengkapnya →
              </a>
            </div>
          </div>
        </article>
      </template>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const news = ref([
  {
    id: 1,
    title: 'Pemulung Alam Bersihkan Pantai dari Sampah Plastik',
    excerpt: 'Komunitas Pemulung Alam berhasil mengumpulkan lebih dari 500 kg sampah plastik di pesisir pantai...',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    date: '28 Agustus 2025'
  },
  {
    id: 2,
    title: 'Penanaman 1000 Pohon di Kawasan Pegunungan',
    excerpt: 'Gerakan penghijauan kembali dilakukan untuk mencegah longsor dan menjaga ekosistem hutan...',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    date: '26 Agustus 2025'
  },
  {
    id: 3,
    title: 'Pelatihan Daur Ulang untuk Warga Desa',
    excerpt: 'Warga desa mendapatkan edukasi mengolah sampah organik dan anorganik menjadi barang bermanfaat...',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
    date: '20 Agustus 2025'
  },
  {
    id: 4,
    title: 'Workshop Seni dari Barang Bekas',
    excerpt: 'Seniman lokal mengajak masyarakat membuat karya seni dari barang bekas untuk meningkatkan kreativitas...',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    date: '15 Agustus 2025'
  }
])
</script>
