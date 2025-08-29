<template>
  <section class="max-w-7xl mx-auto p-6">
    <header class="mb-6 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-semibold">Our Team</h1>
        <p class="text-sm text-slate-500">Meet the people who make it happen</p>
      </div>
      <div class="hidden sm:flex gap-2">
        <!-- <button class="px-3 py-1 rounded-md border text-sm">All</button>
        <button class="px-3 py-1 rounded-md border text-sm">Design</button>
        <button class="px-3 py-1 rounded-md border text-sm">Engineering</button> -->
      </div>
    </header>

    <!-- Grid: 4 columns x 2 rows -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
      <template v-for="member in members" :key="member.id">
        <article
          class="bg-gradient-to-b from-green-50 to-emerald-100 dark:from-emerald-900/80 dark:to-green-800/80 backdrop-blur rounded-2xl shadow-md p-5 flex flex-col items-center text-center hover:scale-101 transition-transform duration-200 border border-green-200 dark:border-green-700"
        >
          <img
            :src="member.avatar"
            :alt="member.name"
            class="w-24 h-24 rounded-full object-cover mb-3 ring-2 ring-offset-2 ring-emerald-200"
          />
          <h3 class="font-medium text-lg text-green-900 dark:text-green-100">{{ member.name }}</h3>
          <p class="text-sm text-green-700 dark:text-green-300 mb-3">{{ member.role }}</p>

          <p class="text-sm text-green-800 dark:text-green-200 max-w-[18rem] mb-4">{{ member.bio }}</p>

          <div class="flex gap-3">
            <a
              :href="member.social.tiktok || '#'"
              target="_blank"
              aria-label="tiktok"
              class="p-2 rounded-full hover:bg-green-200 dark:hover:bg-green-700"
              :class="{ 'opacity-40 pointer-events-none': !member.social.tiktok }"
            >
              <!-- ikon TikTok -->
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
              </svg>
            </a>


            <a
              :href="member.social.instagram || '#'"
              target="_blank"
              aria-label="instagram"
              class="p-2 rounded-full hover:bg-green-200 dark:hover:bg-green-700"
              :class="{ 'opacity-40 pointer-events-none': !member.social.instagram }"
            >
              <!-- ikon instagram -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3a3.003 3.003 0 0 1 0-6zm4.5-.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/></svg>
            </a>
          </div>
        </article>
      </template>

    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'

const members = ref([
  {
    id: 1,
    name: 'Abidin',
    role: 'Ketua',
    bio: 'Leads product vision, roadmap and cross-functional teams to deliver impact.',
    avatar: 'https://i.pravatar.cc/150?img=12',
    social: { tiktok: 'https://tiktok.com/', instagram: 'https://instagram.com/' }
  },
  {
    id: 2,
    name: 'Fitra Arief Prakoso',
    role: 'Wakil Ketua',
    bio: 'Builds scalable systems and loves clean architecture.',
    avatar: 'https://i.pravatar.cc/150?img=5',
    social: { tiktok: '', instagram: 'https://instagram.com/' }
  },
  {
    id: 3,
    name: 'Moch Irvan Arrasyid',
    role: 'Member',
    bio: 'Designs intuitive interfaces and meaningful experiences.',
    avatar: 'https://i.pravatar.cc/150?img=32',
    social: { tiktok: 'https://tiktok.com/', instagram: '' }
  },
  {
    id: 4,
    name: "Rif'an aunul khabibi",
    role: 'Member',
    bio: 'Specialist in Vue and delightful UI interactions.',
    avatar: 'https://i.pravatar.cc/150?img=47',
    social: { tiktok: '', instagram: 'https://instagram.com/' }
  },
  {
    id: 5,
    name: 'Isma Aditya Pratama',
    role: 'Member',
    bio: 'Makes sure releases are rock-solid and reliable.',
    avatar: 'https://i.pravatar.cc/150?img=66',
    social: { tiktok: '', instagram: '' }
  },
  {
    id: 6,
    name: 'Dita Aulia Himayanti',
    role: 'Member',
    bio: 'Automates infra and deployment pipelines.',
    avatar: 'https://i.pravatar.cc/150?img=8',
    social: { tiktok: '', instagram: 'https://instagram.com/' }
  },
  {
    id: 7,
    name: 'Yuni Khoirul Fatimah',
    role: 'Member',
    bio: 'Turns data into product insights and experiments.',
    avatar: 'https://i.pravatar.cc/150?img=21',
    social: { tiktok: '', instagram: '' }
  },
  {
    id: 8,
    name: 'Abdul Rozak Bachri',
    role: 'Member',
    bio: 'Builds buttery-smooth mobile experiences.',
    avatar: 'https://i.pravatar.cc/150?img=3',
    social: { tiktok: '', instagram: 'https://instagram.com/' }
  }
])
</script>

<style scoped>
/* subtle hover scale utility for modern Tailwind (keeps classes tidy) */
.hover\:scale-101:hover { transform: scale(1.01); }
</style>
