<script setup>
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>

<template>
  <nav class="fixed top-0 left-0 w-full bg-blue-600 text-white px-4 py-3 flex justify-between items-center shadow z-50">
    <div class="font-bold text-xl flex items-center">
      <img src="@/assets/img/logo_pa.png" alt="Logo" class="inline-block h-8 w-8 mr-2" />
      Pemulung Alam
    </div>
    <div class="flex items-center space-x-4">
      <button>{{ t('menu.home') }}</button>
      <button>{{ t('menu.event') }}</button>
      <button>{{ t('menu.about') }}</button>
      <select v-model="locale" class="bg-blue-700 text-white rounded px-2 py-1 ml-2">
        <option value="id">Indonesia</option>
        <option value="en">English</option>
      </select>
    </div>
  </nav>
</template>