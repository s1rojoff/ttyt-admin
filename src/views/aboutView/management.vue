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
  <div class="flex gap-10">
    <div>
      <BaseInputImage />
    </div>
    <div class="flex flex-col gap-y-5">
      <BaseInput type="text" size="md" placeholder="Lavozim" />
      <BaseInput type="text" size="md" placeholder="FISH" />
      <BaseInput type="number" size="sm" placeholder="Telefon" />
      <BaseInput type="email" size="sm" placeholder="Email" />
      <BaseInput type="text" size="sm" placeholder="Qabul kunlari" />
    </div>
  </div>
  <div class="mt-10 flex justify-between"> 
    <BaseInputTextarea placeholder="Ish tajribasi" cols="60" rows="5"/>
    <BaseInputTextarea placeholder="Majburiyatlari" cols="60" rows="5"/>
  </div>
  <div class="w-full text-end mt-5">
    <BaseButton />
  </div>
</template>
