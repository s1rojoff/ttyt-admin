<script setup lang="ts">
import BaseInputImage from '@/components/BaseInputImage/index.vue'
import BaseInput from '@/components/BaseInput/index.vue'
import BaseTextarea from '@/components/BaseTextarea/index.vue'
import BaseButton from '@/components/BaseButton/index.vue'
</script>
<template>
  <div class="text-center uppercase text-xl">
    <p>Bo'limlar</p>
  </div>
  <div class="flex justify-start gap-5 mt-5">
    <BaseInputImage />
    <div class="w-full">
      <BaseInput placeholder="Bo'lim nomi" size="full" />
      <BaseTextarea placeholder="Bo'lim haqida ma'lumot" class="mt-3 h-40" />
    </div>
  </div>
  <div class="text-center uppercase text-xl mt-5">
    <p>Bo'lim boshlig'i</p>
  </div>
  <div>
    <div class="flex justify-start gap-5 mt-5">
      <BaseInputImage />
      <div class="w-full">
        <BaseInput type="text" placeholder="Lavozim" size="full" />
        <BaseInput type="text" placeholder="FISh" class="mt-3" size="full" />
        <div class="mt-3 flex justify-between gap-5 items-center">
          <BaseInput type="number" placeholder="Telefon" size="full" class="w-full" />
          <BaseInput type="email" placeholder="E-mail" class="w-full" size="full" />
        </div>
        <div class="flex justify-end mt-10"><BaseButton/></div>
      </div>
    </div>
  </div>
</template>
