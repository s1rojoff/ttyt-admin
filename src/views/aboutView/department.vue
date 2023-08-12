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
    <input ref="inputFile" type="file" @change="handleFileChange" />
    <div class="w-40 h-40 rounded-lg border border-red-600">
      <p><img :src="imageSrc" alt="" /></p>
    </div>
    <button @click="test">click me</button>
  </div>
</template>
