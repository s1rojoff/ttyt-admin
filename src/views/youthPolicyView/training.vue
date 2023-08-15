<script setup lang="ts">
import BaseInputImage from '@/components/BaseInputImage/index.vue'
import BaseInput from '@/components/BaseInput/index.vue'
import BaseTextarea from '@/components/BaseTextarea/index.vue'
import BaseButton from '@/components/BaseButton/index.vue'
</script>
<template>
  <div class="text-center uppercase text-xl">
    <p>To'garaklar va klublar</p>
  </div>
  <div class="flex gap-5 w-full mt-5">
    <div>
      <BaseInputImage />
    </div>
    <div class="w-full flex flex-col gap-5">
      <BaseInput type="text" placeholder="To'garak nomi"/>
      <BaseInput type="date" size="sm"/>
      <BaseTextarea placeholder="qisqacha ma'lumot" class="h-20" />
    </div>
  </div>
  <div class="mt-5">
    <BaseTextarea placeholder="To'liq ma'lumot" class="h-36"/>
  </div>
  <div class="text-end mt-5">
    <BaseButton />
  </div>
</template>