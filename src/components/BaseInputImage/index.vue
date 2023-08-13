<script setup lang="ts">
import { ref } from 'vue'
const imageSrc = ref<string>('')
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
    <label for="file">
      <div
        class="bg-[url('/images/bg-user1.jpg')] bg-center cursor-pointer object-cover w-40 h-40 rounded-lg border border-[#33509d] mb-5 overflow-hidden"
      >
        <img :src="imageSrc" alt="img" v-if="imageSrc" class="object-cover w-full h-full" />
      </div>
    </label>
    <input
      ref="inputFile"
      type="file"
      @change="handleFileChange"
      class="hidden"
      id="file"
    />
  </div>
</template>
