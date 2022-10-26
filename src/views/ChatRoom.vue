<script setup lang='ts'>
import { onBeforeMount } from 'vue';
import { Ref, ref, watch } from 'vue'
import Message from '../components/Message.vue'
import { useInfoStore } from '../stores/useInfoStore';
const infoStore = useInfoStore()

const message = ref('')

const messageListDiv: Ref<HTMLElement | null> = ref(null)

const len = ref(0)

onBeforeMount(async () => {
  infoStore.getMessageList()
})

const autoScroll = () => {
  setTimeout(() => {
    if (messageListDiv.value) {
      messageListDiv.value.scrollTop = messageListDiv.value.scrollHeight
    }
  }, 50)

}

setInterval(() => {
  infoStore.getMessageList()
  len.value = infoStore.messageList.length
}, 2000)

watch(infoStore.messageList, () => {
  len.value = infoStore.messageList.length
})

watch(len, () => {
  autoScroll()
})


</script>

<template>
  <div class="border rounded-md shadow-md bg-gray-50 w-full h-full overflow-hidden">
    <div class="bg-amber-600 text-xl text-white font-bold p-3 h-fit">FireChat</div>
    <div class="w-full h-full grid grid-rows-6">
      <div ref="messageListDiv" class="w-full p-6 overflow-scroll scrollbar-none row-span-5 scroll-smooth">
        <Message v-for="message in infoStore.messageList" :from="message.from" :text="message.text"
          :time="message.time" />
      </div>

      <div class="w-full h-fit border-t border-stone-200 grid grid-cols-8 place-items-center">
        <input @keyup.enter="infoStore.sendMessage(message); message = ''" type="text" v-model="message"
          class="p-2 m-1 block rounded-md w-full h-full outline-none resize-none col-span-7"
          :placeholder="`Send Message as ${infoStore.user.displayName}`" />
        <div @click="infoStore.sendMessage(message); message = ''" class="w-full h-">
          <svg class="w-8 h-8 text-amber-800 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

