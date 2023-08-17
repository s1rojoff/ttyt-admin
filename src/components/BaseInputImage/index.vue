<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['downloadImg'])
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
  emit('downloadImg', event.target.files)
}
</script>
<template>
  <div>
    <label for="file" class="cursor-pointer">
      <div
        class="bg-[url('/images/bg-user1.jpg')] bg-center object-cover w-40 h-40 rounded-lg border border-[#33509d] mb-1 overflow-hidden"
      >
        <img :src="imageSrc" alt="img" v-if="imageSrc" class="object-cover w-full h-full" />
      </div>
      <p>Rasm yuklang</p>
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
