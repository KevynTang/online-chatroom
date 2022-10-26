<script setup lang='ts'>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useInfoStore } from '../stores/useInfoStore';
const infoStore = useInfoStore()
const router = useRouter()

const email = ref('')
const pwd = ref('')


const login = async () => {
  infoStore.login(email.value, pwd.value) 
}

watch(infoStore.user, () => {
  router.push('/')
})

</script>

<template>
  <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg max-w-md mx-auto">
    <h3 class="text-2xl font-bold text-center">Login</h3>
    <div class="block mt-4" for="email">Email</div>
    <input type="text" v-model="email"
      class="w-full px-4 py-2 mt-2 border rounded-md outline-none focus:ring-amber-600">
    <div class="block mt-4">Password</div>
    <input type="password" v-model="pwd" class="w-full px-4 py-2 mt-2 border rounded-md outline-none focus:ring-amber-600">
    <button @click="login" class="w-full px-6 py-2 mt-6 text-white bg-amber-600 rounded-lg hover:bg-amber-900">Login
    </button>
    <div class="mt-6 text-grey-dark">
      Don't have an account?
      <router-link to="/signup" class="text-amber-600 hover:underline">
        Sign Up
      </router-link>
    </div>
  </div>

</template>

<style scoped>

</style>
