<script setup lang="ts">
import { useInfoStore } from '../stores/useInfoStore';
const infoStore = useInfoStore()

const props = defineProps<{
  from: string
  text: string
  time: string
}>()


</script>

<template>
  <div>

    <div v-if="props.from != infoStore.user.displayName" class="flex justify-start space-x-2 mb-4">
      <div class="flex-shrink-0 h-12 w-12 bg-amber-200 rounded-full"></div>
      <div>
        <div class="flex justify-start">
          <div class="text-xs text-stone-400">{{ from }}</div>
        </div>
        <div class="float-left mx-1 my-1 w-fit md:mr-20 mr-10 px-4 py-2 text-stone-700 rounded shadow">
          <span class="block">{{ text }}</span>
        </div>
      </div>
    </div>

    <div v-else="props.from != 'test'" class="flex justify-end space-x-2 mb-4">
      <div>
        <div class="flex justify-end">
          <div class="text-xs text-stone-400">{{ from }}</div>
        </div>
        <div class="float-right mx-1 w-fit md:ml-20 ml-10 px-4 py-2 bg-amber-600 text-white rounded shadow">
          <span class="block">{{ text }}</span>
        </div>
      </div>
      <div class="flex-shrink-0 h-12 w-12 bg-lime-200 rounded-full"></div>
    </div>

  </div>
</template>
