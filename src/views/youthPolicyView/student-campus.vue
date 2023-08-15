<script setup lang="ts">
import BaseInputImage from '@/components/BaseInputImage/index.vue'
import BaseButton from '@/components/BaseButton/index.vue'
import BaseInput from '@/components/BaseInput/index.vue'
import BaseTextarea from '@/components/BaseTextarea/index.vue'
</script>
<template>
  <div class="text-center uppercase text-xl">
    <p>Talabalar shaharchasi</p>
  </div>
  <div class="flex gap-5 mt-5 w-full">
    <div>
      <BaseInputImage />
    </div>
    <div class="flex flex-col gap-5 w-full">
      <BaseInput placeholder="Shaharcha haqida yangilik"/>
      <BaseTextarea  placeholder="To'liq ma'lumot" class="h-28"/>
    </div>
  </div>
  <div class="text-end  ">
    <BaseButton />
  </div>
</template>
