<script setup lang="ts">
import { useInfoStore } from './stores/useInfoStore';
import { useRouter } from 'vue-router'
const infoStore = useInfoStore()
const router = useRouter()

router.beforeEach((to, from) => {
  if (infoStore.user.logined == false && to.fullPath == '/') {
    router.push('/login')
    return false
  }
  else return true
})

</script>

<template>
  <div class="container max-w-2xl h-screen pb-4 overflow-hidden mx-auto p-1">
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
