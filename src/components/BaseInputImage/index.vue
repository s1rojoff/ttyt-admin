<script setup lang="ts">
import { ref } from 'vue'
const imageSrc = ref<string>('')
const inputFile = ref<string | null>('')
function test() {
  console.log(inputFile)
}
function handleFileChange(event: any) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()

    reader.onload = (e: any) => {
      imageSrc.value = e.target.result
    }

    reader.readAsDataURL(file)
  }
}
</script>
<template>
  <div>
    <div class="bg-[url('/images/bg-user1.jpg')] bg-center object-cover w-40 h-40 rounded-lg border border-[#33509d] mb-5 overflow-hidden">
      <p class=""><img :src="imageSrc" alt="" class="object-cover"/></p>
    </div>
    <input ref="inputFile" type="file" @change="handleFileChange" class="file:bg-[#33509d] rounded-full file:text-white file:border-none file:bg-none" />
    
  </div>
</template>