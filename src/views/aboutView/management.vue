<script setup lang="ts">
import BaseInput from '@/components/BaseInput/index.vue'
import BaseInputImage from '@/components/BaseInputImage/index.vue'
import BaseInputTextarea from '@/components/BaseTextarea/index.vue'
import BaseButton from '@/components/BaseButton/index.vue'
</script>
<template>
  <div class="text-center uppercase text-xl">
    <p>Rahbariyat</p>
  </div>
  <div class="flex gap-10 justify-between ">
    <div>
      <BaseInputImage />
    </div>
    <div class="flex flex-col gap-y-5 w-full">
      <BaseInput type="text"  placeholder="Lavozim" />
      <BaseInput type="text"  placeholder="FISH" />
      <div class="flex justify-between items-center gap-5">
        <BaseInput type="number" class="w-full" placeholder="Telefon" />
        <BaseInput type="email" class="w-full" placeholder="Email" />
      </div>
      <BaseInput type="text" size="md" placeholder="Qabul kunlari" />
    </div>
  </div>
  <div class="mt-10 flex justify-between gap-5">
    <BaseInputTextarea placeholder="Ish tajribasi" class="h-40" />
    <BaseInputTextarea placeholder="Majburiyatlari" class="h-40" />
  </div>
  <div class="w-full text-end mt-5">
    <BaseButton />
  </div>
</template>
