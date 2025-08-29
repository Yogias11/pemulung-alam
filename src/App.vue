<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const { t } = useI18n()
const showMenu = ref(false)

</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <!-- Fixed Navbar -->
    <Navbar />
    <div class="flex-1 pt-20">
      <router-view />
    </div>
    <!-- Footer always at bottom -->
    <Footer />
  </div>
</template>

<style scoped>
/* Add custom styles if needed */
</style>