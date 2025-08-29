<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t, locale } = useI18n()
const router = useRouter()
const showLang = ref(false)
const showMenu = ref(false) // toggle mobile menu

function goTo(path) {
  router.push(path)
  showMenu.value = false // tutup menu saat klik
}

function changeLang(lang) {
  locale.value = lang
  showLang.value = false
  showMenu.value = false
}
</script>

<template>
  <nav class="fixed top-0 left-0 w-full bg-gradient-to-r from-green-700 via-blue-700 to-green-700 text-white shadow z-50">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <img src="@/assets/img/logo_pa.png" alt="Logo" class="h-10 w-10 rounded-full shadow-lg border-2 border-white" />
        <span class="font-extrabold text-2xl tracking-wide drop-shadow">Pemulung Alam</span>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-4">
        <button @click="goTo('/')" class="hover:bg-green-600 px-3 py-2 rounded transition font-semibold">{{ t('menu.home') }}</button>
        <button @click="goTo('/event')" class="hover:bg-green-600 px-3 py-2 rounded transition font-semibold">{{ t('menu.event') }}</button>
        <button @click="goTo('/about')" class="hover:bg-green-600 px-3 py-2 rounded transition font-semibold">{{ t('menu.about') }}</button>
        
        <!-- Language Selector -->
        <div class="relative ml-2">
          <button
            class="flex items-center px-2 py-1 bg-blue-700 rounded hover:bg-blue-800 border border-white font-semibold focus:outline-none"
            @click="showLang = !showLang"
          >
            <img
              v-if="locale === 'id'"
              src="https://flagcdn.com/id.svg"
              alt="ID"
              class="w-6 h-6 rounded-full mr-2"
            />
            <img
              v-else
              src="https://flagcdn.com/gb.svg"
              alt="EN"
              class="w-6 h-6 rounded-full mr-2"
            />
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-if="showLang" class="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-10">
            <button class="flex items-center w-full text-left px-4 py-2 hover:bg-blue-100" @click="changeLang('id')">
              <img src="https://flagcdn.com/id.svg" alt="ID" class="w-6 h-6 rounded-full mr-2" /> Indonesia
            </button>
            <button class="flex items-center w-full text-left px-4 py-2 hover:bg-blue-100" @click="changeLang('en')">
              <img src="https://flagcdn.com/gb.svg" alt="EN" class="w-6 h-6 rounded-full mr-2" /> English
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden flex items-center" @click="showMenu = !showMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!showMenu" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <div v-if="showMenu" class="md:hidden bg-green-800 px-4 py-3 space-y-2">
      <button @click="goTo('/')" class="block w-full text-left px-3 py-2 rounded hover:bg-green-600 font-semibold">{{ t('menu.home') }}</button>
      <button @click="goTo('/event')" class="block w-full text-left px-3 py-2 rounded hover:bg-green-600 font-semibold">{{ t('menu.event') }}</button>
      <button @click="goTo('/about')" class="block w-full text-left px-3 py-2 rounded hover:bg-green-600 font-semibold">{{ t('menu.about') }}</button>

      <!-- Language Selector in Mobile -->
      <div class="mt-2 border-t border-green-700 pt-2">
        <button @click="changeLang('id')" class="flex items-center w-full px-3 py-2 hover:bg-green-600">
          <img src="https://flagcdn.com/id.svg" alt="ID" class="w-6 h-6 rounded-full mr-2" /> Indonesia
        </button>
        <button @click="changeLang('en')" class="flex items-center w-full px-3 py-2 hover:bg-green-600">
          <img src="https://flagcdn.com/gb.svg" alt="EN" class="w-6 h-6 rounded-full mr-2" /> English
        </button>
      </div>
    </div>
  </nav>
</template>
