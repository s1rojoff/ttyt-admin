<script setup lang="ts">
import BaseInputImage from '@/components/BaseInputImage/index.vue'
import BaseButton from '@/components/BaseButton/index.vue'
import { ref } from 'vue'
const img = ref<string>('')
const images = ref<string[]>([])
function test(val: any) {
  let file = val[0]
  if (file) {
    const reader = new FileReader()

    reader.onload = (e: any) => {
      img.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
  if (images.value.length <= 8) {
    images.value.push(img.value)
  }

}
</script>
<template>
  <div class="text-center uppercase text-xl">
    <p>Talabalar hayotidan fotogalereya</p>
  </div>
  <div class="mt-5 flex justify-center">

    <BaseInputImage @download-img="test" />
  </div>
  <!-- All images -->
  <div class="mt-5">
    <p class="text-lg pb-3">Barcha rasmlar</p>
    <div class="flex items-center justify-start gap-3 flex-wrap">
      <img
        class="w-28 h-28 rounded-md first:hidden"
        v-for="(item, index) in images"
        :src="item"
        :key="index"
        alt=""
      />
    </div>
  </div>
  <div class="mt-5 text-end">
    <BaseButton />
  </div>
</template>
