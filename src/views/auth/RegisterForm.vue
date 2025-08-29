<template>
  <div class="min-h-screen flex items-center justify-center bg-green-50 p-4">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg border border-green-200 p-6">
        <div class="flex justify-center">
        <img src="@/assets/img/logo_pa.png" alt="Logo Pemulung Alam" class="h-24 w-auto" />
        </div>
      <h2 class="text-2xl font-bold text-green-800 mb-6 text-center">Daftar Akun</h2>

      <form @submit.prevent="onRegister" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-green-700">Nama Lengkap</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Masukkan nama lengkap"
            required
            class="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-green-700">Username</label>
          <input
            v-model="form.username"
            type="text"
            placeholder="Masukkan username"
            required
            class="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-green-700">Email</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="Masukkan email"
            required
            class="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-green-700">Password</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="Masukkan password"
            required
            class="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-300"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
        >
          Daftar
        </button>
      </form>

      <p class="mt-4 text-sm text-center text-gray-600">
        Sudah punya akun?
        <router-link to="/login" class="text-green-700 font-semibold hover:underline">Masuk</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  username: '',
  email: '',
  password: ''
})

function onRegister() {
  console.log('Register Data:', form)
  // TODO: Panggil API register di sini
}
</script>
